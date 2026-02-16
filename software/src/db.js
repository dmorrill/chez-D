import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function getDb(dbPath) {
  const path = dbPath || join(__dirname, '..', 'data', 'chez-d.db');
  const db = new Database(path);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');
  return db;
}

export function initDb(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS recipes (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      source_path TEXT,
      prep_time TEXT,
      cook_time TEXT,
      total_time TEXT,
      servings TEXT,
      difficulty TEXT,
      type TEXT,
      description TEXT,
      notes TEXT,
      robot_compatible INTEGER DEFAULT 0,
      imported_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS ingredients (
      id TEXT PRIMARY KEY,
      recipe_id TEXT NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
      section TEXT DEFAULT 'main',
      name TEXT NOT NULL,
      quantity TEXT,
      unit TEXT,
      notes TEXT,
      sort_order INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS steps (
      id TEXT PRIMARY KEY,
      recipe_id TEXT NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
      section TEXT DEFAULT 'main',
      step_number INTEGER NOT NULL,
      instruction TEXT NOT NULL,
      duration_seconds INTEGER,
      temperature_f INTEGER,
      robot_action TEXT,
      robot_params TEXT,
      requires_human INTEGER DEFAULT 0,
      sort_order INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS inventory (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      category TEXT,
      quantity REAL DEFAULT 0,
      unit TEXT,
      location TEXT,
      expires_at TEXT,
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS cooking_sessions (
      id TEXT PRIMARY KEY,
      recipe_id TEXT NOT NULL REFERENCES recipes(id),
      status TEXT DEFAULT 'pending',
      current_step INTEGER DEFAULT 0,
      started_at TEXT,
      completed_at TEXT,
      notes TEXT
    );

    CREATE TABLE IF NOT EXISTS step_timers (
      id TEXT PRIMARY KEY,
      session_id TEXT NOT NULL REFERENCES cooking_sessions(id) ON DELETE CASCADE,
      step_id TEXT NOT NULL REFERENCES steps(id),
      started_at TEXT,
      duration_seconds INTEGER,
      completed_at TEXT,
      status TEXT DEFAULT 'pending'
    );
  `);
}
