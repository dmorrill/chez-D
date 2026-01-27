# Claude Instructions for chez-D

## Project Overview

chez-D is a DIY robot chef project — more precisely, a **cooking skill acquisition platform**. Caramelized onions is the first job, but the real goal is building composable skills that unlock increasingly complex cooking tasks.

**Current Status:** Parts arriving Jan 27-30, 2026. Build starts Jan 30.

## Design Philosophy

### Skills Unlock Jobs, Jobs Teach Specifics

Each skill we build unlocks a set of jobs. Doing those jobs teaches the system specifics about applying that skill in context. This compounds:

```
Learn skill → Unlock jobs → Do jobs → Learn specifics → Refine skill → Unlock more jobs
```

**Don't think "how do we caramelize onions?" — think "what skills does caramelizing onions require, and what else do those skills enable?"**

### Skills Have Prerequisites

Skills decompose downward into prerequisites. Before you can stir, you must hold a tool. Before you can use the right tool, you must detect what's in hand. Each prerequisite is itself a skill that unlocks other capabilities.

### Search + Feedback Over Pre-Planning

Rich sensory feedback + adaptive search beats rigid pre-planning. Instead of requiring exact positions, the system should explore, feel resistance, detect errors, and adjust. Example: detect if the spatula is actually in the food vs. waving in air (motor current + load cell should differ).

### Gradient Ascent Over Leaps

Progress comes from small, consistent improvements guided by real feedback — not from trying to solve the general problem upfront. Each job exposes new variability; handling that variability expands what the system can do. The plan is not to leap from lab demo to capable robot, but to climb the gradient of real-world variability and capture more of the spectrum.

### Get Paid to Eat the Spectrum

Deploy early. Imperfect systems doing real jobs generate value AND the data needed to improve — especially intervention data when humans step in. Those interventions are the gradient signal pointing where the system must grow. This data is tailor-made for your robots; no one else can collect it. Iterate on the whole system fast enough to reach general usefulness — eating more of the spectrum of jobs to be done — before giant-leap approaches do.

## Skill Tree

Skills the onion job builds, and what they unlock:

### Fundamental Skills (Prerequisites)

| Skill | Prerequisites | How We Validate |
|-------|---------------|-----------------|
| **Hold tool securely** | Attachment intact | Torque feedback shows expected resistance |
| **Detect tool state** | Sensors working | Can distinguish: in food, in air, hitting pan edge |
| **Verify action effect** | Above two | Stirring motion + resistance = actually stirring |
| **Find pan/food** | Vision + position | Probe to locate edges, find where food accumulates |

### Cooking Skills (What Onions Teach)

| Skill | How Onions Teach It | Jobs It Unlocks |
|-------|---------------------|-----------------|
| **Heat control with feedback** | Target temp, detect "about to burn", back off | Sautéing, reducing, toasting, roux |
| **Stirring with force sensing** | Feel resistance, adjust pressure, find stuck bits | Risotto, polenta, scrambled eggs, sauces |
| **Liquid dispensing on demand** | Detect sticking → add water | Deglazing, building sauces, adding stock |
| **Doneness detection** | Visual + thermal signature of caramelization | Any cooking task with a target state |

### Failure Modes to Detect

| Failure | Detection Method | Response |
|---------|------------------|----------|
| Spatula not in food | Motor current too low for motion | Lower spatula, re-probe |
| Tool came loose | Sudden loss of resistance | Stop, alert |
| Food stuck to pan | Resistance spike, visual browning | Add water, increase scraping force |
| About to burn | Thermal spike, color change | Reduce heat immediately |
| Stirring air | Load cell + current mismatch | Reposition |

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
