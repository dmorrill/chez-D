import { Router } from 'express';
import { v4 as uuid } from 'uuid';

export function inventoryRouter(db) {
  const router = Router();

  // List inventory
  router.get('/', (req, res) => {
    const { category, search } = req.query;
    let sql = 'SELECT * FROM inventory WHERE 1=1';
    const params = {};
    if (category) { sql += ' AND category = @category'; params.category = category; }
    if (search) { sql += ' AND name LIKE @search'; params.search = `%${search}%`; }
    sql += ' ORDER BY category, name';
    res.json({ items: db.prepare(sql).all(params) });
  });

  // Add/update inventory item
  router.post('/', (req, res) => {
    const { name, category, quantity, unit, location, expires_at } = req.body;
    if (!name) return res.status(400).json({ error: 'name required' });

    const existing = db.prepare('SELECT * FROM inventory WHERE LOWER(name) = LOWER(?)').get(name);
    if (existing) {
      db.prepare(`
        UPDATE inventory SET quantity = ?, unit = COALESCE(?, unit), category = COALESCE(?, category),
        location = COALESCE(?, location), expires_at = COALESCE(?, expires_at), updated_at = datetime('now')
        WHERE id = ?
      `).run(quantity ?? existing.quantity, unit, category, location, expires_at, existing.id);
      res.json(db.prepare('SELECT * FROM inventory WHERE id = ?').get(existing.id));
    } else {
      const id = uuid();
      db.prepare(`
        INSERT INTO inventory (id, name, category, quantity, unit, location, expires_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).run(id, name, category, quantity || 0, unit, location, expires_at);
      res.status(201).json(db.prepare('SELECT * FROM inventory WHERE id = ?').get(id));
    }
  });

  // Check recipe availability against inventory
  router.get('/check/:recipeId', (req, res) => {
    const ingredients = db.prepare(
      'SELECT * FROM ingredients WHERE recipe_id = ? ORDER BY sort_order'
    ).all(req.params.recipeId);

    const results = ingredients.map(ing => {
      const inv = db.prepare('SELECT * FROM inventory WHERE LOWER(name) LIKE LOWER(?)').get(`%${ing.name}%`);
      return {
        ingredient: ing.name,
        needed: `${ing.quantity || '?'} ${ing.unit || ''}`.trim(),
        in_stock: inv ? `${inv.quantity} ${inv.unit || ''}`.trim() : null,
        available: !!inv && inv.quantity > 0,
      };
    });

    const available = results.filter(r => r.available).length;
    res.json({
      recipe_id: req.params.recipeId,
      total_ingredients: results.length,
      available,
      missing: results.length - available,
      ready: available === results.length,
      details: results,
    });
  });

  // Delete inventory item
  router.delete('/:id', (req, res) => {
    const result = db.prepare('DELETE FROM inventory WHERE id = ?').run(req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: 'Not found' });
    res.json({ deleted: true });
  });

  return router;
}
