# Claude Instructions for chez-D

## Project Overview

chez-D is a DIY robot chef project — more precisely, a **cooking skill acquisition platform**. Caramelized onions is the first job, but the real goal is building composable skills that unlock increasingly complex cooking tasks.

**Current Status:** Parts arriving Jan 27-30, 2026. Build starts Jan 30.

## Ecosystem Vision

We're not trying to solve general robot manipulation. We're going **deep on food** — the entire supply chain from sourcing to cleanup.

```
SOURCING → STORAGE → PREP → COOKING → SERVING → CLEANUP
   │          │        │        │          │         │
ordering   unpacking  chopping  chez-D    plating   dishes
inventory  organizing measuring heat      portions  surfaces
growing?   fetching   mise en   stirring            putting away
           rotation   place     timing
```

**Multiple specialized robots**, not one do-everything arm:
- **Cooking robot** (chez-D) — heat, stir, dispense, sense
- **Dish robot** — wet/dirty environment, different form factor
- **Fetch/organize robot** — mobile base, cabinet access
- **Prep robot** — cutting, measuring (high precision, maybe last)

**Digital automation layer**:
- Inventory tracking (what's in the fridge, what's expiring)
- Auto-ordering (low stock → delivery scheduled)
- Recipe planning (what can we make with what we have?)
- Delivery integration (robot unpacks when package arrives)

All share: **data infrastructure**, **skill primitives**, **intervention logging**.

### Shared Skills Across Kitchen Robots

Skills and data transfer between specialized kitchen robots:

| Skill Primitive | chez-D (cooking) | Dish Robot | Fetch Robot | Prep Robot |
|-----------------|------------------|------------|-------------|------------|
| **Hold tool securely** | Spatula | Scrub brush | Grip handles | Knife |
| **Detect tool state** | In food vs air | In water vs air | Carrying vs empty | Cutting vs not |
| **Verify action effect** | Stirring resistance | Scrubbing friction | Object moved | Cut completed |
| **Sense temperature** | Pan temp | Water temp | Fridge temp | — |
| **Detect "done"** | Caramelization | Clean enough | Item in place | Chopped fine enough |
| **Handle failure** | Burning → reduce heat | Stuck food → scrub harder | Dropped → pick up | Slipped → re-grip |

**Data infrastructure that transfers:**
- Same logging format, same timestamp sync, same intervention protocol
- Models trained on chez-D force/torque data inform dish robot scrubbing
- Visual "doneness" detection generalizes (brown onions → clean plate → organized shelf)
- Failure recovery patterns learned on one robot seed others

chez-D is the first node. The cooking data we collect informs the whole ecosystem.

### Why Start Here

chez-D serves multiple purposes simultaneously:

| Purpose | What It Builds |
|---------|----------------|
| **Human learning** | Skills in hardware, sensors, control systems, debugging |
| **Proof of concept** | Caramelized onions works end-to-end |
| **Test bed** | Data infrastructure, intervention logging, control software |
| **Confidence** | Foundation for larger ambitions ("I can do this") |
| **Ecosystem seed** | Patterns and primitives that transfer to other kitchen robots |

The onions aren't the point. The onions are the vehicle for building everything else — the skills, the infrastructure, the data practices, and the confidence to pursue the full ecosystem.

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

## Data Collection Strategy

**Robotics is data-bottlenecked.** The architectures exist (Diffusion Policy, transformer-based control, etc.). What doesn't exist is the training data. You can't download it — it has to come from robots in the world. Every cook is a data collection run.

### What to Capture

| Stream | Sensor | Rate | Why |
|--------|--------|------|-----|
| Thermal image | MLX90640 | 4-8 Hz | Temperature distribution, hot spots, burn prediction |
| Visual image | HQ Camera | 30 Hz | Color, texture, caramelization state |
| **Audio** | USB Microphone | 16+ kHz | **Sizzle, bubbling, "sounds wrong" — info-dense, mostly ignored by others** |
| Pan temperature | Thermocouple | 10 Hz | Ground truth temp at contact point |
| Spatula force | Load cell | 50+ Hz | Resistance, stuck food, tool-in-medium |
| Motor state | Dynamixel | 50+ Hz | Position, velocity, torque (current) |
| Ambient conditions | DHT22 or similar | 1 Hz | Room temp, humidity — affects cooking dynamics |
| Heat commands | Software | On change | What the system commanded |
| Pump commands | Software | On change | Water additions |
| **Interventions** | Human input | On event | **THE MOST VALUABLE DATA** |

### Intervention Logging

Every time a human steps in, that's a label:
- **Stir intervention**: System should have stirred but didn't → when + sensor state at that moment
- **Heat intervention**: Human adjusted heat → what sensors showed, what human changed it to
- **Water intervention**: Human added water → conditions that triggered it
- **Save intervention**: Human prevented burn/failure → critical near-miss data

Make interventions easy to log: a button, a voice command, a keyboard press. Capture the 5 seconds before and after. This is the gradient signal.

