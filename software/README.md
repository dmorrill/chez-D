# chez-D Software

> The brain behind the robot chef — recipe management, cooking execution, and inventory tracking.

## Vision

chez-D's software layer bridges **Elle's recipe collection** (65+ markdown recipes) with the **robot hardware** (Raspberry Pi 5, TILLREDA induction cooktop, Dynamixel stirrer, pumps, sensors). It parses human-readable recipes into robot-executable steps, tracks ingredients, and manages step-by-step cooking sessions with timers.

## Architecture

```
┌─────────────────────────────────────────────────┐
│              REST API (Express)                  │
│           http://localhost:3141                  │
├──────────┬──────────────┬───────────────────────┤
│ Recipes  │   Cooking    │     Inventory         │
│  CRUD    │  Sessions    │     Tracking          │
├──────────┴──────────────┴───────────────────────┤
│            SQLite (better-sqlite3)              │
├─────────────────────────────────────────────────┤
│         Recipe Parser (Markdown → DB)           │
│    Robot Action Detection + Compatibility       │
└─────────────────────────────────────────────────┘
         ↕                          ↕
  Elle's Cooking Repo        Hardware Subsystems
  (65+ recipes)              (future integration)
```

## Quick Start

```bash
cd software
npm install
npm run import          # Import recipes from cooking repo
npm start               # Start API on port 3141
```

## API Endpoints

### Recipes
- `GET /api/recipes` — List all (filter: `?difficulty=Easy&robot_compatible=1&search=tofu`)
- `GET /api/recipes/:id` — Full recipe with ingredients + steps
- `POST /api/recipes` — Create recipe
- `PUT /api/recipes/:id` — Update recipe
- `DELETE /api/recipes/:id` — Delete recipe

### Cooking Sessions
- `POST /api/cooking/sessions` — Start cooking a recipe (`{ recipe_id }`)
- `GET /api/cooking/sessions/:id` — Session status with current step + timer
- `POST /api/cooking/sessions/:id/next` — Advance to next step
- `POST /api/cooking/sessions/:id/timers/:timerId/start` — Start a timer
- `POST /api/cooking/sessions/:id/timers/:timerId/complete` — Mark timer done
- `GET /api/cooking/sessions` — List all sessions

### Inventory
- `GET /api/inventory` — List all (filter: `?category=spice&search=cumin`)
- `POST /api/inventory` — Add/update item
- `GET /api/inventory/check/:recipeId` — Check ingredient availability
- `DELETE /api/inventory/:id` — Remove item

## Recipe Parser

The parser converts markdown recipes (from the cooking repo) into structured data:

- **Metadata extraction**: prep time, cook time, servings, difficulty
- **Ingredient parsing**: handles `- 2 cups flour` and `- [ ] **Flour** (2 cups)` formats
- **Step parsing**: numbered steps and timestamped steps (`**5:00** - Preheat oven`)
- **Duration extraction**: "cook 5-6 minutes" → 330 seconds
- **Temperature detection**: "400°F" → stored as integer
- **Robot action mapping**: "stir", "heat", "simmer" → mapped to hardware subsystems
- **Human task detection**: "chop", "plate", "taste" → flagged as requiring human

## Robot Compatibility

Each recipe gets a `robot_compatible` flag based on how many steps map to robot actions. Currently maps:

| Cooking Verb | Robot Action | Subsystem |
|---|---|---|
| stir, whisk, fold | `stir` | Stirring (Dynamixel) |
| heat, preheat, sauté, simmer, boil | `set_heat` | Heating (TILLREDA) |
| add water, add oil | `dispense` | Dispensing (Pumps) |
| monitor | `monitor` | Sensing (Cameras) |

## Tests

```bash
npm test
```

## Roadmap

- [ ] Real-time WebSocket updates for cooking sessions
- [ ] Hardware bridge (send robot_action to Pi GPIO/Dynamixel)
- [ ] Camera integration for step verification
- [ ] Voice commands via microphone
- [ ] Meal planning with inventory deduction
- [ ] Shopping list generation from missing ingredients
