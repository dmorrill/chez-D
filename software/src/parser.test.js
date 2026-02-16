import { describe, it } from 'node:test';
import assert from 'node:assert';
import { parseRecipe, parseIngredientLine, parseStepLine } from './parser.js';

describe('parseIngredientLine', () => {
  it('parses quantity + unit + name', () => {
    const result = parseIngredientLine('- 2 cups flour');
    assert.equal(result.name, 'flour');
    assert.equal(result.quantity, '2');
    assert.equal(result.unit, 'cups');
  });

  it('parses bold ingredient format', () => {
    const result = parseIngredientLine('- [ ] **Butter or olive oil** (2-3 tbsp) - *Location: pantry*');
    assert.equal(result.name, 'Butter or olive oil');
  });

  it('returns null for empty lines', () => {
    assert.equal(parseIngredientLine(''), null);
    assert.equal(parseIngredientLine('-  '), null);
  });
});

describe('parseStepLine', () => {
  it('parses numbered steps', () => {
    const result = parseStepLine('1. Cook for 5 minutes until golden');
    assert.equal(result.duration_seconds, 300);
    assert.ok(result.instruction.includes('Cook'));
  });

  it('parses timestamped steps', () => {
    const result = parseStepLine('**5:00** - Preheat oven to 400°F');
    assert.equal(result.temperature_f, 400);
  });

  it('returns null for non-step lines', () => {
    assert.equal(parseStepLine('Just some text'), null);
  });
});

describe('parseRecipe', () => {
  it('parses a full recipe markdown', () => {
    const md = `# Test Recipe

**Prep Time**: 10 minutes
**Cook Time**: 20 minutes
**Servings**: 4
**Difficulty**: Easy

## Ingredients
- 1 cup rice
- 2 cups water
- 1 tsp salt

## Instructions
1. Boil water in a pot
2. Add rice and stir for 30 seconds
3. Simmer for 15 minutes
4. Remove from heat and serve
`;
    const recipe = parseRecipe(md, 'test/recipe.md');
    assert.equal(recipe.title, 'Test Recipe');
    assert.equal(recipe.prep_time, '10 minutes');
    assert.equal(recipe.servings, '4');
    assert.equal(recipe.ingredients.length, 3);
    assert.ok(recipe.steps.length >= 3);
    assert.equal(recipe.source_path, 'test/recipe.md');
  });
});
