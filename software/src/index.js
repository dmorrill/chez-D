import express from 'express';
import { mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { getDb, initDb } from './db.js';
import { recipesRouter } from './routes/recipes.js';
import { cookingRouter } from './routes/cooking.js';
import { inventoryRouter } from './routes/inventory.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3141;

// Ensure data directory exists
mkdirSync(join(__dirname, '..', 'data'), { recursive: true });

const db = getDb();
initDb(db);

const app = express();
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  const recipeCount = db.prepare('SELECT COUNT(*) as count FROM recipes').get();
  res.json({
    name: 'chez-D API',
    version: '0.1.0',
    status: 'running',
    recipes: recipeCount.count,
    endpoints: {
      recipes: '/api/recipes',
      cooking: '/api/cooking/sessions',
      inventory: '/api/inventory',
    },
  });
});

app.use('/api/recipes', recipesRouter(db));
app.use('/api/cooking', cookingRouter(db));
app.use('/api/inventory', inventoryRouter(db));

app.listen(PORT, () => {
  console.log(`🤖 chez-D API running on http://localhost:${PORT}`);
  console.log(`   Pi day port: ${PORT} (3.141...)`);
});

// Graceful shutdown
process.on('SIGINT', () => { db.close(); process.exit(0); });
process.on('SIGTERM', () => { db.close(); process.exit(0); });
