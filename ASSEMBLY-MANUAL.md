# Robot Chef Assembly Manual

> Step-by-step guide to building your DIY automated cooking system.

**Estimated Build Time**: 8-12 hours over multiple sessions
**Difficulty**: Intermediate (some soldering and basic electronics required)

---

## Before You Start

### Prerequisites
- [ ] All parts from [SHOPPING-LIST.md](./SHOPPING-LIST.md) received
- [ ] Basic soldering skills
- [ ] Familiarity with Raspberry Pi
- [ ] Python basics

### Tools Required
- Soldering iron + solder
- Wire strippers
- Multimeter
- Allen key set (metric, for 2020 extrusion)
- Screwdriver set (Phillips + flathead)
- Needle-nose pliers
- Heat shrink tubing + heat gun (or lighter)
- Zip ties
- Safety glasses

### Safety Warnings

**ELECTRICITY**: The IKEA TILLREDA runs on mains voltage (120V). Never work on it while plugged in. If you're not comfortable with mains voltage, skip the TILLREDA hack and control it manually.

**HEAT**: Induction cooktops get HOT. Keep cables away from heat sources. Use heat-resistant materials near the cooking surface.

**FOOD SAFETY**: Replace stock pump tubing with FDA-compliant tubing before using with food.

---

## Phase 1: Raspberry Pi Setup

**Time**: 30-45 minutes
**Parts**: Pi 5, power supply, microSD card

### Step 1.1: Flash the SD Card

