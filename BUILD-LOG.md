# DIY Robot Chef Build Log

> Tracking parts, costs, assembly progress, and lessons learned.

**Project Start Date**: January 25, 2025
**Status**: Parts Acquisition

---

## Parts Inventory

### Adafruit Order #1
**Order Date**: January 25, 2025
**Expected Shipping**: Tuesday, January 27, 2025
**Order Total**: $517.90

| Item | SKU | Price | Qty | Total | Status | Notes |
|------|-----|-------|-----|-------|--------|-------|
| Raspberry Pi 5 8GB | 5813 | $104.50 | 1 | $104.50 | Ordered | |
| Peristaltic Pump 12V | 1150 | $24.95 | 6 | $149.70 | Ordered | +2 spares |
| L293D Motor Driver | 807 | $8.95 | 1 | $8.95 | Ordered | |
| Silicone Tubing 1m | 3659 | $3.50 | 1 | $3.50 | Ordered | Spare tubing |
| PCA9685 PWM Driver | 815 | $14.95 | 1 | $14.95 | Ordered | |
| Pi 5 Camera Cable 500mm | 5819 | $2.50 | 3 | $7.50 | Ordered | +2 spares (fragile) |
| STEMMA QT Cable 100mm | 4399 | $0.95 | 5 | $4.75 | Ordered | +4 spares |
| MLX90640 Thermal Cam | 4469 | $74.95 | 1 | $74.95 | Ordered | 110° FOV (price increased) |
| K-Type Thermocouple | 270 | $9.95 | 3 | $29.85 | Ordered | +2 spares |
| MAX31855 Thermocouple Amp | 269 | $14.95 | 1 | $14.95 | Ordered | |
| HQ Camera 12.3MP (IMX477) | 4561 | $55.00 | 1 | $55.00 | Ordered | Upgraded from Camera Module 3 |
| 6mm Wide Angle Lens (CS-mount) | 4563 | $49.30 | 1 | $49.30 | Ordered | For HQ Camera |
| **Subtotal** | | | 25 items | **$517.90** | | |

**Notes**:
- Upgraded from Camera Module 3 to HQ Camera + lens for better image quality (product differentiation)
- Added extra pumps, cables, thermocouples as spares for fragile components
- MLX90640 price increased from $54.95 to $74.95 (supply chain concern for scaling)

### Amazon Order #1
**Order Date**: January 25, 2025
**Order Total**: $618.96
**Payment**: Personal Amazon card (needs expense reimbursement)

