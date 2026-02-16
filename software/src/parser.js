/**
 * Recipe Markdown Parser
 * Converts Elle's cooking repo markdown recipes into structured data
 * that can be stored in the database and executed by the robot.
 */

import { v4 as uuid } from 'uuid';

// Robot action mappings for common cooking verbs
const ROBOT_ACTIONS = {
  'stir': { action: 'stir', subsystem: 'stirring' },
  'whisk': { action: 'stir', subsystem: 'stirring', params: { speed: 'high' } },
  'fold': { action: 'stir', subsystem: 'stirring', params: { speed: 'low', pattern: 'fold' } },
  'heat': { action: 'set_heat', subsystem: 'heating' },
  'preheat': { action: 'set_heat', subsystem: 'heating' },
  'sauté': { action: 'set_heat', subsystem: 'heating', params: { level: 'medium-high' } },
  'simmer': { action: 'set_heat', subsystem: 'heating', params: { level: 'low' } },
  'boil': { action: 'set_heat', subsystem: 'heating', params: { level: 'high' } },
  'add water': { action: 'dispense', subsystem: 'dispensing', params: { liquid: 'water' } },
  'add oil': { action: 'dispense', subsystem: 'dispensing', params: { liquid: 'oil' } },
  'monitor': { action: 'monitor', subsystem: 'sensing' },
};

/**
 * Parse a markdown recipe file into structured data
 */