1. Download [Raspberry Pi Imager](https://www.raspberrypi.com/software/) on your computer
2. Insert the microSD card
3. Open Pi Imager and select:
   - **Device**: Raspberry Pi 5
   - **OS**: Raspberry Pi OS (64-bit)
   - **Storage**: Your SD card
4. Click the gear icon for advanced settings:
   - Set hostname: `robotchef`
   - Enable SSH
   - Set username/password
   - Configure WiFi
5. Write the image

### Step 1.2: First Boot

1. Insert SD card into Pi 5
2. Connect to a monitor via micro-HDMI (temporarily)
3. Connect power supply
4. Wait for first boot (2-3 minutes)
5. Note the IP address shown on screen

### Step 1.3: SSH Setup

From your computer:
```bash
ssh pi@robotchef.local
# Or use the IP address: ssh pi@192.168.x.x
```

### Step 1.4: Install Dependencies

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Python tools
sudo apt install -y python3-pip python3-venv git

# Install I2C tools (for sensors)
sudo apt install -y i2c-tools python3-smbus

# Enable I2C and SPI
sudo raspi-config
# Navigate to: Interface Options > I2C > Enable
# Navigate to: Interface Options > SPI > Enable
# Reboot when prompted

# Create project directory
mkdir -p ~/robotchef
cd ~/robotchef

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install Python libraries
pip install adafruit-circuitpython-pca9685
pip install adafruit-circuitpython-servokit
pip install adafruit-circuitpython-max31855
pip install adafruit-circuitpython-mlx90640
pip install adafruit-circuitpython-hx711
pip install RPi.GPIO
pip install opencv-python
pip install picamera2
pip install numpy
```

### Step 1.5: Test I2C

```bash
# Verify I2C is working
sudo i2cdetect -y 1
# Should show empty grid (no devices connected yet)
```

**Checkpoint**: Pi boots, you can SSH in, I2C is enabled.

---

## Phase 2: Frame Construction

**Time**: 1-2 hours
**Parts**: 2020 aluminum extrusion, connectors, T-nuts

### Step 2.1: Plan Your Layout

Design a frame that:
- Holds the cooktop at a comfortable working height
- Provides mounting points for servo arm above the pot
- Has space for electronics enclosure
- Allows camera to view the pot from above

**Suggested dimensions**:
- Base: 60cm x 40cm
- Height: 50cm (above cooktop level)
- Arm mount: Centered above cooktop

### Step 2.2: Cut Extrusion (if needed)

If your extrusion is too long:
1. Measure and mark cut lines
2. Use a hacksaw or miter saw with metal blade
3. File the cut ends smooth
4. Clean aluminum shavings

### Step 2.3: Assemble Frame

1. **Base frame**: Create a rectangular base using corner brackets
2. **Vertical posts**: Attach 4 vertical posts at corners
3. **Top frame**: Connect posts with horizontal rails
4. **Cross supports**: Add diagonal bracing if needed for stability

Tips:
- Use T-nuts and M5 bolts for all connections
- Don't fully tighten bolts until frame is square
- Check squareness with a carpenter's square
- Once aligned, tighten all connections

### Step 2.4: Mount Electronics Enclosure

1. Create a shelf or box for the Pi and electronics
2. Mount away from heat source
3. Ensure ventilation for Pi
4. Plan cable routing paths

**Checkpoint**: Sturdy frame that can support cooktop and arm mechanism.

---

## Phase 3: Heating Integration

**Time**: 30 minutes (basic) or 2+ hours (with hack)
**Parts**: IKEA TILLREDA

### Option A: Basic Integration (Recommended First)

Simply place the TILLREDA on your frame and control it manually. This lets you test everything else before attempting the hack.

1. Position cooktop on frame base
2. Secure with brackets or non-slip pads
3. Route power cord safely away from heat

### Option B: TILLREDA Hack (Advanced)

**WARNING**: This involves mains voltage. Only attempt if experienced with electronics. Proceed at your own risk.

See the detailed guide: [Hackaday.io TILLREDA Project](https://hackaday.io/project/203350-diy-pwm-controlled-ikea-tillreda-induction-cooktop)

Summary:
1. Open the TILLREDA (voids warranty)
2. Identify the serial connection between control and power boards
3. Install custom PCB to intercept serial communication
4. Connect PWM input to 3.5mm jack
5. Connect Pi GPIO to 3.5mm jack
6. Control power level via PWM signal

**Checkpoint**: Cooktop mounted, can heat a pot of water.

---

## Phase 4: Stirring Mechanism

**Time**: 1-2 hours
**Parts**: DS3225 25kg servo, PCA9685 driver, mounting hardware

### Step 4.1: Wire PCA9685

Connect PCA9685 to Pi 5:

| PCA9685 | Pi 5 GPIO |
|---------|-----------|
| VCC | 3.3V (Pin 1) |
| GND | GND (Pin 6) |
| SDA | SDA (Pin 3 / GPIO 2) |
| SCL | SCL (Pin 5 / GPIO 3) |

Connect external power for servos:
| PCA9685 | 12V Supply |
|---------|------------|
| V+ | +12V |
| GND | GND |

**Note**: Servos need external power. Don't try to power them from the Pi!

### Step 4.2: Connect Servo

Connect DS3225 to PCA9685 channel 0:
- Brown wire → GND
- Red wire → V+
- Orange wire → PWM

### Step 4.3: Test Servo

```python
# ~/robotchef/test_servo.py
from adafruit_servokit import ServoKit
import time

# Initialize PCA9685 with 16 channels
kit = ServoKit(channels=16)

# Servo on channel 0
# Adjust pulse width for your servo (typical: 500-2500µs)
kit.servo[0].set_pulse_width_range(500, 2500)

# Test movement
print("Moving to 0°")
kit.servo[0].angle = 0
time.sleep(1)

print("Moving to 90°")
kit.servo[0].angle = 90
time.sleep(1)

print("Moving to 180°")
kit.servo[0].angle = 180
time.sleep(1)

print("Moving to 90°")
kit.servo[0].angle = 90
```

Run:
```bash
cd ~/robotchef
source venv/bin/activate
python test_servo.py
```

### Step 4.4: Mount Servo and Paddle

1. Create or 3D print a servo mount bracket
2. Attach bracket to frame above the pot
3. Create or purchase a heat-resistant paddle/spatula
4. Attach paddle to servo horn
5. Adjust height so paddle reaches into pot

**Checkpoint**: Servo moves on command, paddle can stir in pot.

---

## Phase 5: Temperature Sensing

**Time**: 30-45 minutes
**Parts**: MAX31855 breakout, K-type thermocouple

### Step 5.1: Wire MAX31855

Connect to Pi via SPI:

| MAX31855 | Pi 5 GPIO |
|----------|-----------|
| VIN | 3.3V (Pin 1) |
| GND | GND (Pin 9) |
| CLK | SCLK (Pin 23 / GPIO 11) |
| CS | CE0 (Pin 24 / GPIO 8) |
| DO | MISO (Pin 21 / GPIO 9) |

### Step 5.2: Connect Thermocouple

Attach thermocouple wires to MAX31855 terminal block:
- Red wire → (-) terminal
- Yellow wire → (+) terminal

**Note**: K-type thermocouple color coding: Red = negative, Yellow = positive (counterintuitive!)

### Step 5.3: Test Temperature Reading

```python
# ~/robotchef/test_temp.py
import board
import digitalio
import adafruit_max31855

spi = board.SPI()
cs = digitalio.DigitalInOut(board.D8)  # CE0

thermocouple = adafruit_max31855.MAX31855(spi, cs)

while True:
    temp_c = thermocouple.temperature
    temp_f = temp_c * 9/5 + 32
    print(f"Temperature: {temp_c:.1f}°C / {temp_f:.1f}°F")
    time.sleep(1)
```

### Step 5.4: Mount Thermocouple

Position the thermocouple probe where it can measure:
- Pot contents (immersed in liquid)
- Or pot surface temperature
- Keep cable away from direct heat

**Checkpoint**: Can read accurate temperature from pot.

---

## Phase 6: Weight Sensing (Scale)

**Time**: 30-45 minutes
**Parts**: 5kg load cell, HX711 amplifier

### Step 6.1: Wire HX711

| HX711 | Pi 5 GPIO |
|-------|-----------|
| VCC | 5V (Pin 2) |
| GND | GND (Pin 6) |
| DT (Data) | GPIO 5 (Pin 29) |
| SCK (Clock) | GPIO 6 (Pin 31) |

### Step 6.2: Wire Load Cell to HX711

| Load Cell | HX711 |
|-----------|-------|
| Red | E+ |
| Black | E- |
| White | A- |
| Green | A+ |

### Step 6.3: Test Weight Reading

```python
# ~/robotchef/test_scale.py
import RPi.GPIO as GPIO
from hx711 import HX711

GPIO.setmode(GPIO.BCM)

hx = HX711(dout_pin=5, pd_sck_pin=6)

# Tare (zero) the scale
print("Taring... remove all weight")
input("Press Enter when ready...")
hx.zero()

# Calibration (use known weight)
print("Place a known weight (e.g., 100g)")
input("Press Enter when weight is placed...")
reading = hx.get_raw_data_mean(readings=10)
known_weight = 100  # grams
ratio = reading / known_weight
hx.set_scale_ratio(ratio)

# Read weights
print("Scale calibrated. Reading weights...")
while True:
    weight = hx.get_weight_mean(readings=5)
    print(f"Weight: {weight:.1f}g")
    time.sleep(0.5)
```

### Step 6.4: Mount Load Cell

Options:
- Under the pot (measure total weight)
- Under ingredient containers
- As a separate weighing station

**Checkpoint**: Can measure weight accurately (within 1-2g).

---

## Phase 7: Liquid Dispensing

**Time**: 1-2 hours
**Parts**: 4x peristaltic pumps, L293D driver, 12V supply, tubing

### Step 7.1: Wire L293D

For 2 pumps per L293D chip:

| L293D Pin | Connection |
|-----------|------------|
| 1 (Enable 1) | 5V (always on) or GPIO for speed control |
| 2 (Input 1) | GPIO 17 |
| 3 (Output 1) | Pump 1 (+) |
| 4, 5 (GND) | GND |
| 6 (Output 2) | Pump 1 (-) |
| 7 (Input 2) | GPIO 27 |
| 8 (Vmotor) | +12V |
| 9 (Enable 2) | 5V or GPIO |
| 10 (Input 3) | GPIO 22 |
| 11 (Output 3) | Pump 2 (+) |
| 12, 13 (GND) | GND |
| 14 (Output 4) | Pump 2 (-) |
| 15 (Input 4) | GPIO 23 |
| 16 (Vcc) | 5V |

**Note**: You'll need 2x L293D chips for 4 pumps, or use an L298N module.

### Step 7.2: Test Pump Control

```python
# ~/robotchef/test_pump.py
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

# Pump 1 control pins
IN1 = 17
IN2 = 27

GPIO.setup(IN1, GPIO.OUT)
GPIO.setup(IN2, GPIO.OUT)

def pump_forward(duration):
    """Run pump forward for duration seconds"""
    GPIO.output(IN1, GPIO.HIGH)
    GPIO.output(IN2, GPIO.LOW)
    time.sleep(duration)
    GPIO.output(IN1, GPIO.LOW)
    GPIO.output(IN2, GPIO.LOW)

def pump_backward(duration):
    """Run pump backward for duration seconds"""
    GPIO.output(IN1, GPIO.LOW)
    GPIO.output(IN2, GPIO.HIGH)
    time.sleep(duration)
    GPIO.output(IN1, GPIO.LOW)
    GPIO.output(IN2, GPIO.LOW)

# Test
print("Running pump forward for 2 seconds...")
pump_forward(2)
time.sleep(1)
print("Running pump backward for 2 seconds...")
pump_backward(2)

GPIO.cleanup()
```

### Step 7.3: Replace Tubing (IMPORTANT!)

The stock Adafruit pump tubing is NOT food-safe. Replace with FDA-compliant silicone tubing from McMaster-Carr before using with food.

1. Measure the stock tubing diameter
2. Order matching FDA-compliant tubing
3. Remove old tubing from pump head
4. Install new tubing, ensuring proper tension

### Step 7.4: Calibrate Flow Rate

```python
# Measure how long it takes to dispense 100ml
# Then calculate: ml_per_second = 100 / time_seconds
# Use this for accurate dispensing
```

### Step 7.5: Mount Pumps and Containers

1. Mount pumps on frame
2. Connect inlet tubes to ingredient containers
3. Route outlet tubes to drip into pot
4. Label each pump (water, oil, stock, sauce)

**Checkpoint**: Can dispense measured amounts of liquids.

---

## Phase 8: Vision System

**Time**: 1 hour
**Parts**: Pi Camera Module 3, MLX90640 thermal camera

### Step 8.1: Connect Pi Camera

1. Power off Pi
2. Locate the camera port (between HDMI and audio)
3. Lift the plastic clip
4. Insert ribbon cable (blue side facing away from USB ports)
5. Press clip down to secure

### Step 8.2: Test Camera

```bash
# Take a test photo
libcamera-still -o test.jpg

# Preview video
libcamera-hello
```

```python
# ~/robotchef/test_camera.py
from picamera2 import Picamera2
import cv2

picam2 = Picamera2()
config = picam2.create_still_configuration()
picam2.configure(config)
picam2.start()

# Capture frame
frame = picam2.capture_array()

# Display (if connected to monitor)
cv2.imshow("Camera", frame)
cv2.waitKey(0)

# Or save
cv2.imwrite("pot_view.jpg", frame)
```

### Step 8.3: Wire MLX90640 Thermal Camera

Connect via I2C (same bus as PCA9685):

| MLX90640 | Pi 5 GPIO |
|----------|-----------|
| VIN | 3.3V |
| GND | GND |
| SDA | SDA (Pin 3) |
| SCL | SCL (Pin 5) |

### Step 8.4: Test Thermal Camera

```python
# ~/robotchef/test_thermal.py
import board
import busio
import adafruit_mlx90640
import numpy as np

i2c = busio.I2C(board.SCL, board.SDA, frequency=800000)
mlx = adafruit_mlx90640.MLX90640(i2c)
mlx.refresh_rate = adafruit_mlx90640.RefreshRate.REFRESH_2_HZ

frame = [0] * 768

while True:
    try:
        mlx.getFrame(frame)
        temp_array = np.array(frame).reshape(24, 32)

        min_temp = np.min(temp_array)
        max_temp = np.max(temp_array)
        avg_temp = np.mean(temp_array)

        print(f"Min: {min_temp:.1f}°C, Max: {max_temp:.1f}°C, Avg: {avg_temp:.1f}°C")

    except ValueError:
        continue  # Retry on read error
```

### Step 8.5: Mount Cameras

1. Mount standard camera above pot, angled down
2. Mount thermal camera with clear view of pot surface
3. Use gooseneck or adjustable mounts for easy positioning
4. Keep away from steam/heat

**Checkpoint**: Can see pot contents and measure surface temperature.

---

## Phase 9: Safety Systems

**Time**: 30 minutes
**Parts**: Emergency stop button, software

### Step 9.1: Wire Emergency Stop

The E-stop should cut power to:
- Cooktop (if using smart plug)
- Pumps
- Servo (optional, or just disable PWM)

Wire the E-stop NC (normally closed) contacts in series with the 12V power supply to pumps/servos.

### Step 9.2: Software Safety Checks

```python
# ~/robotchef/safety.py

MAX_TEMP = 200  # °C - alarm threshold
MAX_RUN_TIME = 3600  # seconds - maximum cooking duration

class SafetyMonitor:
    def __init__(self, thermocouple, thermal_camera):
        self.thermocouple = thermocouple
        self.thermal_camera = thermal_camera
        self.start_time = None

    def check_temperature(self):
        temp = self.thermocouple.temperature
        if temp > MAX_TEMP:
            self.emergency_stop(f"Temperature too high: {temp}°C")
            return False
        return True

    def check_thermal_hotspots(self):
        # Check thermal camera for danger
        frame = self.get_thermal_frame()
        max_temp = np.max(frame)
        if max_temp > MAX_TEMP:
            self.emergency_stop(f"Hotspot detected: {max_temp}°C")
            return False
        return True

    def check_runtime(self):
        if self.start_time:
            elapsed = time.time() - self.start_time
            if elapsed > MAX_RUN_TIME:
                self.emergency_stop("Maximum runtime exceeded")
                return False
        return True

    def emergency_stop(self, reason):
        print(f"EMERGENCY STOP: {reason}")
        # Stop all motors
        # Turn off cooktop (if controlled)
        # Sound alarm
        # Send notification
```

**Checkpoint**: E-stop works, software monitors for dangers.

---

## Phase 10: Software Integration

**Time**: 2-4 hours
**Parts**: None (software only)

### Step 10.1: Create Control Module

```python
# ~/robotchef/controller.py

from adafruit_servokit import ServoKit
import adafruit_max31855
import board
import digitalio
import RPi.GPIO as GPIO
import time

class RobotChef:
    def __init__(self):
        # Initialize servo controller
        self.servos = ServoKit(channels=16)
        self.servos.servo[0].set_pulse_width_range(500, 2500)

        # Initialize temperature sensor
        spi = board.SPI()
        cs = digitalio.DigitalInOut(board.D8)
        self.thermocouple = adafruit_max31855.MAX31855(spi, cs)

        # Initialize pumps
        GPIO.setmode(GPIO.BCM)
        self.pump_pins = {
            'water': (17, 27),
            'oil': (22, 23),
            # Add more pumps...
        }
        for pins in self.pump_pins.values():
            GPIO.setup(pins[0], GPIO.OUT)
            GPIO.setup(pins[1], GPIO.OUT)

    def stir(self, angle=45, speed=0.5):
        """Oscillate stirring paddle"""
        center = 90
        for _ in range(10):
            self.servos.servo[0].angle = center + angle
            time.sleep(speed)
            self.servos.servo[0].angle = center - angle
            time.sleep(speed)
        self.servos.servo[0].angle = center

    def get_temperature(self):
        """Read current temperature"""
        return self.thermocouple.temperature

    def dispense(self, liquid, ml):
        """Dispense specified amount of liquid"""
        # Calibration: adjust seconds_per_ml for your pump
        seconds_per_ml = 0.1
        duration = ml * seconds_per_ml

        pins = self.pump_pins[liquid]
        GPIO.output(pins[0], GPIO.HIGH)
        GPIO.output(pins[1], GPIO.LOW)
        time.sleep(duration)
        GPIO.output(pins[0], GPIO.LOW)

    def wait_for_temp(self, target, timeout=300):
        """Wait until temperature reaches target"""
        start = time.time()
        while time.time() - start < timeout:
            current = self.get_temperature()
            print(f"Current: {current:.1f}°C, Target: {target}°C")
            if current >= target:
                return True
            time.sleep(2)
        return False

    def cleanup(self):
        GPIO.cleanup()
```

### Step 10.2: Create Simple Recipe

```python
# ~/robotchef/recipes/simple_sauce.py

def make_sauce(chef):
    """Simple tomato sauce recipe"""

    print("Starting sauce recipe...")

    # Step 1: Add oil
    print("Adding olive oil...")
    chef.dispense('oil', 30)  # 30ml

    # Step 2: Wait for oil to heat
    print("Heating oil...")
    chef.wait_for_temp(160, timeout=120)

    # Step 3: Add and stir
    print("Add garlic now!")
    input("Press Enter when garlic is added...")

    print("Sautéing garlic...")
    chef.stir(angle=30, speed=0.3)
    time.sleep(60)  # 1 minute

    # Step 4: Add tomatoes (manual)
    print("Add crushed tomatoes now!")
    input("Press Enter when tomatoes are added...")

    # Step 5: Simmer
    print("Simmering...")
    chef.dispense('water', 50)  # 50ml

    for i in range(20):  # 20 minutes, stirring every minute
        print(f"Simmering... {i+1}/20 minutes")
        time.sleep(55)
        chef.stir(angle=20, speed=0.5)

    print("Sauce complete!")

if __name__ == "__main__":
    from controller import RobotChef

    chef = RobotChef()
    try:
        make_sauce(chef)
    finally:
        chef.cleanup()
```

### Step 10.3: Test Full System

1. Fill water container for pumps
2. Place pot on cooktop
3. Run a simple test:

```bash
cd ~/robotchef
source venv/bin/activate
python recipes/simple_sauce.py
```

**Checkpoint**: Full system works end-to-end!

---

## Troubleshooting

### Servo doesn't move
- Check 12V power supply connected to PCA9685 V+
- Verify I2C connection: `sudo i2cdetect -y 1` should show 0x40
- Check servo wire colors (brown=GND, red=V+, orange=signal)

### Temperature reading incorrect
- Verify thermocouple polarity (red=negative!)
- Check SPI connections
- Thermocouple tip must not touch grounded metal

### Pump not flowing
- Check 12V power
- Verify tubing is not kinked
- Prime pump by running in reverse briefly
- Check L293D wiring

### Camera not detected
- Ribbon cable fully seated?
- Enable camera: `sudo raspi-config` → Interface Options → Camera
- Check: `vcgencmd get_camera`

### I2C device not found
- Run: `sudo i2cdetect -y 1`
- Check wiring (SDA to SDA, SCL to SCL)
- Check device address conflicts

---

## Next Steps

After basic system is working:

1. **Add recipes** - Create more recipe scripts
2. **Build web UI** - Flask or FastAPI interface
3. **Add vision ML** - Train models to detect food state
4. **Home Assistant** - Integrate with home automation
5. **Voice control** - Add Alexa/Google integration
6. **TILLREDA hack** - Enable precise temperature control

---

## Resources

- [Adafruit PCA9685 Guide](https://learn.adafruit.com/16-channel-pwm-servo-driver/overview)
- [MAX31855 Guide](https://learn.adafruit.com/thermocouple/overview)
- [MLX90640 Guide](https://learn.adafruit.com/adafruit-mlx90640-ir-thermal-camera/overview)
- [Raspberry Pi Camera Guide](https://www.raspberrypi.com/documentation/accessories/camera.html)
- [TILLREDA Hack Project](https://hackaday.io/project/203350-diy-pwm-controlled-ikea-tillreda-induction-cooktop)
- [Fungineering YouTube](https://www.youtube.com/@Fungineering)

---

*Last Updated: January 25, 2025*
