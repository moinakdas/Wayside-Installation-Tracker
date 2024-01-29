# Intro
The Wayside Installation Tracker is a program used to track the installation of various pieces of wayside equipment for Crosstown Partners under contract S-48012. It analyzes a spreadsheet tabulating the installation of each piece of equipment and provides a high level overview of project progress per installation type. It also organizes said data over different categories (i.e. overall progress can be displayed by station & tunnel, interlocking, or track number).

# Install

# Usage
This program currently supports seven different types of equipment:
- CMRS & Cables
- Axle Counters
- Signals
- Switches
- WRUs
- Z-Cases
- TOPBs

Each piece of equipment is represented within the code as its own class. Class definitions and attrivutes are listed below.

## CMRS & Cables
### General Definitions
The `CableSpan()` class represents the installation of cable/CMRS along portions of track. It's attributes are as follows.

| Attribute | Description |
|-----------|-------------|
|`start`| `(int)` The stationing for the start of the cable/CMRS installation. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|`end`| `(int)` The stationing for the end of the cable/CMRS installation. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|`track`| `(string)` The track the cable/CMRS is being installed on |
|`location`| `(string)` The station/tunnel name that the cable is being installed upon |
|`type`| `(string)` The type of CMRS being installed |
|`activities`| `**VARIES**` Represented by its own class depending on `type` (see MessActivities, CMRS15Activities, CMRS24Activities, TrayActivities) |
|`notes`| `(string)` Any notes taken about specific installation |

### Progress Class
The Activity classes listed below reference the `progress` class. This class serves as a container for the total and installed quantity of material. Its definition is below.

| Attribute | Description |
|-----------|-------------|
|`total`| `(int)` total quantity of referenced material required |
|`installed`| `(int)` installed quantity of referenced material |

### Messenger Activities
The `MessActivities()` class represents the installation progress of Messenger along the referencing `CableSpan()`. Each entry is in turn represented by the `progress()` class. It's attributes are as follows. 

| Attribute | Description |
|-----------|-------------|
|`messSupports`| `(progress)` progress of messenger support installation (number of supports) |
|`messClamps`| `(progress)` progress of messenger clamp installation (number of clamps) |
|`messWirePull` | `(progress)` progress of messenger wire pull (refers to the main wire that cables are hung from, wire that will be tensioned) |
|`messCablesPulled`| `(progress)` progress of cables pulled (refers to number of cables pulled in cablespan, NOT length) |
|`messStraps`| `(progress)` progress of messenger strap installation (number of straps) |

### 15" CMRS Activities
The `CMRS15Activities()` class represents the installation progress of 15" CMRS along the referencing `CableSpan()`. It inherits from the `CMRSActivities()` class. Each entry is in turn represented by the `progress()` class. It's attributes are as follows. 

| Attribute | Description |
|-----------|-------------|
|`colClamp`|`(progress)` progress of column clamp installations (number of column clamps)| 
|`stationBrackets`| `(progress)` progress station bracket installations (number of station brackets) |
|`grounding`| `(progress)` progress of grounding |
|`obsBracket`| `(progress)` progress of obstruction bracket installation (number of obstruction brackets) |
|`cablesPulled`| `(progress)` progress of cables pulled (refers to number of cables pulled in cablespan, NOT length) |
|`CMRSInstall15`|`(progress)` progress of 15" CMRS installed (refers to length of installation along track)|

### 24" CMRS Activities
The `CMRS24Activities()` class represents the installation progress of 24" CMRS along the referencing `CableSpan()`. It inherits from the `CMRSActivities()` class. Each entry is in turn represented by the `progress()` class. It's attributes are as follows. 

| Attribute | Description |
|-----------|-------------|
|`colClamp`|`(progress)` progress of column clamp installations (by number of column clamps)| 
|`stationBrackets`| `(progress)` progress station bracket installations (by number of station brackets) |
|`grounding`| `(progress)` progress of grounding |
|`obsBracket`| `(progress)` progress of obstruction bracket installation (by number of obstruction brackets) |
|`cablesPulled`| `(progress)` progress of cables pulled (by refers to number of cables pulled in cablespan, NOT length) |
|`CMRSInstall24`|`(progress)` progress of 24" CMRS installed (by refers to length of installation along track)|

### Cable Tray Activities
The `TrayActivities()` class represents the installation progress of Cable Tray along the referencing `CableSpan()`. Each entry is in turn represented by the `progress()` class. It's attributes are as follows. 

| Attribute | Description |
|-----------|-------------|
|`trayBrackets`|`(progress)` progress of cable tray bracket installation (by number of tray brackets installed) |
|`installingTray`|`(progress)` progress of cable tray installation (by length of cable tray installed)|
|`coreDrilling`|`(progress)` progress of core drilling|
|`cablePull`|`(progress)` progress of cables pulled (by number of cables pulled, NOT length)|

### Examples 
The following contains examples of how the `CableSpan()` objects should be referenced

```python
#Let Mess001 be a properly initialized CableSpan of the "mess" type (messenger)

Mess001.start = 500
Mess001.end = 800
Mess001.track = "E1"
Mess001.location = "COURT SQAURE"
Mess001.location = "mess"

Mess001.activities.messSupports.total = 50
Mess001.activities.messSupports.installed = 25
Mess001.activities.messClamps.total = 20
Mess001.activities.messClamps.installed = 15
Mess001.activities.messWirePull.total = 1
Mess001.activities.messWirePull.installed = 0
Mess001.activities.messWireTension.total = 1
Mess001.activities.messWireTension.installed = 0
Mess001.activities.messCablesPulled.total = 6
Mess001.activities.messCablesPulled.installed = 3
Mess001.activities.messStraps.total = 50
Mess001.activities.messStraps.installed = 0

```