export function parseRecipe(markdown, sourcePath = null) {
  const lines = markdown.split('\n');
  const recipe = {
    id: uuid(),
    title: '',
    source_path: sourcePath,
    prep_time: null,
    cook_time: null,
    total_time: null,
    servings: null,
    difficulty: null,
    type: null,
    description: null,
    notes: null,
    robot_compatible: false,
    ingredients: [],
    steps: [],
  };

  // Parse title (first # heading)
  const titleLine = lines.find(l => /^#\s+/.test(l) && !/^##/.test(l));
  if (titleLine) {
    recipe.title = titleLine.replace(/^#\s+/, '').trim();
  }

  // Parse metadata (bold key-value pairs)
  for (const line of lines) {
    const metaMatch = line.match(/\*\*(.+?)\*\*\s*[:：]\s*(.+)/);
    if (metaMatch) {
      const [, key, value] = metaMatch;
      const k = key.toLowerCase().trim();
      const v = value.trim();
      if (k.includes('prep time')) recipe.prep_time = v;
      else if (k.includes('cook time')) recipe.cook_time = v;
      else if (k.includes('total time')) recipe.total_time = v;
      else if (k.includes('serving')) recipe.servings = v;
      else if (k.includes('difficulty')) recipe.difficulty = v;
      else if (k.includes('type')) recipe.type = v;
    }
  }

  // Parse description (text after title, before ## sections)
  const titleIdx = lines.findIndex(l => /^#\s+/.test(l) && !/^##/.test(l));
  const firstSectionIdx = lines.findIndex((l, i) => i > titleIdx && /^##\s+/.test(l));
  if (titleIdx >= 0 && firstSectionIdx > titleIdx) {
    const descLines = lines.slice(titleIdx + 1, firstSectionIdx)
      .filter(l => !l.match(/\*\*(.+?)\*\*\s*[:：]/) && l.trim());
    if (descLines.length) {
      recipe.description = descLines.join('\n').trim();
    }
  }

  // Parse sections
  const sections = parseSections(lines);

  // Parse ingredients
  const ingredientSections = Object.entries(sections)
    .filter(([name]) => name.toLowerCase().includes('ingredient'));
  
  if (ingredientSections.length === 0) {
    // Look for sections that contain ingredient-like lists
    for (const [name, content] of Object.entries(sections)) {
      if (content.some(l => l.match(/^[-*]\s+\[?\s*\]?\s*\*?\*?.+/))) {
        ingredientSections.push([name, content]);
        break;
      }
    }
  }

  let ingredientOrder = 0;
  for (const [sectionName, content] of ingredientSections) {
    let currentSubsection = 'main';
    for (const line of content) {
      const subMatch = line.match(/^###\s+(.+)/);
      if (subMatch) {
        currentSubsection = subMatch[1].replace(/^for\s+(the\s+)?/i, '').trim();
        continue;
      }
      const ingredient = parseIngredientLine(line);
      if (ingredient) {
        ingredient.id = uuid();
        ingredient.section = currentSubsection;
        ingredient.sort_order = ingredientOrder++;
        recipe.ingredients.push(ingredient);
      }
    }
  }

  // Parse steps
  const stepSections = Object.entries(sections)
    .filter(([name]) => 
      name.toLowerCase().includes('instruction') ||
      name.toLowerCase().includes('step') ||
      name.toLowerCase().includes('method') ||
      name.toLowerCase().includes('directions'));

  // If no explicit instruction section, look for numbered lists in other sections
  if (stepSections.length === 0) {
    for (const [name, content] of Object.entries(sections)) {
      if (content.some(l => l.match(/^\d+\.\s+/))) {
        stepSections.push([name, content]);
      }
    }
  }

  let stepOrder = 0;
  for (const [sectionName, content] of stepSections) {
    let currentSubsection = sectionName;
    for (const line of content) {
      const subMatch = line.match(/^###\s+(.+)/);
      if (subMatch) {
        currentSubsection = subMatch[1].trim();
        continue;
      }
      const step = parseStepLine(line);
      if (step) {
        step.id = uuid();
        step.section = currentSubsection;
        step.sort_order = stepOrder;
        step.step_number = stepOrder + 1;
        stepOrder++;

        // Detect robot actions
        const robotInfo = detectRobotAction(step.instruction);
        if (robotInfo) {
          step.robot_action = robotInfo.action;
          step.robot_params = JSON.stringify(robotInfo.params || {});
        }

        // Detect if human intervention needed
        step.requires_human = detectHumanRequired(step.instruction);

        recipe.steps.push(step);
      }
    }
  }

  // Parse notes section
  const notesSections = Object.entries(sections)
    .filter(([name]) => name.toLowerCase().includes('note'));
  if (notesSections.length) {
    recipe.notes = notesSections.map(([, content]) => content.join('\n')).join('\n\n').trim();
  }

  // Determine robot compatibility
  recipe.robot_compatible = assessRobotCompatibility(recipe);

  return recipe;
}

function parseSections(lines) {
  const sections = {};
  let currentSection = '_preamble';
  sections[currentSection] = [];

  for (const line of lines) {
    const sectionMatch = line.match(/^##\s+(.+)/);
    if (sectionMatch) {
      currentSection = sectionMatch[1].trim();
      sections[currentSection] = [];
    } else {
      if (!sections[currentSection]) sections[currentSection] = [];
      sections[currentSection].push(line);
    }
  }
  return sections;
}

export function parseIngredientLine(line) {
  // Match lines like: - 1 cup flour or - [ ] **Flour** (1 cup)
  const stripped = line.replace(/^[-*]\s+\[?\s*[xX]?\s*\]?\s*/, '').trim();
  if (!stripped) return null;

  // Pattern: **Name** (quantity) - location
  const boldMatch = stripped.match(/\*\*(.+?)\*\*\s*\((.+?)\)?\s*(?:-\s*(.+))?/);
  if (boldMatch) {
    const parsed = parseQuantity(boldMatch[2] || '');
    return {
      name: boldMatch[1].trim(),
      quantity: parsed.quantity,
      unit: parsed.unit,
      notes: boldMatch[3]?.trim() || null,
    };
  }

  // Pattern: quantity unit name, notes
  const qtyMatch = stripped.match(/^([\d½¼¾⅓⅔⅛\/\s.-]+)\s*(cups?|tbsp|tsp|oz|lb|lbs?|cloves?|heads?|bunch|pinch|dash|cans?|bottles?|packages?|blocks?|pieces?|slices?|stalks?|sprigs?|inches?|Tbsp|cups?|teaspoons?|tablespoons?|pounds?|ounces?|grams?|g|kg|ml|l|liters?)\.?\s+(.+)/i);
  if (qtyMatch) {
    const [, qty, unit, rest] = qtyMatch;
    const [name, ...notesParts] = rest.split(/[,(]/);
    return {
      name: name.replace(/\*\*/g, '').trim(),
      quantity: qty.trim(),
      unit: unit.trim(),
      notes: notesParts.length ? notesParts.join(',').replace(/\)\s*$/, '').trim() : null,
    };
  }

  // Fallback: just the name
  if (stripped.length > 2) {
    return {
      name: stripped.replace(/\*\*/g, '').trim(),
      quantity: null,
      unit: null,
      notes: null,
    };
  }
  return null;
}

function parseQuantity(str) {
  const match = str.match(/^([\d½¼¾⅓⅔⅛\/\s.-]+)\s*(.+)?/);
  if (match) return { quantity: match[1].trim(), unit: match[2]?.trim() || null };
  return { quantity: null, unit: null };
}

export function parseStepLine(line) {
  // Match numbered steps: 1. Do something or **5:00** - Do something
  const numberedMatch = line.match(/^\d+\.\s+(.+)/);
  if (numberedMatch) {
    const instruction = numberedMatch[1].replace(/\*\*/g, '').trim();
    const duration = extractDuration(instruction);
    const temp = extractTemperature(instruction);
    return { instruction, duration_seconds: duration, temperature_f: temp };
  }

  // Match time-stamped steps: **5:00** - instruction
  const timeMatch = line.match(/\*\*(\d{1,2}:\d{2})\*\*\s*[-–]\s*(.+)/);
  if (timeMatch) {
    const instruction = timeMatch[2].replace(/\*\*/g, '').trim();
    const duration = extractDuration(instruction);
    const temp = extractTemperature(instruction);
    return { instruction, duration_seconds: duration, temperature_f: temp };
  }

  return null;
}

function extractDuration(text) {
  // "cook 5-6 minutes" → 330 seconds (average)
  const rangeMatch = text.match(/(\d+)\s*[-–]\s*(\d+)\s*minutes?/i);
  if (rangeMatch) {
    const avg = (parseInt(rangeMatch[1]) + parseInt(rangeMatch[2])) / 2;
    return Math.round(avg * 60);
  }
  const minMatch = text.match(/(\d+)\s*minutes?/i);
  if (minMatch) return parseInt(minMatch[1]) * 60;
  const secMatch = text.match(/(\d+)\s*seconds?/i);
  if (secMatch) return parseInt(secMatch[1]);
  const hrMatch = text.match(/(\d+)\s*hours?/i);
  if (hrMatch) return parseInt(hrMatch[1]) * 3600;
  return null;
}

function extractTemperature(text) {
  const match = text.match(/(\d{3,})\s*°?\s*F/i);
  if (match) return parseInt(match[1]);
  return null;
}

function detectRobotAction(instruction) {
  const lower = instruction.toLowerCase();
  for (const [trigger, info] of Object.entries(ROBOT_ACTIONS)) {
    if (lower.includes(trigger)) return info;
  }
  return null;
}

function detectHumanRequired(instruction) {
  const lower = instruction.toLowerCase();
  const humanTasks = [
    'cut', 'chop', 'dice', 'mince', 'slice', 'peel', 'trim',
    'taste', 'season to taste', 'adjust', 'plate', 'serve',
    'load', 'place', 'arrange', 'transfer', 'pour',
    'knead', 'shape', 'form', 'roll',
  ];
  return humanTasks.some(task => lower.includes(task)) ? 1 : 0;
}

function assessRobotCompatibility(recipe) {
  // A recipe is robot-compatible if it has steps the robot can execute
  const robotSteps = recipe.steps.filter(s => s.robot_action);
  const totalSteps = recipe.steps.length;
  if (totalSteps === 0) return false;
  // At least 30% of steps should have robot actions
  return (robotSteps.length / totalSteps) >= 0.3;
}
