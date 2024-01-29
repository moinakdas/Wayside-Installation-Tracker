# Intro
The Wayside Installation Tracker is a program used to track the installation of various pieces of wayside equipment for Crosstown Partners under contract S-48012. It analyzes a spreadsheet tabulating the installation of each piece of equipment and provides a high level overview of project progress per installation type. It also organizes said data over different categories (i.e. overall progress can be displayed by station & tunnel, interlocking, or track number).

# Install

# Class Structure
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
The `CableSpan` class represents the installation of cable/CMRS along portions of track. It's attributes are as follows.

| Attribute | Description |
|-----------|-------------|
|`start`| `(int)` The stationing for the start of the cable/CMRS installation. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|`end`| `(int)` The stationing for the end of the cable/CMRS installation. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|`track`| `(string)` The track the cable/CMRS is being installed on |
|`location`| `(string)` The station/tunnel name that the cable is being installed on |
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
The `MessActivities` class represents the installation progress of Messenger along the referencing `CableSpan`. Each entry is in turn represented by the `progress` class. It's attributes are as follows. 

| Attribute | Description |
|-----------|-------------|
|`messSupports`| `(progress)` progress of messenger support installation (number of supports) |
|`messClamps`| `(progress)` progress of messenger clamp installation (number of clamps) |
|`messWirePull` | `(progress)` progress of messenger wire pull (refers to the main wire that cables are hung from, wire that will be tensioned) |
|`messCablesPulled`| `(progress)` progress of cables pulled (refers to number of cables pulled in cablespan, NOT length) |
|`messStraps`| `(progress)` progress of messenger strap installation (number of straps) |

### 15" CMRS Activities
The `CMRS15Activities` class represents the installation progress of 15" CMRS along the referencing `CableSpan`. It inherits from the `CMRSActivities` class. Each entry is in turn represented by the `progress` class. It's attributes are as follows. 

| Attribute | Description |
|-----------|-------------|
|`colClamp`|`(progress)` progress of column clamp installations (number of column clamps)| 
|`stationBrackets`| `(progress)` progress station bracket installations (number of station brackets) |
|`grounding`| `(progress)` progress of grounding |
|`obsBracket`| `(progress)` progress of obstruction bracket installation (number of obstruction brackets) |
|`cablesPulled`| `(progress)` progress of cables pulled (refers to number of cables pulled in cablespan, NOT length) |
|`CMRSInstall15`|`(progress)` progress of 15" CMRS installed (refers to length of installation along track)|

### 24" CMRS Activities
The `CMRS24Activities` class represents the installation progress of 24" CMRS along the referencing `CableSpan`. It inherits from the `CMRSActivities` class. Each entry is in turn represented by the `progress` class. It's attributes are as follows. 

| Attribute | Description |
|-----------|-------------|
|`colClamp`|`(progress)` progress of column clamp installations (by number of column clamps)| 
|`stationBrackets`| `(progress)` progress station bracket installations (by number of station brackets) |
|`grounding`| `(progress)` progress of grounding |
|`obsBracket`| `(progress)` progress of obstruction bracket installation (by number of obstruction brackets) |
|`cablesPulled`| `(progress)` progress of cables pulled (by refers to number of cables pulled in cablespan, NOT length) |
|`CMRSInstall24`|`(progress)` progress of 24" CMRS installed (by refers to length of installation along track)|

### Cable Tray Activities
The `TrayActivities` class represents the installation progress of Cable Tray along the referencing `CableSpan`. Each entry is in turn represented by the `progress` class. It's attributes are as follows. 

| Attribute | Description |
|-----------|-------------|
|`trayBrackets`|`(progress)` progress of cable tray bracket installation (by number of tray brackets installed) |
|`installingTray`|`(progress)` progress of cable tray installation (by length of cable tray installed)|
|`coreDrilling`|`(progress)` progress of core drilling|
|`cablePull`|`(progress)` progress of cables pulled (by number of cables pulled, NOT length)|

### Examples 
The following contains examples of how the `CableSpan` objects should be referenced

```python
#Let Mess001 be a properly initialized CableSpan of the "mess" type (messenger)

Mess001.start = 50000                                   #Messenger starts at 500+00
Mess001.end = 80000                                     #Messenger ends at 800+00
Mess001.track = "E1"                                    #Messenger will be installed on E1 track
Mess001.location = "COURT SQAURE"                       #Messenger is located in the Court Square Station
Mess001.location = "mess"                               #Cable span is of Messenger type

Mess001.activities.messSupports.total = 50              #There are a total of 50 messenger supports to be installed
Mess001.activities.messSupports.installed = 25          #25 of 50 messenger supports have been installed
Mess001.activities.messClamps.total = 20                #There are a total of 20 messenger clamps to be installed
Mess001.activities.messClamps.installed = 15            #15 of 20 messenger clamps are currently installed
Mess001.activities.messWirePull.total = 1               #Messenger Wire Pull is a "COMPLETE/NOT COMPLETE" activity, hence total will always be 1
Mess001.activities.messWirePull.installed = 0           #0 denotes that wire pull has not been completed, 1 denotes that it has been completed
Mess001.activities.messWireTension.total = 1            #Messenger Wire Tension is a "COMPLETE/NOT COMPLETE" activity, hence total will always be 1
Mess001.activities.messWireTension.installed = 0        #0 denotes that wire tension has not been completed, 1 denotes that it has been completed
Mess001.activities.messCablesPulled.total = 6           #A total of 6 cables will be pulled
Mess001.activities.messCablesPulled.installed = 3       #3 of 6 cables will be installed
Mess001.activities.messStraps.total = 50                #A total of 50 messenger straps will be installed
Mess001.activities.messStraps.installed = 0             #0 of 50 messenger straps are installed
Mess001.notes = "INSTALLATION PROJECTED EARLY"          #Note made for specified messenger installation

```
The above example shows these values being defined. In practice, these values will be read and used in various calculations within the program.

