# Robot Chef Label Guide

> Print this page and keep at your receiving station.

---

## Bin Assignment

| Bin | Color | Subsystem | Example Parts |
|:---:|:-----:|-----------|---------------|
| **1** | :red_circle: | **CONTROL** | Pi 5, power supplies, SD card, breadboard, jumper wires |
| **2** | :orange_circle: | **HEATING** | TILLREDA, Arduino Nano, optocouplers, resistors, PCB |
| **3** | :yellow_circle: | **STIRRING** | Dynamixel, servos, U2D2, spatulas, SS rods, JST connectors |
| **4** | :green_circle: | **SENSING** | Cameras, thermal cam, thermocouples, MAX31855, load cells, HX711 |
| **5** | :blue_circle: | **DISPENSING** | Peristaltic pumps, L293D driver, silicone tubing |
| **6** | :purple_circle: | **FRAME** | 2020 extrusion, brackets, T-nuts, magic arms |
| **7** | :black_circle: | **SAFETY** | E-stop button, fuse holders, fuses |
| **8** | :white_circle: | **TOOLS** | Soldering iron, multimeter, wire strippers, organizer |

---

## Label Format

```
[EMOJI] SUBSYSTEM - Item Name
```

**Examples:**
- `🔴 CONTROL - Raspberry Pi 5`
- `🟠 HEATING - Arduino Nano`
- `🟡 STIRRING - Dynamixel XM430`
- `🟢 SENSING - MLX90640 Thermal Cam`
- `🔵 DISPENSING - Peristaltic Pump #1`
- `🟣 FRAME - 2020 Corner Brackets`
- `⚫ SAFETY - E-Stop Button`
- `⚪ TOOLS - Soldering Iron Kit`

---

## Receiving Checklist

For each package:

- [ ] Open immediately
- [ ] Photograph contents
- [ ] Check for damage
- [ ] Share photo with Claude for identification
- [ ] Write label (use label maker or tape + Sharpie)
- [ ] Place in correct bin
- [ ] Claude marks received in BUILD-LOG

---

## Special Handling

| Part | Warning |
|------|---------|
| MLX90640 Thermal Cam | Fragile - $75 - handle gently |
| HQ Camera | Fragile - $55 - don't touch sensor |
| Dynamixel XM430 | Expensive - $310 - keep in box until ready |
| TILLREDA | Do NOT disassemble until safety review complete |
| Thermocouples | Thin wires - avoid kinking |
| Camera ribbon cables | Fragile - ordered spares for a reason |

---

## If Something's Wrong

| Issue | Action |
|-------|--------|
| Damaged in shipping | Photograph damage, contact vendor, note in BUILD-LOG |
| Wrong item | Check order, contact vendor, set aside |
| Missing item | Check packing slip, contact vendor |
| DOA (dead on arrival) | Will discover during testing, note in BUILD-LOG |

---

*Print date: ____________*
