# Open Cooker: An Open-Source Programmable Cooking Platform

> What if cooking appliances were as hackable as computers?

**Status**: Concept / Research Phase

## The Problem

Every premium multi-cooker is a walled garden:
- **Proprietary recipes** - Locked to subscription services (Cookidoo, etc.)
- **No API** - Can't integrate with home automation, can't script
- **Closed firmware** - Can't modify behavior, fix bugs, or add features
- **Vendor lock-in** - Recipes don't transfer between devices

## The Vision

An open, programmable cooking platform that developers and makers can:
- **Code against** - Real APIs, webhooks, CLI tools
- **Modify** - Open source firmware, hackable hardware
- **Extend** - Plugin architecture for new capabilities
- **Share** - Open recipe format, community contributions

## Who Would Use This?

1. **Developer home cooks** - Want to automate their cooking, integrate with Home Assistant
2. **Food tech researchers** - Need precise, repeatable cooking for experiments
3. **Culinary schools** - Teaching food science with programmable equipment
4. **Makers/hackers** - Love building and customizing
5. **Restaurant R&D** - Prototyping new dishes with precision

---

## Minimum Viable Hardware

### Approach A: Modular Kit (Recommended for v1)

Leverage existing commercial components, add open control layer.

| Component | Options | Est. Cost | Notes |
|-----------|---------|-----------|-------|
| **Controller** | Raspberry Pi 5 | $80 | Main brain, runs software stack |
| **Heating** | IKEA induction cooktop | $70 | Hackable, reliable |
| **Stirring** | Servo motor + paddle | $50 | Simple, 3D printable |
| **Visual** | Raspberry Pi Camera Module 3 | $35 | 12MP, autofocus |
| **Thermal** | MLX90640 thermal camera | $80 | 32x24 IR array |
| **Temperature** | Thermocouple + MAX31855 | $20 | Direct probe measurement |
| **Weighing** | Load cell + HX711 | $15 | Integrated scale |
| **Liquids** | Peristaltic pumps (x4) | $60 | Water, oil, stock, sauce |
| **Enclosure** | 3D printed housing | $30 | Filament cost |
| **Power/Relay** | 6-channel relay module | $15 | Control high-power devices |
| **Misc** | Wiring, connectors, etc. | $50 | Estimate |

**Total: ~$505** for basic system

### Approach B: Full Integration (Future)

Custom PCB, integrated vessel, industrial design.
- Higher cost ($1,000+)
- More polished experience
- Requires significant engineering investment

### Approach C: Retrofit Existing Device

Add open controller to existing multi-cooker.
- Intercept/replace control signals
- Keep existing heating/vessel/motor
- Potentially dangerous, warranty-voiding
- Good for learning, not for product

---

## Software Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    User Interfaces                       │
├──────────────┬──────────────┬───────────────────────────┤
│   Web UI     │   CLI Tool   │   Mobile App (future)     │
└──────┬───────┴──────┬───────┴───────────────┬───────────┘
       │              │                       │
       ▼              ▼                       ▼
┌─────────────────────────────────────────────────────────┐
│                     REST/GraphQL API                     │
│              (webhooks, SSE for real-time)              │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   Recipe Engine                          │
│  - Recipe DSL parser                                     │
│  - Step sequencer                                        │
│  - Timing/temperature controller                         │
│  - Safety interlocks                                     │
└──────────────────────────┬──────────────────────────────┘
                           │
       ┌───────────────────┼───────────────────┐
       ▼                   ▼                   ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Vision    │     │   Control   │     │   Sensors   │
│   Module    │     │   Module    │     │   Module    │
├─────────────┤     ├─────────────┤     ├─────────────┤
│ - OpenCV    │     │ - Heating   │     │ - Temp      │
│ - ML models │     │ - Stirring  │     │ - Weight    │
│ - Food ID   │     │ - Pumps     │     │ - Thermal   │
│ - Doneness  │     │ - GPIO      │     │ - Timing    │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                      Hardware                            │
│    (Induction, motors, pumps, cameras, sensors)         │
└─────────────────────────────────────────────────────────┘
```

### Core Components

#### 1. Recipe DSL (Domain-Specific Language)

```yaml
# Example: Simple pasta sauce
recipe:
  name: "Basic Marinara"
  version: "1.0"
  yields: "4 servings"

ingredients:
  - olive_oil: 2 tbsp
  - garlic: 4 cloves, minced
  - tomatoes: 28 oz, crushed
  - basil: 1/4 cup, fresh
  - salt: 1 tsp

