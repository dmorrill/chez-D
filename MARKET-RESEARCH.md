# Multi-Cooker Market Exploration

> Hands-on evaluation of premium multi-cooker products to understand the high-end food appliance supply chain.

**Status**: Active Exploration - Product Acquisition Phase

## Exploration Goals

1. **Understand the high-end market** - What differentiates premium multi-cookers from mass-market?
2. **Evaluate user experience** - Purchase process, onboarding, daily use, recipes
3. **Assess technology** - Connected features, automation, precision cooking
4. **Map the supply chain** - Manufacturing, distribution, pricing, margins
5. **Identify opportunities** - Gaps in the market, underserved segments
6. **Evaluate openness** - Is anything programmable/hackable? What would an open platform look like?

## Lab Setup

**Location**: Basement
**Status**: Planning

- [ ] Clear space for testing station
- [ ] Set up power strips / outlets
- [ ] Prepare ingredient storage
- [ ] Camera setup for documentation
- [ ] Testing protocols

---

## Product Portfolio

### Tier 1: Premium Connected ($1,000+)

| Product | Price | Status | Notes |
|---------|-------|--------|-------|
| **Thermomix TM7** | ~$1,800 | BLOCKED | Email verification hell, no guest checkout |
| **Posha** | ~$1,200 | Ordered (Backorder) | Waiting on ship date |
| **Bosch Cookit** | ~$1,500 | To Research | Induction up to 200°C, free recipes (no subscription) |
| **Magimix Cook Expert** | ~$1,400 | To Research | 3.5L bowl (larger than Thermomix), food processor attachment |
| **Kenwood Cooking Chef XL** | ~$1,200 | To Research | 4.5L capacity, 30°-180°C range, 6 simultaneous functions |

### Tier 2: Mid-Premium ($400-1,000)

| Product | Price | Status | Notes |
|---------|-------|--------|-------|
| **CookingPal Multo** | ~$700 | To Research | Smart touchscreen, connected app |
| **Ninja Foodi** (top model) | ~$400-500 | To Research | TenderCrisp tech (pressure + air fry) |
| **Thermocook Pro M 3.0** | ~$600 | To Research | 2023-2025 award winner (Australia) |

### Tier 3: Budget-Friendly ($200-400)

| Product | Price | Status | Notes |
|---------|-------|--------|-------|
| **Instant Pot Pro Plus** | ~$230 | To Research | WiFi connected, company emerged from bankruptcy 2024 |
| **Cecotec Mambo Touch** | ~$300 | To Research | 37 functions, 3.3L bowl, 1600W, integrated scales |
| **Kogan ThermoBlend** | ~$250 | To Research | Voice control (Alexa/Google), 12hr timer |

### Tier 4: Asian Brands (Heritage)

| Product | Price | Status | Notes |
|---------|-------|--------|-------|
| **Tiger** | Varies | To Research | Japanese, rice cooker heritage |
| **Zojirushi** | Varies | To Research | Japanese, rice cooker heritage |

### Smart Ovens (Adjacent Category)

| Product | Price | Status | Notes |
|---------|-------|--------|-------|
| **June Oven** | ~$600-1,000 | To Research | Computer vision, AI cooking |
| **Brava** | ~$1,295 | To Research | Light-based heating |

---

## Purchase Log

### 2025-01-25: Thermomix TM7 Attempt

**Outcome**: BLOCKED - Cannot complete purchase

**Issue**:
- Thermomix requires account creation before checkout (no guest option)
- Stuck in email verification loop
- Possibly didn't receive verification email, or it went to spam
- Need to retry tomorrow

**Action Items**:
- [ ] Check spam folder for verification email
- [ ] Try different email address
- [ ] Consider calling direct sales line
- [ ] Document the friction - this is data!

**Notes**: The painful purchase experience is itself interesting. Thermomix uses a direct sales/consultant model (similar to MLM structure). The friction might be intentional to drive people to in-person demos.

---

### 2025-01-XX: Posha Order

**Outcome**: Order placed, on backorder

**Status**: Waiting for ship notification

**Action Items**:
- [ ] Monitor email for ship date
- [ ] Research Posha community/reviews while waiting

---

## Open/Programmable Research

### The Big Question
**Is there an openly programmable multi-cooker, or does one need to be built?**

### Existing Open Source Projects

