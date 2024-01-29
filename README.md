# Wayside Installation Tracker
The Wayside Installation Tracker is a program used to track the installation of various pieces of wayside equipment for Crosstown Partners under contract S-48012. It analyzes a spreadsheet tabulating the installation of each piece of equipment and provides a high level overview of project progress per installation type. It also organizes said data over different categories (i.e. overall progress can be displayed by station & tunnel, interlocking, or track number).

## Install

## Usage
This program currently supports seven different types of equipment:
- CMRS & Cables
- Axle Counters
- Signals
- Switches
- WRUs
- Z-Cases
- TOPBs

Each piece of equipment is represented within the code as its own class. Class definitions and attrivutes are listed below.

### CMRS & Cables
#### Definitions
The `CableSpan()` class represents the installation of cable/CMRS along portions of track. It's attributes are as follows.

| Attribute | Description |
|-----------|-------------|
|start| `(int)` The stationing for the start of the cable/CMRS installation. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|end| `(int)` The stationing for the end of the cable/CMRS installation. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|track| `(string)` The track the cable/CMRS is being installed on |
|location| `(string)` The station/tunnel name that the cable is being installed upon |
|type| `(string)` The type of CMRS being installed |


#### Examples
