import { Router } from 'express';
import { v4 as uuid } from 'uuid';

/**
 * Cooking session routes - step-by-step execution mode with timers
 */
export function cookingRouter(db) {
  const router = Router();

  // Start a cooking session
  router.post('/sessions', (req, res) => {
    const { recipe_id } = req.body;
    if (!recipe_id) return res.status(400).json({ error: 'recipe_id required' });

    const recipe = db.prepare('SELECT * FROM recipes WHERE id = ?').get(recipe_id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });

    const id = uuid();
    db.prepare(`
      INSERT INTO cooking_sessions (id, recipe_id, status, current_step, started_at)
      VALUES (?, ?, 'active', 0, datetime('now'))
    `).run(id, recipe_id);

    // Create timers for steps that have durations
    const steps = db.prepare(
      'SELECT * FROM steps WHERE recipe_id = ? ORDER BY sort_order'
    ).all(recipe_id);

    const insertTimer = db.prepare(`
      INSERT INTO step_timers (id, session_id, step_id, duration_seconds, status)
      VALUES (?, ?, ?, ?, 'pending')
    `);

    for (const step of steps) {
      if (step.duration_seconds) {
        insertTimer.run(uuid(), id, step.id, step.duration_seconds);
      }
    }

    res.status(201).json(getSessionDetail(db, id));
  });

  // Get session status
  router.get('/sessions/:id', (req, res) => {
    const session = getSessionDetail(db, req.params.id);
    if (!session) return res.status(404).json({ error: 'Session not found' });
    res.json(session);
  });

  // Advance to next step
  router.post('/sessions/:id/next', (req, res) => {
    const session = db.prepare('SELECT * FROM cooking_sessions WHERE id = ?').get(req.params.id);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    const steps = db.prepare(
      'SELECT * FROM steps WHERE recipe_id = ? ORDER BY sort_order'
    ).all(session.recipe_id);

    const nextStep = session.current_step + 1;

    if (nextStep >= steps.length) {
      // Complete the session
      db.prepare(`
        UPDATE cooking_sessions SET status = 'completed', completed_at = datetime('now'), current_step = ?
        WHERE id = ?
      `).run(nextStep, session.id);
    } else {
      db.prepare('UPDATE cooking_sessions SET current_step = ? WHERE id = ?')
        .run(nextStep, session.id);

      // Auto-start timer for current step if it has one
      const currentStepData = steps[nextStep];
      if (currentStepData) {
        const timer = db.prepare(
          'SELECT * FROM step_timers WHERE session_id = ? AND step_id = ? AND status = ?'
        ).get(session.id, currentStepData.id, 'pending');
        if (timer) {
          db.prepare(`
            UPDATE step_timers SET status = 'running', started_at = datetime('now') WHERE id = ?
          `).run(timer.id);
        }
      }
    }

    res.json(getSessionDetail(db, session.id));
  });

  // Start a timer for a step
  router.post('/sessions/:id/timers/:timerId/start', (req, res) => {
    const timer = db.prepare('SELECT * FROM step_timers WHERE id = ? AND session_id = ?')
      .get(req.params.timerId, req.params.id);
    if (!timer) return res.status(404).json({ error: 'Timer not found' });

    db.prepare(`
      UPDATE step_timers SET status = 'running', started_at = datetime('now') WHERE id = ?
    `).run(timer.id);

    res.json(getSessionDetail(db, req.params.id));
  });

  // Complete a timer
  router.post('/sessions/:id/timers/:timerId/complete', (req, res) => {
    const timer = db.prepare('SELECT * FROM step_timers WHERE id = ? AND session_id = ?')
      .get(req.params.timerId, req.params.id);
    if (!timer) return res.status(404).json({ error: 'Timer not found' });

    db.prepare(`
      UPDATE step_timers SET status = 'completed', completed_at = datetime('now') WHERE id = ?
    `).run(timer.id);

    res.json(getSessionDetail(db, req.params.id));
  });

  // List active sessions
  router.get('/sessions', (req, res) => {
    const sessions = db.prepare(`
      SELECT cs.*, r.title as recipe_title
      FROM cooking_sessions cs
      JOIN recipes r ON cs.recipe_id = r.id
      ORDER BY cs.started_at DESC
    `).all();
    res.json({ sessions });
  });

  return router;
}

function getSessionDetail(db, sessionId) {
  const session = db.prepare(`
    SELECT cs.*, r.title as recipe_title, r.servings, r.difficulty
    FROM cooking_sessions cs
    JOIN recipes r ON cs.recipe_id = r.id
    WHERE cs.id = ?
  `).get(sessionId);

  if (!session) return null;

  const steps = db.prepare(
    'SELECT * FROM steps WHERE recipe_id = ? ORDER BY sort_order'
  ).all(session.recipe_id);

  const timers = db.prepare(
    'SELECT * FROM step_timers WHERE session_id = ?'
  ).all(sessionId);

  const timersByStep = {};
  for (const t of timers) timersByStep[t.step_id] = t;

  const currentStep = steps[session.current_step] || null;
  const nextStep = steps[session.current_step + 1] || null;

  return {
    ...session,
    total_steps: steps.length,
    current_step_detail: currentStep ? {
      ...currentStep,
      timer: timersByStep[currentStep.id] || null,
    } : null,
    next_step_preview: nextStep ? {
      instruction: nextStep.instruction,
      requires_human: nextStep.requires_human,
      robot_action: nextStep.robot_action,
    } : null,
    progress: steps.length > 0 ? Math.round((session.current_step / steps.length) * 100) : 0,
  };
}