| Project | Status | Description |
|---------|--------|-------------|
| [EveryCook](https://www.open-electronics.org/everycook-is-opensourcing-cooking/) | Unknown | Ambitious open source cooking project |
| [Ostro Pot](https://sudonull.com/post/89588-Ostro-Pot-open-source-multicooker-based-on-Ostro-OS-Intel-Blog) | Prototype | Intel Edison based, cloud recipes, web management |
| [OnionBot](https://github.com/onionbot) | Active | Raspberry Pi + computer vision for pan monitoring |
| [Barilla Passive Cooker](https://www.hackster.io/news/barilla-s-passive-cooker-is-an-open-source-arduino-nano-33-ble-gadget-designed-to-save-energy-190c81f446f4) | Released | Arduino Nano 33 BLE, 3D printable, energy-saving pasta cooking |

### Thermomix Hacking Ecosystem

The Thermomix has been reverse-engineered to some degree:

- **[cookidoo-api](https://github.com/miaucl/cookidoo-api)** - Python library to communicate with Cookidoo platform
- **[cookidump](https://github.com/auino/cookidump)** - Dump Cookidoo recipes for offline reading
- **[MCP server for Thermomix + Gemini](https://github.com/alexandrepa/mcp-cookidoo/)** - Someone connected Thermomix to Gemini!
- **[Synacktiv TM5 research](https://www.synacktiv.com/en/publications/let-me-cook-you-a-vulnerability-exploiting-the-thermomix-tm5)** - Security research revealing hardware internals

**Key insight**: TM5 uses i.MX28 SoC (ARM926EJ-S core), NAND flash can be dumped. TM6/TM7 are different architecture.

### DIY Cooking Automation Projects

Recent maker projects show what's possible:

**[Fungineering Robot Chef](https://www.hackster.io/news/this-robotic-sous-chef-is-powered-by-a-raspberry-pi-41c186738f77)** (2024):
- Raspberry Pi as controller
- IKEA induction cooktop for heating
- Custom 3D-printed robotic arm with Tinymovr Axion R1 actuators
- PCA9685 16-channel servo module
- Peristaltic pumps for liquids via 6-way relay
- Successfully made lentil dahl

**[OnionBot](https://www.raspberrypi.com/news/hire-raspberry-pi-as-a-robot-sous-chef-in-your-kitchen/)**:
- Raspberry Pi 4 Model B
- Standard camera + thermal camera
- Hot plate temperature control
- Computer vision for pan monitoring
- Notifications system

---

## DIY Open Multi-Cooker Concept

See: [OPEN-COOKER.md](./OPEN-COOKER.md) | [SHOPPING-LIST.md](./SHOPPING-LIST.md) | [EXPERIMENTS.md](./EXPERIMENTS.md) | [ASSEMBLY-MANUAL.md](./ASSEMBLY-MANUAL.md) | [BUILD-LOG.md](./BUILD-LOG.md)

**Minimum viable components** (~$650):
- Raspberry Pi 5 (controller)
- IKEA TILLREDA induction cooktop (hackable heating)
- Servo-based stirring mechanism
- Peristaltic pumps (liquid dispensing)
- Camera + thermal camera (monitoring)
- Temperature probes + load cells (sensing)

**Full system with robot arm**: ~$1,600+

**Software stack**:
- Python control layer
- Computer vision (OpenCV / ML models)
- Recipe DSL (domain-specific language for cooking)
- Web UI for monitoring
- API for programmability
- Claude/LLM integration for recipe generation

### Experiments to Try

1. **Cookidoo MCP Server** - Connect Claude to Thermomix recipes
2. **Cookidoo API** - Direct Python access to recipe platform
3. **IKEA TILLREDA Hack** - Programmable induction control
4. **OnionBot Vision** - Computer vision cooking monitoring
5. **Full Robot Chef** - Complete automated system
6. **Home Assistant Integration** - Whole-home automation

---

## Research Backlog

### Market Questions
- [ ] Total addressable market for premium multi-cookers?
- [ ] Target customers? (home chefs, busy professionals, foodies?)
- [ ] Replacement cycle? How often do people upgrade?
- [ ] Recipe ecosystem: Proprietary vs open?
- [ ] Connected features - gimmick or genuinely useful?
- [ ] Why does Thermomix require subscription but Bosch doesn't?

### Supply Chain Questions
- [ ] Manufacturing locations (Thermomix = Germany, others?)
- [ ] Estimated margins at each price tier?
- [ ] Distribution: Direct vs retail vs hybrid?
- [ ] Service/repair ecosystem?

### Competitive Dynamics
- [ ] Why hasn't a major tech company entered this space aggressively?
- [ ] What's stopping Instant Pot from moving up-market?
- [ ] Is Thermomix's MLM-style distribution a moat or liability?
- [ ] Why did Instant Brands go bankrupt? What does that signal?

### Open Platform Questions
- [ ] What would make developers care about cooking automation?
- [ ] Is there a Home Assistant integration opportunity?
- [ ] Could an open standard emerge for recipe interchange?
- [ ] Food safety/liability issues with DIY cooking automation?

---

## Testing Protocol (Draft)

For each product, evaluate:

### Acquisition Experience
- Purchase friction (1-10)
- Time from order to delivery
- Unboxing/setup experience
- Onboarding quality

### Daily Use
- Recipe discovery
- Ease of operation
- Cleaning effort
- Noise level
- Counter footprint

### Technical
- Cooking precision
- Temperature accuracy
- Connected features usefulness
- Software/app quality
- Firmware updates
- **Hackability/openness** (API, local control, etc.)

### Long-term
- Durability signals
- Community/ecosystem
- Recipe variety
- Customer support quality

---

## Sources

- [Thermomix TM7 vs competitors comparison](https://www.lifewiththermomix.co.uk/post/thermomix-tm7-versus-competitors-comparison)
- [Top Thermomix Alternatives (Canstar Blue)](https://www.canstarblue.com.au/appliances/thermomix-alternatives/)
- [Best Instant Pot 2025 (TechRadar)](https://www.techradar.com/news/best-instant-pot-pressure-cookers-slow-cookers)
- [Top 5 All-in-One Kitchen Appliances 2024 (TOKIT)](https://www.tokit.com/blogs/news/top-5-all-in-one-kitchen-appliances)
- [DIY Electronic Projects for Kitchen (MakeUseOf)](https://www.makeuseof.com/ai-automation-and-robots-diy-electronic-projects-for-the-kitchen/)
- [Raspberry Pi Sous Chef (Hackster.io)](https://www.hackster.io/news/this-robotic-sous-chef-is-powered-by-a-raspberry-pi-41c186738f77)

---

*Last Updated: January 25, 2025*