### Why Video Isn't Enough

General video (YouTube cooking, etc.) may lift starting capabilities, but it doesn't remove the need for on-robot data. Reading about golf doesn't make you a golfer — you need to swing the club.

**Video gives you:**
- What movements look like from outside
- Rough trajectories
- Visual outcomes

**Video doesn't give you:**
- Forces and torques (how hard to push, when resistance changes)
- Proprioception (where the arm *feels* like it is)
- Contact dynamics (what happens when spatula meets onion)
- Recovery sequences (what the body does when something slips)

Embodied data requires embodiment to collect.

### Collection Methods

Different methods for collecting on-robot data:

| Method | chez-D Application | What It Captures |
|--------|-------------------|------------------|
| **Demonstration while observing** | Cook manually while sensors record | Expert trajectories with full sensor context |
| **Direct manipulation** | Physically guide the spatula through a stir | Position + force trajectory, "how it should feel" |
| **Teleoperation** | Control via joystick/keyboard while watching cameras | Human decisions in response to visual/thermal state |
| **Autonomous + intervention** | Let it run, step in when wrong | Policy boundaries, failure modes, recovery actions |

**How chez-D phases map to collection methods:**

| Phase | Primary Collection Method | Data Type |
|-------|--------------------------|-----------|
| v0.1 (observer) | Demonstration while observing | Expert cooking with full sensor logging |
| v0.2 (coached heat) | Autonomous + intervention | Heat policy performance + stir timing labels |
| v0.3 (semi-auto) | Autonomous + intervention | Pump policy + remaining stir gaps |
| v1.0 (full auto) | Autonomous + intervention | Full policy with intervention-labeled failures |
| Future | Direct manipulation / teleop | Fine-grained trajectory corrections |

Each phase generates different but complementary data. Don't skip phases — each builds the dataset for the next.

### Data From Day One

Even v0.1 (observer mode) collects valuable data:

| Phase | What We Collect | What It Teaches |
|-------|-----------------|-----------------|
| v0.1 | Sensor streams + human timestamps of stir/adjust | Baseline dynamics, what "good" looks like |
| v0.2 | Above + system prompts + human response timing | When prompts were right/wrong |
| v0.3 | Above + pump commands + stir interventions | Pump timing, stirring gaps |
| v1.0 | Above + full motor trajectory + any interventions | End-to-end policy data |

### Storage Format

```
/data/cooks/
  2026-02-03_v0.1_onions_001/
    thermal/          # PNG frames, timestamped
    visual/           # PNG frames, timestamped
    sensors.parquet   # Time-series: temp, load, motor state
    events.jsonl      # Commands, state changes, interventions
    metadata.json     # Cook version, outcome, notes
```

Timestamp everything. Sync all streams to a common clock. Make it easy to replay any moment.

### Smallest Data Counts

Don't wait for "real" training runs. Capture:
- Sensor calibration sessions (what does "room temp" look like?)
- Failed boots and error states (what does "broken" look like?)
- Manual cooking while system watches (expert demonstrations)
- Even just the thermal camera watching an empty pan heat up

This data compounds. A year from now, you'll wish you had the data from today.

### Data Moat Strategy

Big companies have resources, but hobbyists can out-collect them through nuance and longevity:

| Big Company Advantage | Hobbyist Counter-Advantage |
|-----------------------|---------------------------|
| More resources | N identical test kitchens. Hobbyists have N *different* kitchens — better for generalization |
| Dedicated researchers | Research sprints end. Hobbyists cook dinner every day for years |
| Clean data pipelines | May discard "messy" runs. Hobbyists keep failures, saves, edge cases |
| Professional annotations | Check-box labels. Hobbyists log *why* it felt wrong |
| Proprietary moats | Can't share. Hobbyists can pool across a community |

**Capture what others ignore:**

| Data Type | Why It Matters | Why Others Miss It |
|-----------|---------------|-------------------|
| **Audio** | Sizzle is information-dense. Cooks use it constantly. | Not "standard" robot sensing |
| **Ingredient variability** | These onions vs those. Fresh vs old. Yellow vs white. | Labs standardize ingredients |
| **Equipment drift** | Spatula wears, burner gets uneven, thermocouple drifts | Labs replace equipment |
| **Recovery trajectories** | The *sequence* of actions to save a failing cook | Labs discard failed runs |
| **Subjective outcomes** | "Too sweet" / "perfect" / "I like it darker" | Labs optimize for "done" |
| **Ambient conditions** | Humidity, altitude, room temp affect cooking | Controlled environments |
| **Ingredient provenance** | Source, age since purchase, storage conditions | Standardized test ingredients |
| **Multi-cook correlation** | Same recipe 100x across seasons, moods, batches | Sprint-based research |

**The moat**: Years of daily cooking with rich logging > weeks of research sprints. Diversity of real conditions > controlled lab environments. Community data pooling > proprietary silos.

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
