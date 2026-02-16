import { Router } from 'express';
import { v4 as uuid } from 'uuid';

export function recipesRouter(db) {
  const router = Router();

  // List all recipes
  router.get('/', (req, res) => {
    const { difficulty, robot_compatible, search } = req.query;
    let sql = 'SELECT * FROM recipes WHERE 1=1';
    const params = {};

    if (difficulty) {
      sql += ' AND LOWER(difficulty) = LOWER(@difficulty)';
      params.difficulty = difficulty;
    }
    if (robot_compatible !== undefined) {
      sql += ' AND robot_compatible = @robot_compatible';
      params.robot_compatible = parseInt(robot_compatible);
    }
    if (search) {
      sql += ' AND (title LIKE @search OR description LIKE @search)';
      params.search = `%${search}%`;
    }

    sql += ' ORDER BY title';
    const recipes = db.prepare(sql).all(params);
    res.json({ count: recipes.length, recipes });
  });

  // Get single recipe with ingredients and steps
  router.get('/:id', (req, res) => {
    const recipe = db.prepare('SELECT * FROM recipes WHERE id = ?').get(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });

    recipe.ingredients = db.prepare(
      'SELECT * FROM ingredients WHERE recipe_id = ? ORDER BY sort_order'
    ).all(req.params.id);

    recipe.steps = db.prepare(
      'SELECT * FROM steps WHERE recipe_id = ? ORDER BY sort_order'
    ).all(req.params.id);

    res.json(recipe);
  });

  // Create recipe
  router.post('/', (req, res) => {
    const id = uuid();
    const { title, prep_time, cook_time, total_time, servings, difficulty, type, description } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    db.prepare(`
      INSERT INTO recipes (id, title, prep_time, cook_time, total_time, servings, difficulty, type, description)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, title, prep_time, cook_time, total_time, servings, difficulty, type, description);

    const recipe = db.prepare('SELECT * FROM recipes WHERE id = ?').get(id);
    res.status(201).json(recipe);
  });

  // Update recipe
  router.put('/:id', (req, res) => {
    const existing = db.prepare('SELECT * FROM recipes WHERE id = ?').get(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Recipe not found' });

    const fields = ['title', 'prep_time', 'cook_time', 'total_time', 'servings', 'difficulty', 'type', 'description', 'notes'];
    const updates = [];
    const params = {};

    for (const f of fields) {
      if (req.body[f] !== undefined) {
        updates.push(`${f} = @${f}`);
        params[f] = req.body[f];
      }
    }
    if (updates.length === 0) return res.status(400).json({ error: 'No fields to update' });

    updates.push("updated_at = datetime('now')");
    params.id = req.params.id;
    db.prepare(`UPDATE recipes SET ${updates.join(', ')} WHERE id = @id`).run(params);

    const recipe = db.prepare('SELECT * FROM recipes WHERE id = ?').get(req.params.id);
    res.json(recipe);
  });

  // Delete recipe
  router.delete('/:id', (req, res) => {
    const result = db.prepare('DELETE FROM recipes WHERE id = ?').run(req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: 'Recipe not found' });
    res.json({ deleted: true });
  });

  return router;
}