steps:
  - action: heat
    target_temp: 180C
    until: stable

  - action: add
    ingredient: olive_oil
    method: pump  # or manual

  - action: add
    ingredient: garlic
    method: manual

  - action: cook
    temp: 160C
    time: 2m
    stir: continuous
    until:
      - vision: "garlic_golden"
      - aroma: optional  # future sensor

  - action: add
    ingredient: tomatoes
    method: manual

  - action: simmer
    temp: 95C
    time: 20m
    stir: interval_30s

  - action: finish
    add: [basil, salt]
    stir: gentle
```

#### 2. Vision Module

Computer vision for cooking automation:
- **Food identification** - What's in the pot?
- **Doneness detection** - Is it browned? Caramelized? Burnt?
- **Liquid level** - Boiling over? Reduced enough?
- **Color analysis** - Sauce color, meat temperature indicators

Could use:
- Pre-trained models (YOLO, ResNet fine-tuned on food)
- Custom models for cooking-specific tasks
- Thermal + visual fusion for better temp estimation

#### 3. Safety System

Critical for any cooking automation:
- **Temperature limits** - Hard-coded maximums
- **Timeout protection** - Can't heat indefinitely
- **Overflow detection** - Stop before boilover
- **Smoke detection** - Integration with home sensors
- **Manual override** - Physical stop button
- **Watchdog** - System resets if software hangs

#### 4. API Design

```python
# Example Python client usage
from opencooker import OpenCooker

cooker = OpenCooker("192.168.1.100")

# Direct control
cooker.set_temperature(180)
cooker.stir(speed=5)
cooker.pump("water", amount_ml=100)

# Recipe execution
recipe = cooker.load_recipe("marinara.yaml")
job = cooker.cook(recipe)

# Real-time monitoring
for event in job.events():
    print(f"{event.timestamp}: {event.type} - {event.data}")

# Webhooks for home automation
cooker.on("done", webhook="http://homeassistant/api/...")
```

---

## Integration Possibilities

### Home Assistant
- Custom component for control
- Sensors for temperature, status
- Automations (start cooking when I get home)

### Voice Assistants
- "Hey Google, start the pasta sauce"
- "Alexa, what's the status of dinner?"

### LLM Integration
- Natural language recipe creation
- "Make something with what's in my fridge"
- Cooking advice and troubleshooting

### Grocery Services
- Auto-order missing ingredients
- Meal planning integration

---

## Open Questions

### Technical
- [ ] Best approach for stirring mechanism? (paddle vs magnetic)
- [ ] How to handle recipes requiring manual intervention?
- [ ] Safety certification path (if ever productizing)?
- [ ] How much precision is actually needed for good cooking?

### Community/Business
- [ ] Is there enough demand to sustain development?
- [ ] Open source only, or open-core model?
- [ ] Hardware kit sales vs. software-only?
- [ ] Liability for cooking accidents?

### Recipe Format
- [ ] Adopt existing standard or create new?
- [ ] Schema.org Recipe markup as base?
- [ ] How to handle variations (dietary, scaling)?

---

## Prior Art & Inspiration

- **[Ostro Pot](https://sudonull.com/post/89588-Ostro-Pot-open-source-multicooker-based-on-Ostro-OS-Intel-Blog)** - Intel Edison-based prototype
- **[EveryCook](https://www.open-electronics.org/everycook-is-opensourcing-cooking/)** - Open source cooking project
- **[OnionBot](https://github.com/onionbot)** - Raspberry Pi cooking automation
- **[Open Sauce](https://github.com/opensauced)** - Open source cooking community (different focus)
- **[Home Assistant](https://www.home-assistant.io/)** - Model for open home automation
- **[Klipper](https://www.klipper3d.org/)** - Model for open firmware (3D printing)

---

## Next Steps

1. **Phase 0: Research** (Current)
   - Evaluate commercial products
   - Study existing open source projects
   - Identify minimum viable feature set

2. **Phase 1: Proof of Concept**
   - Raspberry Pi + induction cooktop control
   - Basic temperature control loop
   - Simple web interface
   - One working recipe end-to-end

3. **Phase 2: Vision Integration**
   - Add camera monitoring
   - Train basic food state classifier
   - Closed-loop cooking (react to visual cues)

4. **Phase 3: Full Platform**
   - Recipe DSL and engine
   - API and integrations
   - Community recipe sharing
   - Hardware kit design

---

*This is a concept document. No code has been written yet.*
*Last Updated: January 25, 2025*