#### Robot Chef Components
| Item | Price | Qty | Status | Notes |
|------|-------|-----|--------|-------|
| ANNIMOS 25kg Servo (waterproof) | $18 | 1 | Ordered | DS3225 unavailable, this is #1 Top Rated |
| MG996R Servo 4-pack (Fully Copper) | $22.99 | 1 | Ordered | Upgraded to copper gears for reliability |
| ShangHJ Load Cell + HX711 (4 sets) | $15.99 | 1 | Ordered | Original unavailable, better deal (4 sets) |
| Xnrtop K-Type Thermocouple TP20 | $11.59 | 1 | Ordered | Backup (Adafruit has 3 coming) |
| 12V 5A Power Supply | $15 | 1 | Ordered | For pumps/servos |
| CanaKit 45W USB-C Pi 5 Power Supply | $15.77 | 1 | Ordered | 27W @ 5A for Pi 5 |
| 2020 Aluminum Extrusion 10pk (48") | $60 | 1 | Ordered | Frame |
| TOHIRA 2020 Corner Bracket Kit (20 sets) | $14.99 | 1 | Ordered | Original unavailable |
| Yinpecly T-Slot Nut Kit (200pcs) | $9.99 | 1 | Ordered | |
| E-Stop Button (22mm) | $8 | 1 | Ordered | Safety |
| SanDisk Extreme 64GB A2 MicroSD | $21.99 | 1 | Ordered | Original unavailable, A2 rating for Pi |
| Dupont Jumper Wire Kit (120pcs) | $5.97 | 1 | Ordered | |
| ELEGOO Breadboard 3-pack | $6.99 | 1 | Ordered | |
| **Components Subtotal** | | | | **~$227** |

#### Electronics Tool Kit
| Item | Price | Status | Notes |
|------|-------|--------|-------|
| ANBES 60W Soldering Iron Kit | ~$20 | Ordered | Full kit with stand, tips, solder |
| PINECIL Portable Soldering Iron | ~$30 | Ordered | Field work capability |
| AstroAI TRMS 6000 Multimeter | ~$35 | Ordered | Auto-ranging, good reviews |
| Wire Stripper/Crimper Set | ~$15 | Ordered | |
| Heat Shrink Tubing Kit | ~$12 | Ordered | |
| Allen Key Set (Metric) | ~$15 | Ordered | Multiple sets for redundancy |
| Precision Screwdriver Set | ~$15 | Ordered | |
| Flush Cutters | ~$8 | Ordered | |
| Helping Hands/Third Hand | ~$15 | Ordered | |
| Zip Ties Assortment | ~$10 | Ordered | |
| Anti-Static Wrist Strap | ~$8 | Ordered | |
| Electronics Organizer Case | ~$20 | Ordered | Portable tool transport |
| **Tool Kit Subtotal** | | | **~$203** |

**Additional Items in Cart**: SD cards (extras), power supplies (redundancy), allen key sets (multiple)
**Notes**: Prioritized reliability over cost. Some duplicate items for spares.

### IKEA Order #1
**Order Date**: January 25, 2025
**Order #**: 488433982
**Delivery**: January 30, 2026
**Order Total**: $92.65
**Payment**: Company Amex

| Item | Price | Status | Notes |
|------|-------|--------|-------|
| TILLREDA Induction Cooktop | $74.99 | Ordered | The hackable heating element |
| Delivery | $10.00 | | |
| Sales Tax | $7.38 | | |
| Retail Delivery Fee | $0.28 | | |
| **Total** | **$92.65** | | |

### McMaster-Carr Order #1
**Order Date**: January 25, 2025
**Order #**: 0125DMORRILL
**Delivery**: Wednesday (Jan 29)
**Order Total**: $42.01
**Payment**: Company Amex

| Item | SKU | Price | Qty | Total | Status | Notes |
|------|-----|-------|-----|-------|--------|-------|
| Continuous-Flex Soft Opaque Rubber Tubing (10ft) | 52035K42 | $12.69 | 2 | $25.38 | Ordered | 2mm ID × 5mm OD, for peristaltic pumps |
| Shipping | | | | $13.61 | | Standard |
| Tax | | | | $3.02 | | |
| **Total** | | | | **$42.01** | | |

**Notes**:
- Chose plasticizer-free rubber over silicone (FDA Compliant 21 CFR 177.2600, NSF/ANSI 51)
- 2mm ID matches Adafruit peristaltic pump requirements
- 20ft total provides spares for replacements

### McMaster-Carr Order #2 (Spatula Shaft)
**Order Date**: January 25, 2026
**Order #**: 0125DMORRILL
**Delivery**: Wednesday (Jan 29)
**Order Total**: $30.97
**Payment**: Company Amex (****1028)

| Item | SKU | Price | Qty | Total | Status | Notes |
|------|-----|-------|-----|-------|--------|-------|
| Multipurpose 304 Stainless Steel Rod (6mm × 1ft) | 1272T36 | $8.40 | 2 | $16.80 | Ordered | Spatula shaft for Dynamixel |
| Shipping | | | | $12.01 | | Standard |
| Tax | | | | $2.16 | | |
| **Total** | | | | **$30.97** | | |

**Notes**:
- 6mm ≈ 1/4" (0.236" vs 0.250") - close enough for spatula shaft
- 2 rods: 1 for build + 1 spare
- Same order # as Order #1 (McMaster uses customer ID as order #)

### ROBOTIS Order #1 (Phase 2: Torque-Controlled Stirring)
**Order Date**: January 25, 2026
**Order #**: 184532
**Order Total**: $386.19
**Payment**: TBD

| Item | SKU | Price | Qty | Total | Status | Notes |
|------|-----|-------|-----|-------|--------|-------|
| DYNAMIXEL XM430-W350-T | 902-0124-000 | $310.39 | 1 | $310.39 | Ordered | 4.1Nm torque, torque control mode |
| U2D2 USB Adapter | - | $36.92 | 1 | $36.92 | Ordered | Connects Dynamixel to Pi |
| U2D2 Power Hub Board Set | - | $21.85 | 1 | $21.85 | Ordered | ⚠️ Expected Late March |
| Shipping | | | | $17.03 | | |
| **Total** | | | | **$386.19** | | |

**Notes**:
- Power Hub backordered until late March - can use DIY 12V wiring in meantime
- Dynamixel + U2D2 should ship sooner
- Enables torque-controlled stirring for delicate tasks (caramelizing onions, scraping fond)

### Amazon Order #2 (TILLREDA Hack Kit)
**Order Date**: January 25, 2026
**Order Total**: ~$76.92
**Payment**: Personal Amazon

| Item | Price | Qty | Status | Notes |
|------|-------|-----|--------|-------|
| ELEGOO Nano Board 3-Pack | $15.99 | 1 | Ordered | ATmega328P, Arduino-compatible |
| 4N35 Optocoupler 10-Pack | $14.98 | 1 | Ordered | Isolation for mains safety |
| 3.5mm Panel Mount Connectors 20-Pack | $11.99 | 1 | Ordered | External control input |
| 3.5mm Audio Cable 1.5ft (3-Pack) | $6.49 | 1 | Ordered | Short connections |
| 3.5mm Audio Cable 3ft (3-Pack) | $6.49 | 1 | Ordered | Pi to cooktop |
| BOJACK 17 Values 1% Resistor Kit | $12.99 | 1 | Ordered | Voltage dividers, pull-ups |
| PCB Prototype Boards 32pcs | $7.99 | 1 | Ordered | Custom circuit assembly |
| **Total** | | | **~$76.92** | |

**Notes**:
- ⚠️ **MAINS VOLTAGE WORK** - See Safety Plan below
- Components for intercepting TILLREDA serial communication (9600 baud, 8N1)
- Provides PWM-based power control (0-20 levels vs stock 0-9 buttons)
- Enables closed-loop Pi-controlled heating for autonomous cooking

### Amazon Order #3 (Caramelized Onions Test Case + Organization)
**Order Date**: January 25, 2026
**Order Total**: $177.11
**Payment**: Personal Amazon (expensed)

| Item | Price | Qty | Status | Notes |
|------|-------|-----|--------|-------|
| U-Taste Silicone Spatula Set (Red) | $22.94 | 1 | Ordered | 600°F heat-resistant, BPA-free |
| U-Taste Silicone Spatula Set (Black) | $21.24 | 1 | Ordered | Backup set |
| FOMITO 11" Magic Arm + Clamp | $14.98 | 1 | Ordered | HQ camera mount |
| ChromLives 11" Magic Arm + Clamp | $29.99 | 1 | Ordered | Thermal camera mount |
| 18 AWG Inline Fuse Holder Kit | $9.99 | 1 | Ordered | 5A protection for Dynamixel |
| Kidisoii JST Servo Connector Kit | $18.99 | 2 | $37.98 | Dynamixel power wiring |
| IRIS USA 44-Drawer Organizer | $39.99 | 1 | Ordered | Small parts storage |
| **Total** | | | **$177.11** | |

**Notes**:
- All parts needed for caramelized onions test case (except SS rod from McMaster)
- Two spatula sets: one for testing, one backup (silicone degrades with high heat)
- Two magic arms: one for HQ camera (visual), one for thermal camera
- 44-drawer organizer for screws, connectors, small components

---

## Cost Summary

### Robot Chef Parts (Phase 1)
| Category | Estimated | Actual | Notes |
|----------|-----------|--------|-------|
| Adafruit | ~$280 | $517.90 | HQ camera upgrade + spares |
| Amazon (Parts) | ~$227 | ~$400* | Components + extras + tax |
| IKEA | ~$70 | $92.65 | TILLREDA + delivery + tax |
| McMaster-Carr #1 | ~$20 | $42.01 | FDA tubing + shipping + tax |
| **Phase 1 Subtotal** | **~$597** | **~$1,052.56** | |

### Torque-Controlled Stirring (Phase 2)
| Category | Estimated | Actual | Notes |
|----------|-----------|--------|-------|
| ROBOTIS | ~$400 | $386.19 | Dynamixel + U2D2 + Power Hub |
| McMaster-Carr #2 | ~$10 | $30.97 | SS rod for spatula shaft (×2) |
| Amazon #3 (Stirring) | ~$90 | ~$90 | Spatulas, magic arms, JST, fuses |
| **Phase 2 Subtotal** | **~$500** | **~$507** | |

### TILLREDA PWM Hack (Phase 3 → Moved Up)
| Category | Estimated | Actual | Notes |
|----------|-----------|--------|-------|
| Amazon (Hack Kit) | ~$50 | ~$76.92 | Arduino, optocouplers, PCB, connectors |
| **Phase 3 Subtotal** | **~$50** | **~$76.92** | |

### Tools (One-Time Investment)
| Category | Estimated | Actual | Notes |
|----------|-----------|--------|-------|
| Amazon (Tools) | ~$203 | ~$219* | Soldering, multimeter, crimpers, etc. |
| **Tools Subtotal** | **~$203** | **~$219** | Reusable for future projects |

### Organization
| Category | Estimated | Actual | Notes |
|----------|-----------|--------|-------|
| Amazon #3 (Organizer) | ~$40 | $39.99 | IRIS 44-drawer organizer |
| **Organization Subtotal** | **~$40** | **~$40** | |

### Optional
| Category | Estimated | Actual | Notes |
|----------|-----------|--------|-------|
| FLIR Lepton | ~$280 | | Higher-res thermal (to research) |

### Grand Total
| | Estimated | Actual |
|--|-----------|--------|
| Phase 1 Parts | ~$597 | ~$1,053 |
| Phase 2 Parts | ~$500 | ~$507 |
| Phase 3 (TILLREDA Hack) | ~$50 | ~$77 |
| Tools | ~$203 | ~$219 |
| Organization | ~$40 | ~$40 |
| **Total** | **~$1,390** | **~$1,943** |

*Amazon order was $618.96 total; parts/tools split estimated based on line items + proportional tax.

## Expense Tracking

| Date | Vendor | Amount | Payment Method | Expensed | Notes |
|------|--------|--------|----------------|----------|-------|
| 2026-01-25 | Adafruit | $517.90 | Company Amex | N/A | Direct company purchase |
| 2026-01-25 | Amazon #1 | $618.96 | Personal Amazon | ❌ Pending | Reminder set for Mon 2pm |
| 2026-01-25 | IKEA | $92.65 | Company Amex | N/A | Direct company purchase |
| 2026-01-25 | McMaster-Carr #1 | $42.01 | Company Amex | N/A | FDA rubber tubing |
| 2026-01-25 | ROBOTIS | $386.19 | TBD | | Dynamixel + U2D2 (Phase 2) |
| 2026-01-25 | Amazon #2 | ~$76.92 | Personal Amazon | ❌ Pending | TILLREDA hack kit |
| 2026-01-25 | Amazon #3 | $177.11 | Personal Amazon | ✅ Expensed | Caramelized onions test case + organizer |
| 2026-01-25 | McMaster-Carr #2 | $30.97 | Company Amex | N/A | SS rod for spatula shaft |
| 2026-01-27 | Amazon #4 | ~$20 | Personal Amazon | ❌ Pending | FINDAT color stickers (2 packs) |
| **Total** | | **~$1,962.71** | | | |

---

## Workarounds & Contingencies

### Power Hub Backorder Workaround (Until Late March)

The U2D2 Power Hub is backordered until late March 2026. To run the Dynamixel XM430 before then:

**DIY Power Connection:**
```
12V 5A Power Supply (from Amazon order)
    │
    ├──── VCC → Dynamixel power pin (red wire)
    │
    └──── GND → Dynamixel ground pin (black wire)

U2D2 (USB to Pi) handles communication only - no power needed from it
```

**Parts needed:**
- 12V 5A power supply (already ordered)
- JST connector or bare wire to Dynamixel power pins
- Wire strippers, soldering iron

**Safety notes:**
- Double-check polarity before connecting
- Use appropriate wire gauge (18-22 AWG for 5A)
- Add inline fuse (5A) for protection

---

## ⚠️ TILLREDA Hack Safety Plan

> **MAINS VOLTAGE (120V AC) IS LETHAL.** This section must be read and understood before ANY work on the TILLREDA cooktop.

### Risk Assessment

| Hazard | Severity | Mitigation |
|--------|----------|------------|
| Electric shock (120V AC) | **FATAL** | Unplug before ALL internal work |
| Capacitor discharge | Severe | Wait 5 min after unplugging, discharge with resistor |
| Fire from short circuit | Severe | Use fused connections, don't leave unattended |
| Burns from hot surface | Moderate | Allow cooling before disassembly |
| Eye injury from arc flash | Moderate | Safety glasses when testing with power |

### Pre-Work Checklist

**Before EVERY session working on TILLREDA internals:**

- [ ] Cooktop is **UNPLUGGED** from wall outlet
- [ ] Verified unplugged (plug is in your hand or visible)
- [ ] Waited **5 minutes minimum** for capacitor discharge
- [ ] Surface is **cool to touch**
- [ ] Work area is **dry** (no water/liquids nearby)
- [ ] Wearing **closed-toe shoes** (insulation from ground)
- [ ] Have **one hand rule** in mind (work one-handed to avoid current path through heart)
- [ ] Someone else knows you're working on mains equipment (or phone nearby)
- [ ] Fire extinguisher accessible (Class C for electrical)

### Safe Work Procedures

#### Phase 1: Disassembly (Always Unplugged)
1. **Unplug** the cooktop
2. Place plug **in visible location** or attach note "DO NOT PLUG IN"
3. Wait 5 minutes for capacitor discharge
4. Remove screws to access internals
5. **Photograph everything** before disconnecting
6. Identify the serial communication lines (control board → power board)
7. Do NOT touch any large capacitors or power components

#### Phase 2: Circuit Building (Bench Work)
1. Build the optocoupler circuit **completely separate** from TILLREDA
2. Test with Arduino + multimeter on bench (5V logic only)
3. Verify isolation between mains side and logic side
4. Use proper strain relief on all connections

#### Phase 3: Integration (Maximum Caution)
1. Install optocoupler circuit with TILLREDA **unplugged**
2. Double-check all connections
3. Verify no exposed conductors
4. Have someone present for first powered test
5. **Stand back** when first plugging in
6. Test with multimeter before touching anything

### SELV Isolation (Safety Extra-Low Voltage)

The 4N35 optocoupler provides **galvanic isolation** between:

```
SAFE SIDE (5V)                    DANGER SIDE (connects to mains-powered PCB)
─────────────────                 ──────────────────────────────────────────
Arduino Nano                      TILLREDA control board
Raspberry Pi                      120V AC nearby
Your body (hopefully)             Lethal voltage present when plugged in

        ┌─────────────┐
 GPIO ──┤ LED    Photo├── To TILLREDA serial
        │    4N35     │
 GND  ──┤        Diode├── TILLREDA GND (isolated!)
        └─────────────┘
           ↑
     OPTICAL GAP = NO ELECTRICAL CONNECTION
```

**Key safety feature**: Even if the optocoupler fails, current cannot flow from mains to your Arduino/Pi/body.

### Emergency Procedures

**If you feel a shock:**
1. DO NOT grab the source - you may not be able to let go
2. Use a non-conductive object to disconnect (wooden broom handle, plastic chair)
3. Or kick the plug out of the wall
4. Seek medical attention even for minor shocks

**If you see smoke/fire:**
1. **Do NOT use water** on electrical fire
2. Unplug if safe to do so
3. Use Class C fire extinguisher
4. Leave area if fire spreads
5. Call 911

**If capacitor discharge (loud pop, flash):**
1. Stay calm, don't touch anything
2. Wait 10 minutes
3. Inspect for damage before proceeding
4. Consider replacing damaged components

### Testing Checklist

**Before each powered test:**
- [ ] All connections secure (no loose wires)
- [ ] No exposed conductors
- [ ] Circuit matches schematic
- [ ] Optocoupler properly oriented (pin 1 marked)
- [ ] Arduino code uploaded and verified
- [ ] Test area clear of flammables
- [ ] Someone knows you're testing
- [ ] Know where the plug is (quick disconnect)

**After successful test:**
- [ ] Unplug before making ANY changes
- [ ] Document what worked
- [ ] Note any unexpected behavior

### References

- [Hackaday TILLREDA Project](https://hackaday.io/project/203350-diy-pwm-controlled-ikea-tillreda-induction-cooktop)
- [EEVblog Forum Thread](https://www.eevblog.com/forum/projects/hacking-the-ikea-2kw-induction-stove/)
- [Kaizer Power Electronics](https://kaizerpowerelectronics.dk/general-electronics/hacking-ikea-2kw-induction-hob/)

### Sign-Off

Before starting TILLREDA hack work, initial here:

| Date | Initials | Confirmation |
|------|----------|--------------|
| | | I have read and understand the safety procedures above |
| | | I have verified my workspace meets safety requirements |
| | | I have a phone nearby and someone knows I'm working on mains equipment |

---

## Assembly Time Estimates

> **Total Estimated Time: 35-55 hours** (~44 hrs typical)
>
> **Full-time: ~6 days** | Weekend hobby: ~6 weekends

### Summary by Phase

| Phase | Description | Est. Hours | Can Start | Blocker |
|-------|-------------|------------|-----------|---------|
| **1** | Basic Automated Cooking | 18-28 hrs | Jan 30 | TILLREDA delivery |
| **2.5** | TILLREDA PWM Hack | 10-16 hrs | Jan 30 | TILLREDA + hack kit |
| **2** | Torque-Controlled Stirring | 12-18 hrs | Early Feb | Dynamixel delivery |
| **First Cook Test** | Caramelized onions! | 2-4 hrs | After Phase 2 | All above complete |

### Full-Time Target Timeline

| Milestone | Target Date | Notes |
|-----------|-------------|-------|
| Parts arrive | Jan 27-30 | TILLREDA is last (Jan 30) |
| Start build | **Jan 30** | Day 1 begins |
| 🧪 **Cook Test v0.1** | **Feb 3** | Manual heat + stir, system monitors |
| 🧪 **Cook Test v0.2** | **Feb 4** | Automated heat + "stir now" prompts |
| 🧪 **Cook Test v0.3** | **Feb 5** | + Automated water pump |
| Dynamixel arrives | ~Feb 5-7 | ROBOTIS shipping |
| 🎉 **Cook Test v1.0** | **Feb 7+** | Fully automated caramelized onions! |

### Incremental Cook Tests

> **Philosophy:** Test early, test often. Human-in-the-loop first, then automate.

#### Cook Test v0.1: "Observer Mode" (End of Day 3)
**What's working:**
- Pi + cameras monitoring pan
- Thermal camera reading temperature
- Thermocouple in pan
- Software logging data

**Human does:**
- Controls TILLREDA manually (buttons)
- Stirs manually
- Adds water manually

**System does:**
- Displays live temperature graph
- Records thermal camera footage
- Logs all sensor data for later analysis

**Goal:** Validate sensors are accurate, understand temperature dynamics of caramelizing onions.

---

#### Cook Test v0.2: "Coached Mode" (End of Day 4)
**What's working:**
- Everything from v0.1
- TILLREDA hack complete (automated heat control)
- Basic control logic

**Human does:**
- Stirs when prompted
- Adds water when prompted

**System does:**
- Automatically controls heat (target temp, ramp up/down)
- Monitors for "stir needed" conditions (temp spike, visual change)
- Outputs: **"STIR NOW"** / **"ADD WATER"** prompts
- Audio alerts (beeps) or text-to-speech

**Goal:** Validate heat control loop, tune "stir needed" detection logic.

---

#### Cook Test v0.3: "Semi-Auto Mode" (End of Day 5)
**What's working:**
- Everything from v0.2
- Pump system for water addition

**Human does:**
- Stirs when prompted

**System does:**
- Automated heat control
- Automated water dispensing (pump delivers measured amounts)
- "STIR NOW" prompts

**Goal:** Validate pump calibration, water timing in recipe.

---

#### Cook Test v1.0: "Full Auto Mode" (Day 6+, after Dynamixel)
**What's working:**
- Everything from v0.3
- Dynamixel torque-controlled stirring
- Spatula assembly

**Human does:**
- Watches and eats onions 🧅

**System does:**
- Automated heat control
- Automated stirring with torque feedback
- Automated water dispensing
- Fond detection and scraping

**Goal:** End-to-end caramelized onions without human intervention.

### TDD Validation Checkpoints

> **Principle:** Never build on untested foundation. Validate each component before integrating.

#### Day 1 Validations

| Test | Pass Criteria | Time | If Fail |
|------|---------------|------|---------|
| **Pi boots** | See desktop or SSH works | 5 min | Reflash SD card |
| **Pi I2C enabled** | `i2cdetect -y 1` shows bus | 2 min | Run raspi-config |
| **Pi SPI enabled** | `/dev/spidev0.0` exists | 2 min | Run raspi-config |
| **Pi camera enabled** | `libcamera-hello` shows preview | 5 min | Check ribbon cable orientation |
| **Thermocouple reads** | `python3 -c "import board; import adafruit_max31855..."` returns temp ±5°C of room temp | 10 min | Check wiring, SPI pins |
| **Thermal cam responds** | I2C address 0x33 appears in `i2cdetect` | 5 min | Check STEMMA cable |
| **Thermal cam image** | Python script shows heat gradient (hand = warm spot) | 10 min | Check library install |

**Day 1 Exit Criteria:** Pi running, both temp sensors giving reasonable readings.

#### Day 2 Validations

| Test | Pass Criteria | Time | If Fail |
|------|---------------|------|---------|
| **Thermocouple accuracy** | Boiling water reads 99-101°C | 10 min | Replace probe or check amp |
| **Thermal cam calibration** | Boiling water shows correct temp on cam | 10 min | Note offset for software |
| **Load cell zeroes** | Tare returns 0 ± 2g | 5 min | Adjust HX711 gain |
| **Load cell accuracy** | Known weight (phone, can) within 5% | 10 min | Recalibrate |
| **HQ Camera focuses** | Can read text at pan distance | 5 min | Adjust lens ring |
| **HQ Camera captures** | `libcamera-still -o test.jpg` works | 5 min | Check ribbon cable |
| **E-stop interrupts** | Button press triggers GPIO callback | 5 min | Check wiring polarity |

**Day 2 Exit Criteria:** All sensors validated, safety system works.

#### Day 3 Validations

| Test | Pass Criteria | Time | If Fail |
|------|---------------|------|---------|
| **Temp logging works** | CSV file grows with timestamp + temp readings | 10 min | Debug file I/O |
| **Live temp display** | Terminal/GUI shows updating temperature | 10 min | Check polling loop |
| **Thermal overlay** | Camera feed with temp overlay visible | 15 min | Check OpenCV install |
| **Alert triggers** | Temp > threshold → beep or print | 10 min | Check threshold logic |
| **🧪 Cook Test v0.1** | Complete one batch of onions, log data | 1.5 hrs | Note issues for v0.2 |

**Day 3 Exit Criteria:** Can monitor a full cook with logging. Have baseline data.

#### Day 4 Validations (TILLREDA Hack)

| Test | Pass Criteria | Time | If Fail |
|------|---------------|------|---------|
| **Optocoupler passes signal** | LED on input → phototransistor conducts | 15 min | Check orientation, resistor values |
| **Arduino receives serial** | Serial monitor shows commands from Pi | 15 min | Check baud rate, TX/RX swap |
| **Arduino sends to opto** | Scope/LED shows PWM signal | 15 min | Check pin assignment |
| **TILLREDA powers on** | ⚠️ Cooktop turns on when plugged in | 5 min | Check reassembly |
| **Heat level 1 works** | Cooktop responds to level 1 command | 10 min | Debug serial protocol |
| **Heat level 10 works** | Cooktop responds to level 10 command | 5 min | Same |
| **Heat level 20 works** | Cooktop responds to max command | 5 min | Same |
| **Pi → Arduino → TILLREDA** | Python script changes heat level | 15 min | Check serial chain |
| **Closed-loop temp hold** | Set target 150°C, system maintains ±5°C | 30 min | Tune PID |
| **🧪 Cook Test v0.2** | Auto heat + manual stir with prompts | 1.5 hrs | Note prompt timing issues |

**Day 4 Exit Criteria:** Heat is fully automated. System prompts for stirring.

#### Day 5 Validations

| Test | Pass Criteria | Time | If Fail |
|------|---------------|------|---------|
| **Pump motor spins** | 12V applied → pump wheel turns | 5 min | Check L293D wiring |
| **Pump direction control** | Can reverse pump direction | 5 min | Check H-bridge logic |
| **Pump flow rate** | 10 sec run = X ml (measure and record) | 10 min | Note for calibration |
| **Pump calibration** | Command "50ml" delivers 48-52ml | 15 min | Adjust timing constant |
| **Tubing food-safe** | Verify McMaster tubing installed (not stock) | 2 min | Swap tubing |
| **Pump in recipe** | "Add water" command triggers correct pump | 10 min | Check pump ID mapping |
| **🧪 Cook Test v0.3** | Auto heat + auto water + manual stir | 1.5 hrs | Full semi-auto test |

**Day 5 Exit Criteria:** Heat + water automated. Only stirring is manual.

#### Day 6+ Validations (Dynamixel)

| Test | Pass Criteria | Time | If Fail |
|------|---------------|------|---------|
| **U2D2 detected** | `ls /dev/ttyUSB*` shows device | 5 min | Check USB connection |
| **Dynamixel SDK installed** | `import dynamixel_sdk` works | 5 min | pip install |
| **Dynamixel found** | Scan finds ID 1 (or configured ID) | 10 min | Check power, baud rate |
| **Position control works** | Motor moves to commanded position | 10 min | Check operating mode |
| **Torque control works** | Motor applies limited current | 15 min | Set current-based mode |
| **Spatula attached** | Rod + head securely mounted | 5 min | Tighten set screws |
| **Spatula reaches pan** | Full sweep covers pan surface | 10 min | Adjust mount position |
| **Torque limit safe** | Hitting pan edge doesn't damage anything | 10 min | Lower torque limit |
| **🎉 Cook Test v1.0** | Fully automated caramelized onions | 2 hrs | Debug and iterate! |

**Day 6 Exit Criteria:** SHIP IT. Eat onions. Celebrate. 🧅🎉

---

### Detailed Time Breakdown

#### Phase 1: Basic Automated Cooking (18-28 hours)

| Step | Task | Time | Prerequisites | Tools Needed |
|------|------|------|---------------|--------------|
| 1.1 | **Pi 5 Setup** | 1-2 hrs | SD card, Pi 5, power supply | Computer with SD reader |
| | - Flash Raspberry Pi OS (64-bit) | 15 min | | |
| | - First boot, update packages | 30 min | | |
| | - Enable I2C, SPI, Camera interfaces | 15 min | | |
| | - Install Python deps (OpenCV, GPIO libs) | 30 min | | |
| 1.2 | **Frame Construction** | 3-5 hrs | 2020 extrusion, brackets, T-nuts | Allen keys, measuring tape |
| | - Plan layout (sketch dimensions) | 30 min | | |
| | - Cut extrusion if needed | 1 hr | | Hacksaw or miter saw |
| | - Assemble base frame | 1-2 hrs | | |
| | - Add vertical posts for camera/arm | 1 hr | | |
| 1.3 | **TILLREDA Placement** | 30 min | Frame, TILLREDA | None |
| | - Position cooktop in frame | 15 min | | |
| | - Secure/stabilize | 15 min | | |
| 1.4 | **Basic Stirring (Servo)** | 2-3 hrs | Servo, PCA9685, jumper wires | Soldering iron (optional) |
| | - Mount servo to frame | 30 min | | |
| | - Wire PCA9685 to Pi (I2C) | 30 min | | |
| | - Wire servo to PCA9685 | 15 min | | |
| | - Test with Python script | 1 hr | | |
| | - Attach paddle/spoon | 30 min | | |
| 1.5 | **Temperature Sensing** | 2-3 hrs | MAX31855, thermocouple, MLX90640 | Soldering iron |
| | - Solder headers to MAX31855 | 30 min | | |
| | - Wire thermocouple to MAX31855 | 15 min | | |
| | - Wire MAX31855 to Pi (SPI) | 30 min | | |
| | - Connect MLX90640 thermal cam (I2C) | 30 min | | |
| | - Test + calibrate readings | 1 hr | | |
| 1.6 | **Weight Sensing** | 1.5-2 hrs | Load cell, HX711 | Soldering iron |
| | - Wire load cell to HX711 | 30 min | | |
| | - Wire HX711 to Pi GPIO | 15 min | | |
| | - Calibrate with known weights | 45 min | | |
| 1.7 | **Liquid Dispensing** | 3-4 hrs | Pumps, L293D, tubing | Wire strippers |
| | - Mount pumps to frame | 30 min | | |
| | - Wire L293D motor driver | 30 min | | |
| | - Connect pumps to L293D | 30 min | | |
| | - Run food-safe tubing | 1 hr | | |
| | - Test flow rates, calibrate | 1 hr | | |
| 1.8 | **Vision System** | 2-3 hrs | HQ Camera, lens, magic arms | None |
| | - Mount HQ camera on magic arm | 30 min | | |
| | - Mount thermal camera on magic arm | 30 min | | |
| | - Connect ribbon cables to Pi | 15 min | | |
| | - Position and focus cameras | 30 min | | |
| | - Test capture + streaming | 1 hr | | |
| 1.9 | **Safety Systems** | 1-1.5 hrs | E-stop button, wire | Wire strippers |
| | - Mount E-stop button | 15 min | | |
| | - Wire to Pi GPIO (interrupt) | 30 min | | |
| | - Test emergency stop logic | 30 min | | |
| 1.10 | **Software Integration** | 4-6 hrs | All above working | None |
| | - Create unified control class | 2 hrs | | |
| | - Test all subsystems together | 1-2 hrs | | |
| | - Basic recipe runner (hardcoded) | 1-2 hrs | | |

#### Phase 2.5: TILLREDA PWM Hack (10-16 hours)

> ⚠️ **MAINS VOLTAGE** - See Safety Plan. Do NOT rush this phase.

| Step | Task | Time | Prerequisites | Tools Needed |
|------|------|------|---------------|--------------|
| 2.5.1 | **Safety Review** | 30 min | None | None |
| | - Read full safety plan | 20 min | | |
| | - Sign off on checklist | 10 min | | |
| 2.5.2 | **Disassembly** | 1-2 hrs | TILLREDA unplugged 5+ min | Screwdrivers |
| | - Remove outer case screws | 15 min | | |
| | - Photograph all connections | 15 min | | |
| | - Identify control board + power board | 30 min | | |
| | - Locate serial communication lines | 30 min | | |
| 2.5.3 | **Serial Protocol Analysis** | 1-2 hrs | Logic analyzer (optional) | Multimeter |
| | - Identify TX/RX/GND pins | 30 min | | |
| | - Verify 9600 baud, 8N1 | 30 min | | |
| | - Document message format | 1 hr | | |
| 2.5.4 | **Build Isolation Circuit** | 2-3 hrs | Arduino, 4N35, resistors, PCB | Soldering iron |
| | - Breadboard prototype first | 1 hr | | |
| | - Test optocoupler operation | 30 min | | |
| | - Solder permanent circuit | 1-1.5 hrs | | |
| 2.5.5 | **Program Arduino** | 2-4 hrs | Arduino IDE | Computer |
| | - Study Hackaday project code | 1 hr | | |
| | - Implement PWM control | 1-2 hrs | | |
| | - Add serial command interface | 1 hr | | |
| 2.5.6 | **Bench Test (Unplugged)** | 1-2 hrs | All above | Oscilloscope (optional) |
| | - Verify Arduino → opto → serial | 1 hr | | |
| | - Test all power levels (0-20) | 30 min | | |
| | - Debug any issues | 30 min | | |
| 2.5.7 | **Integration Test (Mains)** | 2-3 hrs | Someone else present! | Fire extinguisher nearby |
| | - Final safety check | 15 min | | |
| | - Connect circuit to TILLREDA | 30 min | | |
| | - First powered test (stand back) | 30 min | | |
| | - Test power level control | 1 hr | | |
| | - Document results | 30 min | | |
| 2.5.8 | **Pi Integration** | 2-3 hrs | Pi, Arduino, 3.5mm cables | None |
| | - Connect Pi GPIO → Arduino | 30 min | | |
| | - Write Python control library | 1-1.5 hrs | | |
| | - Test closed-loop temperature control | 1 hr | | |

#### Phase 2: Torque-Controlled Stirring (12-18 hours)

| Step | Task | Time | Prerequisites | Tools Needed |
|------|------|------|---------------|--------------|
| 2.1 | **Dynamixel Mount Design** | 2-3 hrs | Dynamixel in hand, frame | Calipers, pencil |
| | - Measure Dynamixel dimensions | 30 min | | |
| | - Design mount position on frame | 1 hr | | |
| | - Fabricate/print mount bracket | 1-1.5 hrs | | 3D printer or drill |
| 2.2 | **U2D2 Communication Test** | 1-2 hrs | U2D2, USB cable | None |
| | - Install Dynamixel SDK on Pi | 30 min | | |
| | - Connect U2D2 via USB | 15 min | | |
| | - Scan for Dynamixel, verify ID | 30 min | | |
| | - Test basic position control | 30 min | | |
| 2.3 | **DIY Power Wiring** | 1-1.5 hrs | 12V PSU, JST connectors, fuse | Soldering iron, crimper |
| | - Wire 12V to Dynamixel power pins | 30 min | | |
| | - Add inline 5A fuse | 15 min | | |
| | - Test power delivery | 30 min | | |
| 2.4 | **Spatula Assembly** | 1-2 hrs | SS rod, spatula, adapter | See Adapter Research |
| | - Choose adapter approach (A/B/C/D) | 15 min | | |
| | - Assemble adapter | 30 min-1 hr | | Depends on approach |
| | - Attach SS rod to adapter | 15 min | | |
| | - Attach spatula head to rod | 15 min | | Set screw or epoxy |
| 2.5 | **Torque Control Software** | 4-6 hrs | All above working | None |
| | - Study Dynamixel SDK docs | 1 hr | | |
| | - Implement current-based position mode | 1-2 hrs | | |
| | - Tune torque limits for scraping | 1-2 hrs | | |
| | - Integrate with main control system | 1 hr | | |
| 2.6 | **Fond Detection (Advanced)** | 4-8 hrs | Vision + torque working | None |
| | - Train/test vision model for browning | 2-4 hrs | | |
| | - Implement torque feedback sensing | 1-2 hrs | | |
| | - Fuse vision + torque signals | 1-2 hrs | | |

### Recommended Build Schedule

#### Option A: Full-Time (5-6 days)

**Day 1 (8 hrs): Foundation**
- [ ] 1.1 Pi Setup (1.5 hrs)
- [ ] 1.2 Frame Construction (4 hrs)
- [ ] 1.3 TILLREDA Placement (0.5 hrs)
- [ ] 1.5 Temperature Sensing (2 hrs) - thermocouple + thermal cam

**Day 2 (8 hrs): Sensors + Vision**
- [ ] 1.5 cont. - calibrate temp sensors (0.5 hrs)
- [ ] 1.6 Weight Sensing (1.5 hrs)
- [ ] 1.8 Vision System (2.5 hrs)
- [ ] 1.9 Safety Systems (1 hr)
- [ ] 1.10 Basic monitoring software (2.5 hrs) - display temps, log data

**Day 3 (6 hrs): Software + First Test**
- [ ] 1.10 cont. - temperature graphing, alerts (2 hrs)
- [ ] Write "stir now" detection logic (2 hrs)
- [ ] 🧪 **COOK TEST v0.1** (2 hrs) - Observer mode, manual everything

**Day 4 (8 hrs): TILLREDA Hack** ⚠️
- [ ] 2.5.1-2.5.4 Safety + Disassembly + Circuit (5 hrs)
- [ ] 2.5.5-2.5.8 Program + Test + Pi Integration (3 hrs)
- [ ] 🧪 **COOK TEST v0.2** (evening) - Coached mode, auto heat + "stir now" prompts

**Day 5 (8 hrs): Pumps + Semi-Auto**
- [ ] 1.7 Liquid Dispensing (3.5 hrs)
- [ ] Integrate pump into recipe logic (1.5 hrs)
- [ ] 🧪 **COOK TEST v0.3** (2 hrs) - Semi-auto: heat + pump, manual stir
- [ ] Buffer/debugging (1 hr)

**Day 6+ (when Dynamixel arrives): Full Auto**
- [ ] 2.1-2.3 Dynamixel Mount + Comms + Power (3.5 hrs)
- [ ] 2.4 Spatula Assembly (1.5 hrs)
- [ ] 2.5 Torque Control Software (2.5 hrs)
- [ ] 🎉 **COOK TEST v1.0** (1-2 hrs) - Fully automated caramelized onions!

#### Option B: Weekend Hobby (6 weekends)

<details>
<summary>Click to expand weekend schedule</summary>

**Weekend 1 (8 hrs): Foundation**
- [ ] 1.1 Pi Setup (1.5 hrs)
- [ ] 1.2 Frame Construction (4 hrs)
- [ ] 1.3 TILLREDA Placement (0.5 hrs)
- [ ] 1.4 Basic Stirring (2 hrs)

**Weekend 2 (8 hrs): Sensors + Dispensing**
- [ ] 1.5 Temperature Sensing (2.5 hrs)
- [ ] 1.6 Weight Sensing (1.5 hrs)
- [ ] 1.7 Liquid Dispensing (3.5 hrs)
- [ ] Buffer for debugging (0.5 hrs)

**Weekend 3 (8 hrs): Vision + Safety + Software**
- [ ] 1.8 Vision System (2.5 hrs)
- [ ] 1.9 Safety Systems (1 hr)
- [ ] 1.10 Software Integration (4.5 hrs)

**Weekend 4 (8 hrs): TILLREDA Hack** ⚠️
- [ ] 2.5.1-2.5.4 Safety + Disassembly + Circuit (5 hrs)
- [ ] 2.5.5-2.5.6 Program + Bench Test (3 hrs)

**Weekend 5 (6 hrs): TILLREDA Integration + Dynamixel**
- [ ] 2.5.7-2.5.8 Mains Test + Pi Integration (4 hrs)
- [ ] 2.1-2.2 Dynamixel Mount + Comms (2 hrs)

**Weekend 6 (6 hrs): Torque Stirring + First Cook**
- [ ] 2.3-2.4 Power + Spatula Assembly (2.5 hrs)
- [ ] 2.5 Torque Control Software (2.5 hrs)
- [ ] 🎉 **FIRST COOK TEST: Caramelized Onions** (1 hr)

</details>

---

## Assembly Progress

### Phase 1: Basic Automated Cooking (Parts arriving Jan 27-30)

| Step | Description | Status | Date Started | Date Completed | Notes |
|------|-------------|--------|--------------|----------------|-------|
| 1.1 | Pi 5 setup + OS install | Not Started | | | Adafruit order |
| 1.2 | Frame construction (2020 extrusion) | Not Started | | | Amazon order |
| 1.3 | TILLREDA integration | Not Started | | | IKEA - arrives Jan 30 |
| 1.4 | Basic stirring (DS3225 servo) | Not Started | | | Amazon order |
| 1.5 | Temperature sensing (thermocouple + thermal cam) | Not Started | | | Adafruit order |
| 1.6 | Weight sensing (load cell + HX711) | Not Started | | | Amazon order |
| 1.7 | Liquid dispensing (peristaltic pumps) | Not Started | | | Adafruit + McMaster tubing |
| 1.8 | Vision system (HQ Camera + MLX90640) | Not Started | | | Adafruit order |
| 1.9 | Safety systems (E-stop) | Not Started | | | Amazon order |
| 1.10 | Phase 1 software integration | Not Started | | | Python control stack |

### Phase 2: Torque-Controlled Stirring (Parts arriving Feb-March)

| Step | Description | Status | Date Started | Date Completed | Notes |
|------|-------------|--------|--------------|----------------|-------|
| 2.1 | Dynamixel XM430 mount design | Not Started | | | Waiting for actuator |
| 2.2 | U2D2 + Pi communication test | Not Started | | | ROBOTIS order |
| 2.3 | DIY power workaround (while waiting for Power Hub) | Not Started | | | See Workarounds section |
| 2.4 | Spatula assembly (silicone + stainless shaft) | Not Started | | | See Spatula Adapter Research below |
| 2.5 | Torque control software | Not Started | | | Dynamixel SDK |
| 2.6 | Fond detection (vision + torque fusion) | Not Started | | | Advanced feature |

#### Spatula Adapter Research (Step 2.4)

**Goal:** Connect 6mm stainless steel rod to Dynamixel XM430-W350-T output shaft.

**Parts on hand:**
- 2× 304 SS Rod 6mm × 1ft (McMaster-Carr #2)
- Silicone spatula sets (Amazon #3)
- Dynamixel XM430-W350-T (ROBOTIS order - arriving early Feb)

**Decision: Wait for Dynamixel to arrive, then choose approach:**

##### Option A: Modify Included Horn (Simplest if thick enough)
1. Measure the horn that ships with Dynamixel
2. If thick enough (>8mm at center): drill 6mm hole + tap M3 for set screw
3. Tools needed: drill press, 6mm bit, M3 tap, center punch

##### Option B: Shaft Collar + Plate (No modification, reversible)
```
[Dynamixel] → [Stock Horn] → [Small Plate] → [6mm Shaft Collar] → [SS Rod] → [Spatula]
```
- Bolt small aluminum plate to horn's existing screw holes
- Attach 6mm shaft collar (with set screw) to plate
- Search Amazon: "6mm shaft collar clamp aluminum" (~$3)
- Fully reversible, no drilling

##### Option C: Buy HNX430-C101 Clamping Horn (~$15)
- [Generation Robots link](https://www.generationrobots.com/en/403965-hnx430-c101-structural-component-for-dynamixel-x430.html)
- Official ROBOTIS part, may have more material to drill
- Risk: if drilling fails, $15 + wait time lost

##### Option D: 3D Print Custom Adapter
**Existing designs:**
- [Dynamixel XM Servo Horn](https://www.thingiverse.com/thing:5798267) - Thingiverse, by MTL_Research (Imperial College)
- [Dynamixel X Servo Horn](https://www.thingiverse.com/thing:5146329) - Thingiverse, by AdLab
- [Customizable Shaft Buddy](https://www.printables.com/model/36584) - Parametric coupler generator (OpenSCAD)

**CAD resources for custom design:**
- [XM430-W350-R CAD model](https://grabcad.com/library/dynamixel-xm430-w350-r-1) - GrabCAD
- [Official ROBOTIS e-manual](https://emanual.robotis.com/docs/en/dxl/x/xm430-w350/) - has .stp and .dwg downloads
- [GrabCAD Dynamixel collection](https://grabcad.com/library/tag/dynamixel)

**Recommendation:** Try Option B (shaft collar) first - zero risk, cheap, reversible. If that's too wobbly or has too much play, move to Option A or D.

### Phase 2.5: TILLREDA PWM Hack (Parts arriving late Jan)

> **Critical for autonomous cooking** - Without this, heat control requires manual button presses.

| Step | Description | Status | Date Started | Date Completed | Notes |
|------|-------------|--------|--------------|----------------|-------|
| 2.5.1 | ⚠️ **SAFETY REVIEW** | Not Started | | | Read safety plan FIRST |
| 2.5.2 | Disassemble TILLREDA (unplugged!) | Not Started | | | Document internals |
| 2.5.3 | Identify serial lines (control→power PCB) | Not Started | | | 9600 baud, 8N1, LSB-first |
| 2.5.4 | Build optocoupler isolation circuit | Not Started | | | 4N35 + resistors |
| 2.5.5 | Program Arduino Nano (PWM control) | Not Started | | | See Hackaday project |
| 2.5.6 | Bench test (cooktop unplugged) | Not Started | | | Verify serial comms |
| 2.5.7 | Integration test (with mains) | Not Started | | | ⚠️ Maximum caution |
| 2.5.8 | Pi GPIO → Arduino → TILLREDA | Not Started | | | Closed-loop ready |

### Phase 3: Future Enhancements

| Step | Description | Status | Notes |
|------|-------------|--------|-------|
| 3.1 | Multi-DOF arm upgrade | Not Started | CubeMars or additional Dynamixels |
| 3.2 | Recipe DSL + Claude integration | Not Started | Natural language cooking |
| 3.3 | Ingredient hopper system | Not Started | Automated dispensing |

---

## Component Testing Log

### Raspberry Pi 5
| Date | Test | Result | Notes |
|------|------|--------|-------|
| | Boot test | | |
| | GPIO test | | |
| | I2C test | | |
| | Camera test | | |

### Peristaltic Pumps
| Pump # | Date | Test | Result | Notes |
|--------|------|------|--------|-------|
| 1 | | Flow rate | | |
| 2 | | Flow rate | | |
| 3 | | Flow rate | | |
| 4 | | Flow rate | | |

### Temperature Sensors
| Date | Test | Result | Notes |
|------|------|--------|-------|
| | Thermocouple accuracy | | |
| | Thermal camera calibration | | |

### Servos (Phase 1)
| Servo | Date | Test | Result | Notes |
|-------|------|------|--------|-------|
| DS3225 (basic stirring) | | Torque test | | |
| MG996R #1 | | Position test | | |

### Dynamixel XM430 (Phase 2)
| Date | Test | Result | Notes |
|------|------|--------|-------|
| | U2D2 communication | | Connect to Pi via USB |
| | Position control mode | | Basic movement |
| | Torque control mode | | Current-based control |
| | Torque limit tuning | | Find right force for scraping |
| | Heat tolerance | | Extended operation near cooktop |

---

## Issues & Repairs

| Date | Component | Issue | Resolution | Cost | Downtime |
|------|-----------|-------|------------|------|----------|
| | | | | | |

---

## Lessons Learned

### What Worked Well
-

### What Didn't Work
-

### Would Do Differently
-

---

## Recipe Test Log

| Date | Recipe | Result | Issues | Cook Time | Notes |
|------|--------|--------|--------|-----------|-------|
| | | | | | |

---

---

## Order History

| Date | Vendor | Order # | Total | Status |
|------|--------|---------|-------|--------|
| 2026-01-25 | Adafruit | - | $517.90 | Ordered, ships Jan 27 |
| 2026-01-25 | Amazon #1 | - | $618.96 | Ordered (personal card - expense pending) |
| 2026-01-25 | IKEA | 488433982 | $92.65 | Ordered, delivers Jan 30 |
| 2026-01-25 | McMaster-Carr #1 | 0125DMORRILL | $42.01 | Ordered, delivers Wed Jan 29 |
| 2026-01-25 | ROBOTIS | 184532 | $386.19 | Ordered (Power Hub delayed to late March) |
| 2026-01-25 | Amazon #2 | - | ~$76.92 | Ordered - TILLREDA hack kit |
| 2026-01-25 | Amazon #3 | - | $177.11 | Ordered - Caramelized onions test + organizer |
| 2026-01-25 | McMaster-Carr #2 | 0125DMORRILL | $30.97 | Ordered, delivers Wed Jan 29 |
| 2026-01-27 | Amazon #4 | - | ~$20 | Ordered - FINDAT color stickers |
| **Total Ordered** | | | **~$1,962.71** | |

---

## 📦 Receiving Checklist

### Organization System

**Color-coded subsystems** - Label each part with subsystem + name:

| Color | Subsystem | Bin # |
|-------|-----------|-------|
| 🔴 | CONTROL (Pi, power, SD, breadboard) | 1 |
| 🟠 | HEATING (TILLREDA, Arduino, optocouplers) | 2 |
| 🟡 | STIRRING (Dynamixel, servos, spatula) | 3 |
| 🟢 | SENSING (cameras, thermocouples, load cells) | 4 |
| 🔵 | DISPENSING (pumps, tubing, drivers) | 5 |
| 🟣 | FRAME (extrusion, brackets, mounts) | 6 |
| ⚫ | SAFETY (E-stop, fuses) | 7 |
| ⚪ | TOOLS (soldering, multimeter, etc.) | 8 |

### Receiving Workflow

**When a package arrives:**

1. 📸 **Take a photo** of the part (or packaging/label)
2. 💬 **Share with Claude** - drop image in chat
3. 🔍 **Claude identifies** - cross-references with orders
4. 🏷️ **Get label info:**
   - Label format: `[EMOJI] SUBSYSTEM - Item Name`
   - Which bin number
   - Any special handling notes
5. ✅ **Claude updates BUILD-LOG** - marks received, notes issues
6. 📦 **You label & store** - into correct bin

**Example:**
```
You: [photo of small circuit board]
Claude: That's your MAX31855 Thermocouple Amplifier (Adafruit).
        Label: "🟢 SENSING - MAX31855 Amp"
        Bin: 4
        Note: Needs headers soldered.
        ✓ Marked received in BUILD-LOG.
```

**Quick Reference (print this!):** See [LABEL-GUIDE.md](./LABEL-GUIDE.md)

---

### Week 1: Jan 27-31, 2026

#### Adafruit (Expected: Jan 27-28)
| ✓ | Item | Qty | Subsystem | Bin | Notes |
|---|------|-----|-----------|-----|-------|
| ✅ | Raspberry Pi 5 8GB | 1 | 🔴 CONTROL | 1 | Main controller — received Jan 30 |
| ✅ | Peristaltic Pump 12V | 6 | 🔵 DISPENSING | 5 | 4 + 2 spares — received Jan 30 |
| ✅ | L293D Motor Driver | 1 | 🔵 DISPENSING | 5 | Pump control — received Jan 30 |
| ✅ | Silicone Tubing 1m | 1 | 🔵 DISPENSING | 5 | Spare — received Jan 30 |
| ✅ | PCA9685 PWM Driver | 1 | 🟡 STIRRING | 3 | Servo control — received Jan 30 |
| ✅ | Pi 5 Camera Cable 500mm | 3 | 🟢 SENSING | 4 | 1 + 2 spares — received Jan 30 |
| ✅ | STEMMA QT Cable 100mm | 5 | 🟢 SENSING | 4 | I2C cables — received Jan 30 |
| ✅ | MLX90640 Thermal Cam | 1 | 🟢 SENSING | 4 | ⚠️ Fragile - $75 — received Jan 30 |
| ✅ | K-Type Thermocouple | 3 | 🟢 SENSING | 4 | 1 + 2 spares — received Jan 30 |
| ✅ | MAX31855 Amp | 1 | 🟢 SENSING | 4 | Thermocouple interface — received Jan 30 |
| ✅ | Adafruit KB2040 (BONUS) | 1 | 🔴 CONTROL | 1 | RP2040 board - unexpected bonus! — received Jan 30 |
| ✅ | HQ Camera 12.3MP | 1 | 🟢 SENSING | 4 | ⚠️ Fragile - $55 — received Jan 30 |
| ✅ | 6mm Wide Angle Lens | 1 | 🟢 SENSING | 4 | CS-mount — received Jan 30 |

#### Amazon #1 (Expected: Jan 27-29)
| ✓ | Item | Qty | Subsystem | Bin | Notes |
|---|------|-----|-----------|-----|-------|
| ☐ | ANNIMOS 25kg Servo | 1 | 🟡 STIRRING | 3 | Basic stirring |
| ✅ | MG996R Servo 4-pack | 1 | 🟡 STIRRING | 3 | Backups — received Jan 28 |
| ✅ | Load Cell + HX711 (4 sets) | 1 | 🟢 SENSING | 4 | Weight sensing — received Jan 28 |
| ✅ | K-Type Thermocouple TP20 | 1 | 🟢 SENSING | 4 | Backup probe — received Jan 28 |
| ✅ | 12V 5A Power Supply | 1 | 🔴 CONTROL | 1 | ALITOVE 12V 5A — received Jan 28 |
| ✅ | CanaKit 45W USB-C PSU | 1 | 🔴 CONTROL | 1 | Pi 5 power — received Jan 28 (got 2, 1 spare) |
| ☐ | 2020 Extrusion 10pk (48") | 1 | 🟣 FRAME | 6 | ⚠️ Large/heavy |
| ✅ | 2020 Corner Bracket Kit | 1 | 🟣 FRAME | 6 | 20 sets — received Jan 28 |
| ✅ | T-Slot Nut Kit (200pcs) | 1 | 🟣 FRAME | 6 | Small parts — received Jan 28 |
| ✅ | E-Stop Button | 1 | ⚫ SAFETY | 7 | Critical — received Jan 28 |
| ☐ | SanDisk 64GB MicroSD | 1 | 🔴 CONTROL | 1 | A2 rating |
| ✅ | Dupont Jumper Wires | 1 | 🔴 CONTROL | 1 | 120pcs — received Jan 28 |
| ✅ | Breadboard 3-pack | 1 | 🔴 CONTROL | 1 | ELEGOO — received Jan 28 |
| ☐ | --- **TOOLS** --- | | ⚪ TOOLS | 8 | |
| ✅ | ANBES Soldering Iron Kit | 1 | ⚪ TOOLS | 8 | Received as Plusivo Kit — received Jan 28 |
| ✅ | QuinTech Solder Flux Pen (10ml) | 1 | ⚪ TOOLS | 8 | Add-on/bonus item — received Jan 28 |
| ✅ | PINECIL Soldering Iron | 1 | ⚪ TOOLS | 8 | Pine64 Smart Soldering Iron — received Jan 28 |
| ✅ | AstroAI Multimeter | 1 | ⚪ TOOLS | 8 | DM6000AR TRMS — received Jan 28 |
| ☐ | Wire Stripper/Crimper | 1 | ⚪ TOOLS | 8 | |
| ✅ | Heat Shrink Kit | 1 | ⚪ TOOLS | 8 | Ginsco 580pcs 2:1 — received Jan 28 |
| ✅ | Electrical Tape Set (multi-color) | 1 | ⚪ TOOLS | 8 | Add-on/bonus item — received Jan 28 |
| ✅ | Allen Key Set | 1 | ⚪ TOOLS | 8 | Wiha ErgoStar 22pc SAE+Metric — received Jan 28 |
| ✅ | Allen Key Set #2 | 1 | ⚪ TOOLS | 8 | ELEAD 27pc Ball End + T-handle — received Jan 28 |
| ✅ | Screwdriver Set | 1 | ⚪ TOOLS | 8 | Eklind PSD — received Jan 28 |
| ☐ | Flush Cutters | 1 | ⚪ TOOLS | 8 | |
| ☐ | Helping Hands | 1 | ⚪ TOOLS | 8 | |
| ✅ | Zip Ties | 1 | ⚪ TOOLS | 8 | ANDSON 400pcs (4/6/8/12") — received Jan 28 |
| ☐ | Anti-Static Wrist Strap | 1 | ⚪ TOOLS | 8 | |
| ☐ | Electronics Organizer | 1 | ⚪ TOOLS | 8 | |

#### Amazon #2 - TILLREDA Hack (Expected: Jan 28-30)
| ✓ | Item | Qty | Subsystem | Bin | Notes |
|---|------|-----|-----------|-----|-------|
| ✅ | ELEGOO Nano Board 3-Pack | 1 | 🟠 HEATING | 2 | Arduino-compatible — received Jan 28 |
| ☐ | 4N35 Optocoupler 10-Pack | 1 | 🟠 HEATING | 2 | Isolation |
| ✅ | 3.5mm Panel Mount 20-Pack | 1 | 🟠 HEATING | 2 | Connectors — received Jan 28 |
| ✅ | 3.5mm Audio Cable 1.5ft | 1 | 🟠 HEATING | 2 | 3-pack — received Jan 28 |
| ☐ | 3.5mm Audio Cable 3ft | 1 | 🟠 HEATING | 2 | 3-pack |
| ☐ | Resistor Kit | 1 | 🟠 HEATING | 2 | |
| ✅ | PCB Prototype Boards | 1 | 🟠 HEATING | 2 | 32pcs — received Jan 28 |

#### Amazon #3 - Caramelized Onions Test (Expected: Jan 28-30)
| ✓ | Item | Qty | Subsystem | Bin | Notes |
|---|------|-----|-----------|-----|-------|
| ✅ | U-Taste Silicone Spatula Set (Red) | 1 | 🟡 STIRRING | 3 | 600°F heat-resistant — received Jan 28 |
| ✅ | U-Taste Silicone Spatula Set (Black) | 1 | 🟡 STIRRING | 3 | Backup set — received Jan 28 |
| ☐ | FOMITO 11" Magic Arm + Clamp | 1 | 🟣 FRAME | 6 | HQ camera mount |
| ✅ | ChromLives 11" Magic Arm + Clamp | 1 | 🟣 FRAME | 6 | Thermal camera mount — received Jan 28 |
| ☐ | 18 AWG Inline Fuse Holder Kit | 1 | ⚫ SAFETY | 7 | 5A for Dynamixel |
| ☐ | JST Servo Connector Kit | 2 | 🟡 STIRRING | 3 | Dynamixel power wiring |
| ✅ | IRIS USA 44-Drawer Organizer | 1 | ⚪ TOOLS | 8 | Small parts storage — received Jan 28 |

#### Amazon #4 - Organization (Expected: Jan 29-31)
| ✓ | Item | Qty | Subsystem | Bin | Notes |
|---|------|-----|-----------|-----|-------|
| ☐ | FINDAT 1" Color Dot Stickers (350 pcs) | 2 | ⚪ TOOLS | 8 | For labeling parts by subsystem |

#### McMaster-Carr #1 & #2 (Expected: Jan 29)
| ✓ | Item | Qty | Subsystem | Bin | Notes |
|---|------|-----|-----------|-----|-------|
| ✅ | FDA Silicone Tubing 10ft | 2 | 🔵 DISPENSING | 5 | 20ft total — received Jan 28 |
| ✅ | 304 SS Rod 6mm × 1ft | 2 | 🟡 STIRRING | 3 | Spatula shaft + spare — received Jan 28 |

#### IKEA (Expected: Jan 30)
| ✓ | Item | Qty | Subsystem | Bin | Notes |
|---|------|-----|-----------|-----|-------|
| ☐ | TILLREDA Induction Cooktop | 1 | 🟠 HEATING | 2 | ⚠️ Do not hack until safety review |

---

### Week 2-4: Feb 2026

#### ROBOTIS (Expected: Early Feb, Power Hub Late March)
| ✓ | Item | Qty | Subsystem | Bin | Notes |
|---|------|-----|-----------|-----|-------|
| ☐ | Dynamixel XM430-W350-T | 1 | 🟡 STIRRING | 3 | ⚠️ $310 - handle carefully |
| ☐ | U2D2 USB Adapter | 1 | 🟡 STIRRING | 3 | |
| ☐ | U2D2 Power Hub Board Set | 1 | 🟡 STIRRING | 3 | ⚠️ Delayed to late March |

---

### Not Yet Ordered

> ✅ **All caramelized onions test case parts have been ordered!**

#### Future Orders (As Needed)
| ✓ | Item | Qty | Subsystem | Notes |
|---|------|-----|-----------|-------|
| ☐ | 3D Printed Dynamixel Adapter | 1 | 🟡 STIRRING | Custom design - after Dynamixel arrives |
| ☐ | Stackable Parts Bins (8) | 1 | - | For subsystem storage (have 44-drawer for now) |

---

### Damage/Issue Log

| Date | Item | Issue | Resolution | Cost |
|------|------|-------|------------|------|
| | | | | |

---

## Still Need to Order

| Item | Est. Price | Source | Priority | Notes |
|------|------------|--------|----------|-------|
| 6mm Shaft Collar (aluminum) | ~$3 | Amazon | Medium | For Option B adapter - order when Dynamixel arrives |
| Small aluminum plate | ~$5 | Amazon/McMaster | Medium | If using Option B - or cut from scrap |
| HNX430-C101 Clamping Horn | ~$15 | Generation Robots | Low | Only if Option A/B fail |
| **Subtotal** | **~$3-23** | | | Depends on adapter approach chosen |

> ✅ **All major parts for caramelized onions test case have been ordered!**
>
> ⏳ **Spatula adapter:** Wait for Dynamixel (early Feb), inspect included horn, then decide approach. See "Spatula Adapter Research" in Phase 2 section for full options.

### Amazon Order #4 (Organization Supplies)
**Order Date**: January 27, 2026
**Order Total**: ~$20
**Payment**: Personal Amazon

| Item | Price | Qty | Status | Notes |
|------|-------|-----|--------|-------|
| FINDAT 10 Colors 1" Vinyl Dot Stickers (350 pcs) | ~$10 | 2 | Ordered | Waterproof, writable, removable |
| **Total** | | | **~$20** | |

**Notes**:
- For color-coding parts by subsystem during receiving
- Colors: red, orange, yellow, green, blue, purple, pink, black, white, gray (using 8 of 10)

---

### Optional Future Orders
| Item | Est. Price | Source | Notes |
|------|------------|--------|-------|
| MyActuator RMD-X6 (backup actuator) | ~$280 | Amazon | If Dynamixel doesn't work out |
| FLIR Lepton (thermal upgrade) | ~$280 | SparkFun | Higher-res than MLX90640 |
| Additional Dynamixels (multi-DOF) | ~$620 | ROBOTIS | 2× more for tilt + extension |
| ~~TILLREDA hack kit (Arduino + PCB)~~ | ~~$50~~ | ~~Amazon~~ | ✅ **ORDERED** - Amazon #2 |
| ~~Silicone spatulas~~ | ~~$45~~ | ~~Amazon~~ | ✅ **ORDERED** - Amazon #3 |
| ~~SS rod for spatula~~ | ~~$10~~ | ~~McMaster~~ | ✅ **ORDERED** - McMaster #2 |
| ~~JST connectors + fuses~~ | ~~$48~~ | ~~Amazon~~ | ✅ **ORDERED** - Amazon #3 |
| ~~Magic arms for cameras~~ | ~~$45~~ | ~~Amazon~~ | ✅ **ORDERED** - Amazon #3 |

---

*Last Updated: January 25, 2026 (Added TDD validation checkpoints - 40+ small wins on the path to robot onions)*
