# Future Ideas for chez-D

> Features to explore after v1.0 (caramelized onions) works.

---

## Recipe Scaling (Thermomix-style)

**Why people love it:**
- Enter serving count, recipe scales automatically
- Imperial ↔ metric conversion built-in
- Weighs ingredients directly in bowl
- "Add 200g flour" → scale shows live weight

**How chez-D could do it:**
- Load cells already in the build (weighing pan)
- Display target weight on screen/app
- Beep when target reached
- Recipe format includes weights in grams

**Technical needs:**
- Recipe file format with scalable quantities
- UI to select serving count
- Real-time weight display
- Tare function between ingredients

---

## Chopping / Food Prep

**Why people love it:**
- Thermomix blade chops vegetables in seconds
- No knife skills needed
- Consistent results

**Challenges for chez-D:**
- Very different mechanism than stirring
- Needs enclosed container (safety)
- High-speed motor with sharp blade = dangerous
- Cleaning is harder

**Possible approaches:**

### Option A: Separate Food Processor
- Don't reinvent the wheel
- Use existing food processor for prep
- chez-D focuses on cooking, not prep

### Option B: Attachment System
- Swappable tool heads on Dynamixel
- Chopping blade for prep (in separate bowl)
- Spatula for cooking
- Requires enclosure for safety during chopping

### Option C: Partner with Existing Product
- Some food processors have smart features
- Could potentially integrate via API/bluetooth

**Recommendation:** Start with Option A. Chopping is a solved problem - focus chez-D on the cooking automation that doesn't exist yet.

---

## Other Thermomix-Inspired Features

### Guided Cooking Mode
- Step-by-step instructions on screen
- "Add onions now" with timer
- Voice prompts
- Video tutorials

### Temperature Precision
- Thermomix heats to exact temps (sous-vide style)
- chez-D already has thermocouples
- Could maintain ±1°C for delicate sauces

### Speed Control
- Thermomix has 10+ speed settings
- Current Dynamixel stirring is basic
- Could add: gentle fold, vigorous whip, slow stir

### Built-in Recipes
- Thermomix Cookidoo has 70,000+ recipes
- chez-D could have recipe format
- Community-contributed recipes
- Share on GitHub

### Steaming
- Thermomix has Varoma steamer attachment
- Could add steam tray above pan
- Needs steam capture/ventilation

---

## Beyond Onions: Recipe Roadmap

### Tier 1: One-Pan, Stirring-Heavy
- [x] Caramelized onions (v1.0 target)
- [ ] Risotto (similar technique)
- [ ] Polenta
- [ ] Scrambled eggs
- [ ] Roux (for gravy/gumbo)

### Tier 2: Multi-Step, Same Pan
- [ ] Stir-fry (high heat, fast stirring)
- [ ] Curry base (onions → spices → simmer)
- [ ] Pasta sauce (sauté → simmer)

### Tier 3: Requires Additional Sensors
- [ ] Sous-vide (water bath, precise temp)
- [ ] Candy making (sugar stages)
- [ ] Tempering chocolate

### Tier 4: Requires Hardware Changes
- [ ] Deep frying (oil management, safety)
- [ ] Pressure cooking (sealed vessel)
- [ ] Baking (different heat source)

---

## Hardware Upgrade Path

### More DOF for Arm
- Current: 1 DOF (rotation only)
- Add tilt: can scrape edges better
- Add extension: can reach different pot sizes
- Add second arm: flip, toss, hold lid

### Better Sensing
- Microphone: sizzle detection, boiling sounds
- Smell sensor: detect burning before it's visible
- Color camera upgrade: 4K for detail

### Enclosure
- Safety enclosure for high-speed operations
- Steam/splatter management
- Easier cleaning

---

*Ideas captured: January 25, 2026*
*To be explored after v1.0 success*
