# Multi-Cooker Experiments & Hackability

> Tracking experiments with programmable cooking: APIs, hacks, and DIY builds.

---

## Experiment 1: Cookidoo MCP Server

**Goal**: Connect Claude to Thermomix via MCP, create and upload custom recipes conversationally.

**Status**: To Try

### What It Does
- Authenticate with Cookidoo (Thermomix recipe platform)
- Retrieve full recipe details by ID
- Generate properly formatted custom recipes
- Upload custom recipes to your Cookidoo account

### Setup
```bash
git clone https://github.com/alexandrepa/mcp-cookidoo
cd mcp-cookidoo
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env  # Add Cookidoo credentials
fastmcp run server.py
```

### Requirements
- Cookidoo account (comes with Thermomix, or can create separately?)
- Python 3.x
- MCP-compatible client (Claude Code, etc.)

### Questions to Answer
- [ ] Does this work with Claude Code's MCP support?
- [ ] Can you upload recipes without owning a Thermomix?
- [ ] What's the recipe format/schema?
- [ ] Can you read back cooking data/history?

### Resources
- [mcp-cookidoo GitHub](https://github.com/alexandrepa/mcp-cookidoo)
- [cookidoo-api Python library](https://github.com/miaucl/cookidoo-api)
- [cookidump recipe exporter](https://github.com/auino/cookidump)

---

## Experiment 2: Cookidoo API Direct

**Goal**: Understand the raw Cookidoo API capabilities without MCP.

**Status**: To Try

### Capabilities (from cookidoo-api)
- Recipe access and retrieval
- Calendar management (meal planning)
- Shopping list generation
- Custom recipe creation

### Setup
```bash
pip install cookidoo-api  # or clone from GitHub
```

```python
# Basic usage pattern
import asyncio
from cookidoo_api import CookidooAPI

async def main():
    api = CookidooAPI(email="your@email.com", password="password")
    await api.login()
    # ... interact with recipes

asyncio.run(main())
```

### Questions to Answer
- [ ] Full list of API endpoints?
- [ ] Can you control the device directly, or just recipes?
- [ ] Rate limits?
- [ ] What data can you export?

### Resources
- [cookidoo-api GitHub](https://github.com/miaucl/cookidoo-api)

---

## Experiment 3: IKEA TILLREDA Induction Hack

**Goal**: Programmatically control an IKEA induction cooktop for precise temperature automation.

**Status**: To Research / Potentially Build

### The Hack
Intercept serial communication between TILLREDA control panel and power board. Custom PCB provides:
- PWM-based power control (0-20 levels, finer than stock 0-9)
- External control via 3.5mm jack input
- ATmega328PB microcontroller (Arduino-compatible)

### Technical Details
- Communication: 9600 baud, 8N1, LSB-first
- Power levels: 5-bit encoding (0-31, practical range 0-20)
- Messages: 10-byte packets every 100ms
- Isolation: Opto-coupler for safety

### Parts Needed
- IKEA TILLREDA cooktop (~$70)
- ATmega328PB or Arduino
- Opto-coupler
- Custom PCB (designs available)
- 3.5mm jack

### Integration with Raspberry Pi
Connect Pi GPIO/PWM output → 3.5mm jack → Hacked cooktop

### Safety Warning
**HIGH VOLTAGE / FIRE RISK** - Only attempt if comfortable with mains voltage electronics.

### Resources
- [Hackaday.io project](https://hackaday.io/project/203350-diy-pwm-controlled-ikea-tillreda-induction-cooktop)
- [EEVblog forum thread](https://www.eevblog.com/forum/projects/hacking-the-ikea-2kw-induction-stove/)
- [Kaizer Power Electronics writeup](https://kaizerpowerelectronics.dk/general-electronics/hacking-ikea-2kw-induction-hob/)

---

## Experiment 4: OnionBot-Style Vision Cooking

**Goal**: Use Raspberry Pi + cameras to monitor cooking state and make decisions.

**Status**: To Research

### OnionBot Components
- Raspberry Pi 4 Model B
- Standard camera (visual)
- MLX90640 thermal camera (temperature)
- Hot plate control
- Google Coral USB Accelerator (optional, for ML)

### What It Can Do
- Monitor pan visually
- Detect cooking stages (onions browning, etc.)
- Control hot plate temperature
- Send notifications

### Limitations
- Requires training ML models on cooking images
- Currently limited to one meal type per trained model
- Labor-intensive training process

### Questions to Answer
- [ ] Can we use pre-trained food models instead of custom training?
- [ ] What's the minimum viable vision system?
- [ ] Integration with other cooking automation?

### Resources
- [OnionBot GitHub](https://github.com/onionbot)
- [Raspberry Pi blog post](https://www.raspberrypi.com/news/hire-raspberry-pi-as-a-robot-sous-chef-in-your-kitchen/)

---

## Experiment 5: Full DIY Robot Chef (Fungineering-style)

**Goal**: Build a complete automated cooking system with arm, pumps, and vision.

**Status**: Planning / Shopping

### See: [SHOPPING-LIST.md](./SHOPPING-LIST.md)

### Key Subsystems
1. **Heating**: Hacked IKEA TILLREDA induction
2. **Stirring**: Robot arm with Tinymovr actuators
3. **Dispensing**: Peristaltic pumps for liquids, servo containers for solids
4. **Sensing**: Camera + thermal camera + temperature probes
5. **Control**: Raspberry Pi 5

### Resources
- [Fungineering YouTube](https://www.youtube.com/@Fungineering)
- [Hackster.io article](https://www.hackster.io/news/this-cooking-robot-can-prepare-an-entire-meal-44b42cb20dfd)

---

## Experiment 6: Home Assistant Integration

**Goal**: Integrate cooking automation with Home Assistant for whole-home automation.

**Status**: Future

### Potential Integrations
- Start cooking when arriving home (geofence)
- Sync with meal planning calendar
- Grocery list automation
- Voice control via Alexa/Google
- Safety alerts to phone

### Questions to Answer
- [ ] Existing Home Assistant cooking integrations?
- [ ] ESPHome for custom sensors?
- [ ] MQTT for device communication?

---

## Experiment Priority Order

1. **Cookidoo MCP** - Lowest effort, highest learning (if we get Thermomix)
2. **Cookidoo API** - Can try now without hardware
3. **OnionBot vision** - Useful standalone, lower risk
4. **IKEA TILLREDA hack** - Core building block for DIY
5. **Full robot chef** - Ambitious, do after learning from above
6. **Home Assistant** - Integration layer, do last

---

*Last Updated: January 25, 2025*