## Equipment
### General Definitions
Axle Counters, Signals, Switches, WRUs, Z-Cases, and TOPBs are represented by the `Equipment` class. It's attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`type`| `(string)` Type of equipment installed (i.e. `"AXC"`,`"SIGNAL"`,`"SWITCH"`,`"WRU"`,`ZCASE`,`"TOPB"`)|
|`stationing`|`(int)` Stationing of referenced equipment. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|`track`|`(string)` The track the equipment is being installed on |
|`location`| `(string)` The station/tunnel name that the equipment is being installed on |
|`activities`| `**VARIES**` Represented by its own class depending on `type` |
|`notes`|`(string)` Any notes taken about specific installation |

### BinProgress Class
The Activity classes listed below reference the `BinProgress` class. This class serves as a container for the total and installed quantity of material. Its definition is below.

| Attribute | Description |
|-----------|-------------|
|`date`| `(string)` Date of reference task completion, written in `MM-DD-YYYY` format |
|`progress`| `(int)` progress of current task, typically binary where `0` = not completed, `1` = completed |

### Axle Counter Activities
The `AxleCounterActivities` class represents the installation progress of the Axle Counter (`"AXC"`) type of equipment. Each attribute in turn is represented by the `BinProgress` class. Its attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`ACInstall`|`(BinProgress)` Whether Axle Counter was installed |
|`JBInstall`|`(BinProgress)` Whether Junction Box was installed |
|`LCInstall`|`(BinProgress)` Whether Line Cable was installed |
|`breakdownTesting`|`(BinProgress)` Whether Breakdown Testing was performed |
|`preOpTesting`|`(BinProgress)` Whether Pre-Operation Testing was performed |

### Signal Activities
The `SignalActivities` class represents the installation progress of the Signal (`"SIGNAL"`) type of equipment. Each attribute in turn is represented by the `BinProgress` class.Its attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`sigInstall`|`(BinProgress)` Whether Signal was installed |
|`JBInstall`|`(BinProgress)` Whether Junction Box was installed |
|`SMInstall`|`(BinProgress)` |
|`LCInstall`|`(BinProgress)` Whether Line Cable was installed |
|`breakdownTesting`|`(BinProgress)` Whether Breakdown Testing was performed |
|`preOpTesting`|`(BinProgress)` Whether Pre-Operation Testing was performed |

### Switch Activities
The `SwitchActivities` class represents the installation progress of the Switch (`"SWITCH"`) type of equipment. Each attribute in turn is represented by the `BinProgress` class. Its attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`switchInstall`|`(BinProgress)` Whether switch was installed |
|`JBInstall`|`(BinProgress)` Whether Junction Box was installed |
|`SCInstall`|`(BinProgress)` Whether Switch Cable was installed |
|`LCInstall`|`(BinProgress)` Whether Line Cable was installed |
|`breakdownTesting`|`(BinProgress)` Whether Breakdown Testing was performed |
|`preOpTesting`|`(BinProgress)` Whether Pre-Operation Testing was performed |

### WRU Activities 

The `WRUActivities` class represents the installation progress of the WRU (`"WRU"`) type of equipment. Each attribute in turn is represented by the `BinProgress` class. Its attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`RUInstall`|`(BinProgress)` Whether switch was installed |
|`JBInstall`|`(BinProgress)` Whether Junction Box was installed |
|`FBInstall`|`(BinProgress)`|
|`antennaInstall`|`(BinProgress)`|
|`antCableInstall`|`(BinProgress)`|
|`splitterInstall`|`(BinProgress)`|
|`FCSplice`|`(BinProgress)` |
|`FTesting`|`(BinProgress)` |
|`PTesting`|`(BinProgress)` |

### TOPB Activities

### Examples
The following contains an example of how the `Equipment` class may be referenced
```python
#Let AXC001 be an axle counter initialized as Equipment

AXC001.type = "AXC"                                   #Equipment is an Axle Counter
AXC001.stationing = 71288                             #Axle Counter is stationed at 712+88
AXC001.track = "E1"                                   #Axle Counter is on track E1
AXC001.location = "BERGEN ST"                         #Axle Counter is located in the Bergen Street Station
AXC001.activities.ACInstall.progress = 1              #Axle Counter has been installed
AXC001.activities.ACInstall.date = 03-14-2024         #Axle Counter was installed on March 14th, 2024
AXC001.activities.JBInstall.progress = 1              #Junction Box has been installed
AXC001.activities.JBInstall.date = 03-14-2024         #Junction Box was installed on March 14th, 2024
AXC001.activities.LCInstall.progress = 1              #Line Cable has been installed
AXC001.activities.LCInstall.date = 03-16-2024         #Line Cable was installed on March 16th, 2024
AXC001.activities.preOpTesting.progress = 0           #Pre-Operation testing not completed
AXC001.activities.preOpTesting.date = None            #No date availiable as testing not completed
AXC001.notes = "Pre-Op Testing delayed"               #Note made on specific axle counter installation
```
## Library Operation

The script takes care of taking data from the properly formatted spreadsheet and internalizing it within its own class structure. It generates a series of arrays, one for each equipment type (one array corresponds to a sheet in the workbook).

Each array is then sorted by the stationing of the equipment mentioned (lowest stationing -> highest stationing) using MergeSort. This allows for binary search to be utilized when searching for equipment by location.

| Function Name | Description |
|---------------|-------------|
|`searchStationing(equipArray,start,end)`| Takes in the sorted list of equipment to search through (`equipArray`), a `(int) start` stationing, and an `(int) end` stationing. Returns a list of entries from the given array that lie between the start and end stationing. 



