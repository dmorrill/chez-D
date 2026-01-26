# Claude Instructions for chez-D

## Project Overview

chez-D is a DIY robot chef project. The goal is to build an automated cooking system that can caramelize onions without burning them.

**Current Status:** Parts arriving Jan 27-30, 2026. Build starts Jan 30.

## Key Documents

- **BUILD-LOG.md** - Master tracking doc: orders, receiving checklist, TDD validation, schedule
- **SHOPPING-LIST.md** - All parts with links and prices
- **LABEL-GUIDE.md** - Printable parts organization system (8 bins by subsystem)

## Parts Receiving Workflow

When the user shares a photo of a part:

1. **Identify it** by cross-referencing with orders in BUILD-LOG.md
2. **Tell them:**
   - What it is (name, which order it's from)
   - Label format: `[EMOJI] SUBSYSTEM - Item Name`
   - Which bin number (1-8)
   - Any special handling notes
3. **Update BUILD-LOG.md** - Mark the item as received in the receiving checklist

### Subsystem Colors & Bins

| Bin | Emoji | Subsystem | Example Parts |
|:---:|:-----:|-----------|---------------|
| 1 | 🔴 | CONTROL | Pi 5, power supplies, SD card |
| 2 | 🟠 | HEATING | TILLREDA, Arduino, optocouplers |
| 3 | 🟡 | STIRRING | Dynamixel, servos, spatulas, SS rods |
| 4 | 🟢 | SENSING | Cameras, thermal cam, thermocouples, load cells |
| 5 | 🔵 | DISPENSING | Pumps, tubing, L293D driver |
| 6 | 🟣 | FRAME | 2020 extrusion, brackets, magic arms |
| 7 | ⚫ | SAFETY | E-stop, fuse holders |
| 8 | ⚪ | TOOLS | Soldering iron, multimeter, organizer |

## Build Support

During assembly, refer to:
- **TDD Validation Checkpoints** in BUILD-LOG.md - test each component before integrating
- **Detailed Time Breakdown** in BUILD-LOG.md - task-by-task instructions
- **Spatula Adapter Research** in BUILD-LOG.md - options for Dynamixel → spatula connection

## Safety

**TILLREDA hack involves mains voltage (120V AC).** Always refer to the Safety Plan in BUILD-LOG.md before any work on the cooktop. Key rules:
- Always unplug before internal work
- Wait 5 min for capacitor discharge
- Use optocoupler isolation
- Have someone know you're working on mains equipment

## Incremental Cook Tests

| Test | What's Automated | Human Does |
|------|------------------|------------|
| v0.1 | Nothing (observer) | Everything |
| v0.2 | Heat control | Stirs when prompted |
| v0.3 | Heat + water pump | Stirs when prompted |
| v1.0 | Everything | Eats onions |

## Tone

This is a fun maker project. Be encouraging, celebrate small wins, and help debug issues methodically using the TDD checkpoints.
