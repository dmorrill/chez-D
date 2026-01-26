# chez-D

> An open-source robot chef that cooks caramelized onions (and eventually more).

**Status:** Parts Arriving (Jan 27-30) | **First Cook Test:** Feb 7, 2026

---

## What is this?

A DIY automated cooking system built from:
- **Raspberry Pi 5** - Brain
- **IKEA TILLREDA** - Hacked induction cooktop with PWM control
- **Dynamixel XM430** - Torque-controlled stirring
- **Cameras + Sensors** - Vision, temperature, weight monitoring
- **Peristaltic Pumps** - Liquid dispensing

**First goal:** Caramelize onions without burning them. The robot handles heat, stirring, and adding water. You watch and eat.

---

## Project Status

| Milestone | Status | Target |
|-----------|--------|--------|
| Parts ordered | :white_check_mark: Complete | $1,943 across 8 orders |
| Parts arriving | :hourglass_flowing_sand: In Progress | Jan 27-30 |
| Cook Test v0.1 (observer) | :black_square_button: | Feb 3 |
| Cook Test v0.2 (auto heat) | :black_square_button: | Feb 4 |
| Cook Test v0.3 (+ pump) | :black_square_button: | Feb 5 |
| Cook Test v1.0 (full auto) | :black_square_button: | Feb 7 |

---

## Human-in-the-Loop: How We Get to Full Automation

We're building incrementally, proving each subsystem works before adding the next. Each cook test increases what the robot handles while reducing what the human does.

### Cook Test v0.1 - Observer Mode
**Robot does:** Nothing (sensors only)
**Human does:** Everything (heat, stir, add water)
**What we prove:** Sensors work. Can detect temperature, color, pan weight.

### Cook Test v0.2 - Automated Heat Control
**Robot does:** Controls heat (TILLREDA hack)
**Human does:** Stirs when prompted, adds water when prompted
**What we prove:** Heat control prevents burning. Robot says "stir now" and you do it.

### Cook Test v0.3 - Heat + Water Pump
**Robot does:** Controls heat, pumps water automatically
**Human does:** Stirs when prompted
**What we prove:** Water dispensing works. Robot detects when onions are dry and adds water.

### Cook Test v1.0 - Full Automation
**Robot does:** Heat, stirring (Dynamixel), water pump
**Human does:** Loads onions, presses start, eats onions
**What we prove:** End-to-end automated caramelized onions.

### Why This Approach?

1. **Faster feedback** - Don't build everything before testing anything
2. **Isolate failures** - When something breaks, you know which subsystem
3. **Motivation** - Small wins along the way (edible onions at every step!)
4. **Safety** - Human oversight while working with heat and moving parts

---

## Documentation

| Doc | Description |
|-----|-------------|
| [BUILD-LOG.md](./BUILD-LOG.md) | Orders, receiving checklist, TDD validation, assembly schedule |
| [SHOPPING-LIST.md](./SHOPPING-LIST.md) | Complete parts list with links (~$570 Phase 1, ~$1,943 total) |
| [LABEL-GUIDE.md](./LABEL-GUIDE.md) | Printable guide for organizing parts by subsystem |
| [ASSEMBLY-MANUAL.md](./ASSEMBLY-MANUAL.md) | Step-by-step build instructions |
| [OPEN-COOKER.md](./OPEN-COOKER.md) | Vision for an open-source cooking platform |
| [EXPERIMENTS.md](./EXPERIMENTS.md) | Hackability experiments (Cookidoo, TILLREDA, etc.) |
| [MARKET-RESEARCH.md](./MARKET-RESEARCH.md) | Multi-cooker market analysis |

---

## Quick Links

**Build Schedule (Full-Time):**
- Day 1: Pi + Frame + Sensors
- Day 2: More Sensors + Vision
- Day 3: Software + Cook Test v0.1
- Day 4: TILLREDA Hack + Cook Test v0.2
- Day 5: Pumps + Cook Test v0.3
- Day 6: Dynamixel + Cook Test v1.0

**Key Resources:**
- [Hackaday TILLREDA Hack](https://hackaday.io/project/203350-diy-pwm-controlled-ikea-tillreda-induction-cooktop)
- [Dynamixel XM430 e-Manual](https://emanual.robotis.com/docs/en/dxl/x/xm430-w350/)
- [Fungineering Robot Chef](https://www.hackster.io/news/this-robotic-sous-chef-is-powered-by-a-raspberry-pi-41c186738f77)

---

## Subsystems

```
                    ┌─────────────────────────────────────┐
                    │          RASPBERRY PI 5             │
                    │            (CONTROL)                │
                    └──────────────┬──────────────────────┘
                                   │
       ┌───────────────┬───────────┼───────────┬──────────────┐
       │               │           │           │              │
       ▼               ▼           ▼           ▼              ▼
  ┌─────────┐    ┌──────────┐ ┌─────────┐ ┌─────────┐   ┌──────────┐
  │ HEATING │    │ STIRRING │ │ SENSING │ │DISPENSING│  │  SAFETY  │
  │         │    │          │ │         │ │         │   │          │
  │TILLREDA │    │Dynamixel │ │ HQ Cam  │ │ Pumps   │   │  E-Stop  │
  │+ Arduino│    │ XM430    │ │Thermal  │ │ (x6)    │   │          │
  │ (hack)  │    │          │ │Thermo   │ │         │   │          │
  └─────────┘    └──────────┘ │LoadCell │ └─────────┘   └──────────┘
                              └─────────┘
```

---

## Parts Organization

| Bin | Color | Subsystem |
|:---:|:-----:|-----------|
| 1 | :red_circle: | CONTROL |
| 2 | :orange_circle: | HEATING |
| 3 | :yellow_circle: | STIRRING |
| 4 | :green_circle: | SENSING |
| 5 | :blue_circle: | DISPENSING |
| 6 | :purple_circle: | FRAME |
| 7 | :black_circle: | SAFETY |
| 8 | :white_circle: | TOOLS |

See [LABEL-GUIDE.md](./LABEL-GUIDE.md) for printable reference.

---

## Why "chez-D"?

*Chez* (French) = "at the home of"

Your personal robot chef, cooking at your place.

---

## License

TBD - Considering MIT or Apache 2.0 for open-source release.

---

*Started: January 25, 2026*
