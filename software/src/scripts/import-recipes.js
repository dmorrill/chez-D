#!/usr/bin/env node
/**
 * Import recipes from Elle's cooking repo into chez-D database.
 * Usage: node src/scripts/import-recipes.js [path-to-cooking-repo]
 */

import { readdir, readFile } from 'fs/promises';
import { join, relative } from 'path';
import { getDb, initDb } from '../db.js';
import { parseRecipe } from '../parser.js';

const COOKING_REPO = process.argv[2] || '/Users/daniellemorrill/Documents/GitHub/personal/cooking';
const RECIPES_DIR = join(COOKING_REPO, 'recipes');

async function findMarkdownFiles(dir) {
  const files = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...await findMarkdownFiles(fullPath));
      } else if (entry.name.endsWith('.md') && !entry.name.startsWith('README')) {
        files.push(fullPath);
      }
    }
  } catch (e) { /* skip */ }
  return files;
}

async function importRecipes() {
  console.log(`📖 Scanning recipes in: ${RECIPES_DIR}`);
  const db = getDb();
  initDb(db);

  const files = await findMarkdownFiles(RECIPES_DIR);
  console.log(`Found ${files.length} recipe files\n`);

  // Read all files first (async)
  const fileContents = [];
  for (const file of files) {
    const markdown = await readFile(file, 'utf-8');
    fileContents.push({ file, markdown, sourcePath: relative(COOKING_REPO, file) });
  }

  const insertRecipe = db.prepare(`
    INSERT OR REPLACE INTO recipes (id, title, source_path, prep_time, cook_time, total_time, servings, difficulty, type, description, notes, robot_compatible)
    VALUES (@id, @title, @source_path, @prep_time, @cook_time, @total_time, @servings, @difficulty, @type, @description, @notes, @robot_compatible)
  `);
  const insertIngredient = db.prepare(`
    INSERT INTO ingredients (id, recipe_id, section, name, quantity, unit, notes, sort_order)
    VALUES (@id, @recipe_id, @section, @name, @quantity, @unit, @notes, @sort_order)
  `);
  const insertStep = db.prepare(`
    INSERT INTO steps (id, recipe_id, section, step_number, instruction, duration_seconds, temperature_f, robot_action, robot_params, requires_human, sort_order)
    VALUES (@id, @recipe_id, @section, @step_number, @instruction, @duration_seconds, @temperature_f, @robot_action, @robot_params, @requires_human, @sort_order)
  `);

  db.exec('DELETE FROM step_timers; DELETE FROM cooking_sessions; DELETE FROM steps; DELETE FROM ingredients; DELETE FROM recipes;');

  let imported = 0, robotCompatible = 0, totalIngredients = 0, totalSteps = 0;

  const importAll = db.transaction((entries) => {
    for (const { file, markdown, sourcePath } of entries) {
      try {
        const recipe = parseRecipe(markdown, sourcePath);
        if (!recipe.title) { console.log(`  ⚠️  Skipping ${sourcePath} (no title)`); continue; }

        insertRecipe.run({ ...recipe, robot_compatible: recipe.robot_compatible ? 1 : 0, notes: recipe.notes || null, description: recipe.description || null });
        for (const ing of recipe.ingredients) insertIngredient.run({ ...ing, recipe_id: recipe.id });
        for (const step of recipe.steps) insertStep.run({ ...step, recipe_id: recipe.id, robot_params: step.robot_params || null, robot_action: step.robot_action || null });

        const icon = recipe.robot_compatible ? '🤖' : '📝';
        console.log(`  ${icon} ${recipe.title} (${recipe.ingredients.length} ingredients, ${recipe.steps.length} steps)`);
        imported++;
        if (recipe.robot_compatible) robotCompatible++;
        totalIngredients += recipe.ingredients.length;
        totalSteps += recipe.steps.length;
      } catch (e) { console.log(`  ❌ Error: ${file}: ${e.message}`); }
    }
  });

  importAll(fileContents);
  db.close();

  console.log(`\n✅ Import complete!`);
  console.log(`   Recipes: ${imported} (${robotCompatible} robot-compatible)`);
  console.log(`   Ingredients: ${totalIngredients}`);
  console.log(`   Steps: ${totalSteps}`);
}

importRecipes().catch(console.error);
