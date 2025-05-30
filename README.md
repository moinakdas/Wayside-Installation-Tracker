![](witrender2.png)

# Intro
The Wayside Installation Tracker is a program used to track the installation of various pieces of wayside equipment for Crosstown Partners under contract S-48012. It analyzes a spreadsheet tabulating the installation of each piece of equipment and provides a high level overview of project progress per installation type. It also organizes said data over different categories (i.e. overall progress can be displayed by station & tunnel, interlocking, or track number).

![alt text](https://github.com/moinakdas/Wayside-Installation-Tracker/blob/main/WITSampleImage.png?raw=true)

# Install
Use the [git](https://git-scm.com/) tool to clone this repository.

```bash
git clone https://github.com/moinakdas/Wayside-Installation-Tracker
```

# Class Structure
This program currently supports seven different types of equipment:
- CMRS & Cables
- Axle Counters
- Signals
- Switches
- WRUs
- Z-Cases
- TOPBs

Each piece of equipment is represented within the code as its own class. Class definitions and attributes are listed below.

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

### BinProgress Class
The Activity classes for all equipment reference the `BinProgress` class. This class serves as a container for the total and installed quantity of material. Its definition is below.

| Attribute | Description |
|-----------|-------------|
|`date`| `(string)` Date of reference task completion, written in `MM-DD-YYYY` format |
|`progress`| `(float)` progress of current task, typically binary where `0` = not completed, `1` = completed |

## Axle Counter
### General Definitions
AXC inherits from the `Equipment` class. It's attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`stationing`|`(int)` Stationing of referenced equipment. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|`track`|`(string)` The track the equipment is being installed on |
|`location`| `(string)` The station/tunnel name that the equipment is being installed on |
|`activities`| `**VARIES**` Represented by its own class depending on `type` |
|`notes`|`(string)` Any notes taken about specific installation |
|`REFDWG`|`(string)` Name of the Drawing Showing the Axle Counter |

### Axle Counter Activities
The `AxleCounterActivities` class represents the installation progress of the Axle Counter (`"AXC"`) type of equipment. Each attribute in turn is represented by the `BinProgress` class. Its attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`ACInstall`|`(BinProgress)` Whether Axle Counter was installed |
|`JBInstall`|`(BinProgress)` Whether Junction Box was installed |
|`LCInstall`|`(BinProgress)` Whether Line Cable was installed |
|`ECInstall`|`(BinProgress)` Whether Express Cable was installed |
|`preOpTesting`|`(BinProgress)` Whether Pre-Operation Testing was performed |

### Functions

| Function Name | Description |
|-----------|------------|
|`getProgress()`|`(float)` current installation progress of equipment object |


## Signal
### General Definitions
Signal inherits from the `Equipment` class. It's attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`stationing`|`(int)` Stationing of referenced equipment. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|`track`|`(string)` The track the equipment is being installed on |
|`location`| `(string)` The station/tunnel name that the equipment is being installed on |
|`activities`| `**VARIES**` Represented by its own class depending on `type` |
|`notes`|`(string)` Any notes taken about specific installation |
|`signalType`|`(string)` Type of Signal (i.e. HOME, APPROACH, REVERSE) |

### Signal Activities
The `SignalActivities` class represents the installation progress of the Signal (`"SIGNAL"`) type of equipment. Each attribute in turn is represented by the `BinProgress` class.Its attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`sigInstall`|`(BinProgress)` Whether Signal was installed |
|`JBInstall`|`(BinProgress)` Whether Junction Box was installed |
|`SMInstall`|`(BinProgress)` Whether Switch Machine was installed|
|`LCInstall`|`(BinProgress)` Whether Line Cable was installed |
|`breakdownTesting`|`(BinProgress)` Whether Breakdown Testing was performed |
|`preOpTesting`|`(BinProgress)` Whether Pre-Operation Testing was performed |

### Functions

| Function Name | Description |
|-----------|------------|
|`getProgress()`|`(float)` current installation progress of equipment object |

## Switch
### General Definitions
Switch inherits from the `Equipment` class. It's attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`stationing`|`(int)` Stationing of referenced equipment. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|`track`|`(string)` The track the equipment is being installed on |
|`location`| `(string)` The station/tunnel name that the equipment is being installed on |
|`activities`| `**VARIES**` Represented by its own class depending on `type` |
|`notes`|`(string)` Any notes taken about specific installation |
|`name`|`(string)` Name of Signal |

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

### Functions

| Function Name | Description |
|-----------|------------|
|`getProgress()`|`(float)` current installation progress of equipment object |

## Wayside Radio Unit (WRU)
### General Definitions
WRU inherits from the `Equipment` class. It's attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`stationing`|`(int)` Stationing of referenced equipment. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|`track`|`(string)` The track the equipment is being installed on |
|`location`| `(string)` The station/tunnel name that the equipment is being installed on |
|`activities`| `**VARIES**` Represented by its own class depending on `type` |
|`notes`|`(string)` Any notes taken about specific installation |

### WRU Activities 

The `WRUActivities` class represents the installation progress of the WRU (`"WRU"`) type of equipment. Each attribute in turn is represented by the `BinProgress` class. Its attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`RUInstall`|`(BinProgress)` Whether switch was installed |
|`JBInstall`|`(BinProgress)` Whether Junction Box was installed |
|`FBInstall`|`(BinProgress)` Whether Fiber Box was installed|
|`antennaInstall`|`(BinProgress)` Whether Antenna was installed|
|`antCableInstall`|`(BinProgress)` Whether Antenna Cable was installed|
|`splitterInstall`|`(BinProgress)` Whether Splitter was installed|
|`FCSplice`|`(BinProgress)` Whether Fiber Cable was spliced|
|`FTesting`|`(BinProgress)` Whether Fiber Testing was performed|
|`PTesting`|`(BinProgress)` Whether Power Testing was performed|

### Functions

| Function Name | Description |
|-----------|------------|
|`getProgress()`|`(float)` current installation progress of equipment object |

## Z-Case (Zcase)
### General Definitions
ZCase inherits from the `Equipment` class. It's attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`stationing`|`(int)` Stationing of referenced equipment. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|`track`|`(string)` The track the equipment is being installed on |
|`location`| `(string)` The station/tunnel name that the equipment is being installed on |
|`activities`| `**VARIES**` Represented by its own class depending on `type` |
|`notes`|`(string)` Any notes taken about specific installation |

### ZCase Activities

| Attribute | Defintions |
|-----------|------------|
|`caseInstall`|`(BinProgress)` Whether Z-Case was installed |
|`cableConnect`|`(BinProgress)` Whether cable connection/termination was performed |
|`preOpTesting`|`(BinProgress)` Whether Pre-Operation Testing was performed|

### Functions

| Function Name | Description |
|-----------|------------|
|`getProgress()`|`(float)` current installation progress of equipment object |

## Train Operator Push Button (TOPB)
### General Definitions
TOPB inherits from the `Equipment` class. It's attributes are shown below.

| Attribute | Defintions |
|-----------|------------|
|`stationing`|`(int)` Stationing of referenced equipment. NOTE: Do NOT use a "+" as a delimiter when writing stationings. Only use integer values (i.e. `"588+88"` --> `58888`)|
|`track`|`(string)` The track the equipment is being installed on |
|`location`| `(string)` The station/tunnel name that the equipment is being installed on |
|`activities`| `**VARIES**` Represented by its own class depending on `type` |
|`notes`|`(string)` Any notes taken about specific installation |

### TOPB Activities

| Attribute | Defintions |
|-----------|------------|
|`TOPBInstall`|`(BinProgress)` Whether TOPB was installed |
|`cableConnect`|`(BinProgress)` Whether cable connection/termination was performed |
|`preOpTesting`|`(BinProgress)` Whether Pre-Operation Testing was performed|

### Functions

| Function Name | Description |
|-----------|------------|
|`getProgress()`|`(float)` current installation progress of equipment object |

## Examples
The following contains an example of how the `AXC` class may be referenced
```python
#Let AXC001 be an axle counter initialized as AXC

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
print(AXC001.getProgress())                           #will print the current progress of Axle Counter Installation (0.75)
```
## Library Operation

### General Approach
The script takes care of taking data from the properly formatted spreadsheet and internalizing it within its own class structure. It generates a series of arrays, one for each equipment type (one array corresponds to a sheet in the workbook, each element in the array corresponds to a single object of the specified equipment type).

The names of these lists are as follows:
- CMRSObjectList
- AXCObjectList
- SignalObjectList
- SwitchObjectList
- WRUObjectList
- ZCaseObjectList
- TOPBObjectList

Using a loop, it is possible to iterate through these equipment arrays to perform any necessary calculation


### Front-Facing Functions
Several Functions are written to provide output directly to the front-end of the program. They are denoted with a `@eel.expose` directly above their definition.

| Function Name | Description |
|---------------|-------------|
|`calcOverallProgressByType(equipmentType)`| Takes in a `string` equipment type (`CMRS`,`AXC`,`SIGNAL`,`SWITCH`,`WRU`,`ZCase`,`TOPB`) and returns the average progress among all objects in the corroesponding object list `float` |
|`getCMSProgressByCMSType(cmsType)`| Takes in a `string` CMS type (`mess`,`15CMRS`,`24CMRS`,`tray`) and returns the average progress among all objects of that CMS type `float`|
|`getCMSProgressByStationAndType(cmsType,Station)`| Takes in a `string` CMS type (`mess`,`15CMRS`,`24CMRS`,`tray`) and a `string` Station/Tunnel Name returns the average progress among all objects of that CMS type in that station `float`|
|`getEquipmentAttributesByStation(equipmentType)`| Takes in a `string` equipment type (`CMRS`,`AXC`,`SIGNAL`,`SWITCH`,`WRU`,`ZCase`,`TOPB`) and returns a dictionary with all the attributes of that equipment type averaged along the entire array`<DICTIONARY>`|
|`calcAttributeGeneralProgressByEquipType(location, equipmentType)`| Takes in a `string` Station/Tunnel name and a `string` equipment type (`CMRS`,`AXC`,`SIGNAL`,`SWITCH`,`WRU`,`ZCase`,`TOPB`) and returns a dictionary of the average progress per activity at the station/tunnel`<DICTIONARY>`|
|`calcProgressByLocation(location, equipmentType)`| Takes in a `string` Station/Tunnel name and a `string` equipment type (`CMRS`,`AXC`,`SIGNAL`,`SWITCH`,`WRU`,`ZCase`,`TOPB`) and returns the progress of the equipment type within the station `float` Returns -1 if internal error|


