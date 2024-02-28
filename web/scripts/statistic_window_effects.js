
///////////////////////////////////// GLOBAL VARS & FUNCTION DEFINITIONS ///////////////////////////////////////
currentMode = 0; //define current page map = 0, CMS = 1, AXC = 2, SIGNALS = 3, SWITCHES 4, WRU = 5, Z-CASE = 6, TOPB = 7.

eel.expose
function setOverallProgress(location) {
    switch(location){
        case "GENERAL":
            eel.calcOverallProgressByType("CMRS")().then((r) => {
                document.querySelector('.percentage-label').innerHTML = formatPercent(r);
                document.querySelector(".progress-bar").style.width = formatPercent(r);
            });
            eel.calcOverallProgressByType("AXC")().then((r) => {
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercent(r);
            });
            eel.calcOverallProgressByType("SIGNAL")().then((r) => {
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercent(r);
            });
            eel.calcOverallProgressByType("SWITCH")().then((r) => {
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercent(r);
            });
            eel.calcOverallProgressByType("WRU")().then((r) => {
                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercent(r);
            });
            eel.calcOverallProgressByType("ZCase")().then((r) => {
                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercent(r);
            });
            eel.calcOverallProgressByType("TOPB")().then((r) => {
                document.querySelectorAll('.percentage-label')[6].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[6].style.width = formatPercent(r);
            });
            break;
        default:
            eel.calcProgressByLocation(location,"CMRS")().then((r) => {
                if( r == -1){
                    document.querySelector('.single-stat-container').style.display = "block";
                    document.querySelector('.percentage-label').innerHTML = "--";
                    document.querySelector(".progress-bar").style.width = 0;

                }else{
                    document.querySelector('.single-stat-container').style.display = "block";
                    document.querySelector('.percentage-label').innerHTML = formatPercent(r);
                    document.querySelector(".progress-bar").style.width = formatPercent(r);
                }
            });
            eel.calcProgressByLocation(location,"AXC")().then((r) => {
                if( r == -1){
                    document.querySelectorAll('.single-stat-container')[1].style.display = "block";
                    document.querySelectorAll('.percentage-label')[1].innerHTML = "--";
                    document.querySelectorAll(".progress-bar")[1].style.width = 0;
                }else{
                    document.querySelectorAll('.single-stat-container')[1].style.display = "block";
                    document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[1].style.width = formatPercent(r);
                }           
            });
            eel.calcProgressByLocation(location,"SIGNAL")().then((r) => {
                if( r == -1){
                    document.querySelectorAll('.single-stat-container')[2].style.display = "block";
                    document.querySelectorAll('.percentage-label')[2].innerHTML = "--";
                    document.querySelectorAll(".progress-bar")[2].style.width = 0;
                }else{
                    document.querySelectorAll('.single-stat-container')[2].style.display = "block";
                    document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[2].style.width = formatPercent(r);
                }              
            });
            eel.calcProgressByLocation(location,"SWITCH")().then((r) => {
                if( r == -1){
                    document.querySelectorAll('.single-stat-container')[3].style.display = "block";
                    document.querySelectorAll('.percentage-label')[3].innerHTML = "--";
                    document.querySelectorAll(".progress-bar")[3].style.width = 0;
                }else{
                    document.querySelectorAll('.single-stat-container')[3].style.display = "block";
                    document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[3].style.width = formatPercent(r);
                }       
            });
            eel.calcProgressByLocation(location,"WRU")().then((r) => {
                if( r == -1){
                    document.querySelectorAll('.single-stat-container')[4].style.display = "block";
                    document.querySelectorAll('.percentage-label')[4].innerHTML = "--";
                    document.querySelectorAll(".progress-bar")[4].style.width = 0;
                }else{
                    document.querySelectorAll('.single-stat-container')[4].style.display = "block";
                    document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r);
                   document.querySelectorAll(".progress-bar")[4].style.width = formatPercent(r);
                }        
            });
            eel.calcProgressByLocation(location,"ZCase")().then((r) => {
                if( r == -1){
                    document.querySelectorAll('.single-stat-container')[5].style.display = "block";
                    document.querySelectorAll('.percentage-label')[5].innerHTML = "--";
                    document.querySelectorAll(".progress-bar")[5].style.width = 0;
                }else{
                    document.querySelectorAll('.single-stat-container')[5].style.display = "block";
                    document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[5].style.width = formatPercent(r);
                }             
            });
            eel.calcProgressByLocation(location,"TOPB")().then((r) => {
                if( r == -1){
                    document.querySelectorAll('.single-stat-container')[6].style.display = "block";
                    document.querySelectorAll('.percentage-label')[6].innerHTML = "--";
                    document.querySelectorAll(".progress-bar")[6].style.width = 0;
                }else{
                    document.querySelectorAll('.single-stat-container')[6].style.display = "block";
                    document.querySelectorAll('.percentage-label')[6].innerHTML = formatPercent(r);
                   document.querySelectorAll(".progress-bar")[6].style.width = formatPercent(r);
                }   
            });
            break;
    }
}

function setCMSProgress(location){
    switch(location){
        case "GENERAL":
            eel.getCMSProgressByCMSType("mess")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r);
            });
            eel.getCMSProgressByCMSType("15CMRS")().then((r) => {
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r);
            });
            eel.getCMSProgressByCMSType("24CMRS")().then((r) => {
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r);
            });
            eel.getCMSProgressByCMSType("tray")().then((r) => {
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r);
            });
            break;
        default:
            eel.getCMSProgressByStationAndType("mess",location)().then((r) => {
                console.log(r);
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r);
            });
            eel.getCMSProgressByStationAndType("15CMRS",location)().then((r) => {
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r);
            });
            eel.getCMSProgressByStationAndType("24CMRS",location)().then((r) => {
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r);
            });
            eel.getCMSProgressByStationAndType("tray",location)().then((r) => {
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r);
            });
            break;
    }
}

eel.expose
function setAXCProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcAttributeGeneralProgressByEquipType("AXC")().then((r) => {
                console.log(r.ACInstall);
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.ACInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.ACInstall);
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.LCInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.LCInstall);
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.ECInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.ECInstall);
                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.preOpTesting);
            });
            break;
        default:
            console.log("Axle Counter hard");
            eel.getEquipmentAttributesByStation(location,"AXC")().then((r) => {
                console.log(r.ACInstall);
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.ACInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.ACInstall);
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.LCInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.LCInstall);
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.ECInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.ECInstall);
                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.preOpTesting);
            });
            break;
    }
}

function setSignalProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcAttributeGeneralProgressByEquipType("SIGNAL")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.sigInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.sigInstall);
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.SMInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.SMInstall);
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.LCInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.LCInstall);
                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.breakdownTesting);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.breakdownTesting);
                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercentForWidth(r.preOpTesting);
            });
            break;
        default:
            console.log("Signal");
            eel.getEquipmentAttributesByStation(location,"SIGNAL")().then((r) => {
                console.log(r);
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.sigInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.sigInstall);
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.SMInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.SMInstall);
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.LCInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.LCInstall);
                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.breakdownTesting);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.breakdownTesting);
                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercentForWidth(r.preOpTesting);
            });
            break;
    }
}

function setSwitchProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcAttributeGeneralProgressByEquipType("SWITCH")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.switchInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.switchInstall);
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.SCInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.SCInstall);
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.LCInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.LCInstall);
                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.breakdownTesting);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.breakdownTesting);
                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercentForWidth(r.preOpTesting);
            });
            break;
        default:
            eel.getEquipmentAttributesByStation(location,"SWITCH")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.switchInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.switchInstall);
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.SCInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.SCInstall);
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.LCInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.LCInstall);
                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.breakdownTesting);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.breakdownTesting);
                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercentForWidth(r.preOpTesting);
            });
            break;
    }
}

function setWRUProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcAttributeGeneralProgressByEquipType("WRU")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.RUInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.RUInstall);
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.FBInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.FBInstall);
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.antennaInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.antennaInstall);
                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.antCableInstall);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.antCableInstall);
                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r.splitterInstall);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercentForWidth(r.splitterInstall);
                document.querySelectorAll('.percentage-label')[6].innerHTML = formatPercent(r.FTesting);
                document.querySelectorAll(".progress-bar")[6].style.width = formatPercentForWidth(r.FTesting);
            });
            break;
        default:
            eel.getEquipmentAttributesByStation(location,"WRU")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.RUInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.RUInstall);
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.FBInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.FBInstall);
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.antennaInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.antennaInstall);
                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.antCableInstall);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.antCableInstall);
                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r.splitterInstall);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercentForWidth(r.splitterInstall);
                document.querySelectorAll('.percentage-label')[6].innerHTML = formatPercent(r.FTesting);
                document.querySelectorAll(".progress-bar")[6].style.width = formatPercentForWidth(r.FTesting);
            });
            break;
    }
}

function setZCaseProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcAttributeGeneralProgressByEquipType("ZCase")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.caseInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.caseInstall);
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.cableConnect);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.cableConnect);
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.preOpTesting);
            });
            break;
        default:
            eel.getEquipmentAttributesByStation(location,"ZCase")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.caseInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.caseInstall);
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.cableConnect);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.cableConnect);
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.preOpTesting);
            });
            break;
    }
}

function setTOPBProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcAttributeGeneralProgressByEquipType("ZCase")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.TOPBInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.TOPBInstall);
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.cableConnect);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.cableConnect);
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.preOpTesting);
            });
            break;
        default:
            eel.getEquipmentAttributesByStation(location,"TOPB")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.TOPBInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.TOPBInstall);
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.cableConnect);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.cableConnect);
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.preOpTesting);
            });
            break;
    }
}

function setStatsByLocation(location){
    switch(currentMode){
        case 0:
            setOverallProgress(location);
            break;
        case 1: // CMS
            setCMSProgress(location);
            break;
        case 2: // AXC
            setAXCProgress(location);
            break;
        case 3: // SIGNALS
            setSignalProgress(location);
            break;
        case 4: // SWITCH
            setSwitchProgress(location);
            break;
        case 5: // WRUS
            setWRUProgress(location);
            break;
        case 6: // Z CASE
            setZCaseProgress(location);
            break;
        case 7: // TOPB
            setTOPBProgress(location);
            break;
    }
        
}


function formatPercent(decimal) {
    if (typeof decimal == 'undefined' || decimal < 0) {
        return "--";
    }
    const percent = Math.round(decimal * 100);
    return percent.toString() + "%";
}

function formatPercentForWidth(decimal){
    if (typeof decimal == 'undefined' || decimal < 0) {
        return 0;
    }
    const percent = Math.round(decimal * 100);
    return percent.toString() + "%";
}

function setColorIcon(a,b,c,d,e,f,g,h){
    document.getElementById("icon1").style.opacity = a;
    document.getElementById("icon2").style.opacity = b;
    document.getElementById("icon3").style.opacity = c;
    document.getElementById("icon4").style.opacity = d;
    document.getElementById("icon5").style.opacity = e;
    document.getElementById("icon6").style.opacity = f;
    document.getElementById("icon7").style.opacity = g;
    document.getElementById("icon8").style.opacity = h;
}

function setColorText(a,b,c,d,e,f,g,h){
    document.querySelector("#entryText1").style.color = a ? "#8AF581" : "#A7ADB2";    
    document.querySelector("#entryText2").style.color = b ? "#F17C7C" : "#A7ADB2";
    document.querySelector("#entryText3").style.color = c ? "#F5AA81" : "#A7ADB2";
    document.querySelector("#entryText4").style.color = d ? "#F5E981" : "#A7ADB2";
    document.querySelector("#entryText5").style.color = e ? "#81F5B6" : "#A7ADB2";
    document.querySelector("#entryText6").style.color = f ? "#81EEF5" : "#A7ADB2";
    document.querySelector("#entryText7").style.color = g ? "#8A81F5" : "#A7ADB2";
    document.querySelector("#entryText8").style.color = h ? "#F381F5" : "#A7ADB2";
}

function getCurrentMode(){
    return currentMode;
}

function setMode(modeNum){
    switch(modeNum){
        case 0: // MAP
            currentMode = 0;
            setColorIcon(1,0,0,0,0,0,0,0);
            setColorText(true,false,false,false,false,false,false,false);
            document.querySelectorAll(".single-stat-container")[0].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[0].innerHTML = "Cable Management System";
            document.querySelectorAll(".single-stat-container")[1].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[1].innerHTML = "Axle Counters";
            document.querySelectorAll(".single-stat-container")[2].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[2].innerHTML = "Signals";
            document.querySelectorAll(".single-stat-container")[3].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[3].innerHTML = "Switches";
            document.querySelectorAll(".single-stat-container")[4].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[4].innerHTML = "Wayside Radio Units";
            document.querySelectorAll(".single-stat-container")[5].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[5].innerHTML = "Z-Cases";
            document.querySelectorAll(".single-stat-container")[6].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[6].innerHTML = "Train Operator Push Buttons";
            setOverallProgress("GENERAL");
            break;
        case 1: // CMS
            currentMode = 1;
            setColorIcon(0,1,0,0,0,0,0,0);
            setColorText(false,true,false,false,false,false,false,false);
            document.querySelectorAll(".single-stat-container")[0].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[0].innerHTML = "Messenger Installation";
            document.querySelectorAll(".single-stat-container")[1].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[1].innerHTML = "15\" CMRS Installation";
            document.querySelectorAll(".single-stat-container")[2].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[2].innerHTML = "24\" CMRS Installation";
            document.querySelectorAll(".single-stat-container")[3].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[3].innerHTML = "Cable Tray Installation";
            document.querySelectorAll(".single-stat-container")[4].style.display = "None";
            document.querySelectorAll(".single-stat-container")[5].style.display = "None";
            document.querySelectorAll(".single-stat-container")[6].style.display = "None";
            break;
        case 2: // AXLE COUNTER
            currentMode = 2;
            setColorIcon(0,0,1,0,0,0,0,0);
            setColorText(false,false,true,false,false,false,false,false);
            document.querySelectorAll(".single-stat-container")[0].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[0].innerHTML = "Axle Counter Installation";
            document.querySelectorAll(".single-stat-container")[1].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[1].innerHTML = "JB Installation";
            document.querySelectorAll(".single-stat-container")[2].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[2].innerHTML = "Line Cable Installation";
            document.querySelectorAll(".single-stat-container")[3].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[3].innerHTML = "Express Cable Installation";
            document.querySelectorAll(".single-stat-container")[4].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[4].innerHTML = "Pre-Operation Testing";
            document.querySelectorAll(".single-stat-container")[5].style.display = "None";
            document.querySelectorAll(".single-stat-container")[6].style.display = "None";
            setAXCProgress("GENERAL");
            break;
        case 3: // SIGNALS
            currentMode = 3;
            setColorIcon(0,0,0,1,0,0,0,0);
            setColorText(false,false,false,true,false,false,false,false);
            document.querySelectorAll(".single-stat-container")[0].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[0].innerHTML = "Signal Installation";
            document.querySelectorAll(".single-stat-container")[1].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[1].innerHTML = "Signal JB Installation";
            document.querySelectorAll(".single-stat-container")[2].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[2].innerHTML = "Stop Machine Installation";
            document.querySelectorAll(".single-stat-container")[3].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[3].innerHTML = "Line Cable Installation";
            document.querySelectorAll(".single-stat-container")[4].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[4].innerHTML = "Breakdown Testing";
            document.querySelectorAll(".single-stat-container")[5].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[5].innerHTML = "Pre-Operation Testing";
            document.querySelectorAll(".single-stat-container")[6].style.display = "None";
            setSignalProgress("GENERAL");
            break;
        case 4: // SWITCHES
            currentMode = 4;
            setColorIcon(0,0,0,0,1,0,0,0);
            setColorText(false,false,false,false,true,false,false,false);
            document.querySelectorAll(".single-stat-container")[0].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[0].innerHTML = "Switch Machine Installation";
            document.querySelectorAll(".single-stat-container")[1].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[1].innerHTML = "Switch JB Installation";
            document.querySelectorAll(".single-stat-container")[2].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[2].innerHTML = "Switch Cable Installation";
            document.querySelectorAll(".single-stat-container")[3].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[3].innerHTML = "Line Cable Installation";
            document.querySelectorAll(".single-stat-container")[4].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[4].innerHTML = "Breakdown Testing";
            document.querySelectorAll(".single-stat-container")[5].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[5].innerHTML = "Pre-Operation Testing";
            document.querySelectorAll(".single-stat-container")[6].style.display = "None";
            setSwitchProgress("GENERAL");
            break;
        case 5: //WRUS
            currentMode = 5;
            setColorIcon(0,0,0,0,0,1,0,0);
            setColorText(false,false,false,false,false,true,false,false);
            document.querySelectorAll(".single-stat-container")[0].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[0].innerHTML = "Radio Unit Installation";
            document.querySelectorAll(".single-stat-container")[1].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[1].innerHTML = "Power JB Installation";
            document.querySelectorAll(".single-stat-container")[2].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[2].innerHTML = "Fiber Box Installation";
            document.querySelectorAll(".single-stat-container")[3].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[3].innerHTML = "Antenna Installation";
            document.querySelectorAll(".single-stat-container")[4].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[4].innerHTML = "Antenna Cable Installation";
            document.querySelectorAll(".single-stat-container")[5].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[5].innerHTML = "Splitter Installation";
            document.querySelectorAll(".single-stat-container")[6].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[6].innerHTML = "Fiber Cable Splicing";
            setWRUProgress("GENERAL");
            // MORE TO BE ADDED
            break;
        case 6: // Z CASE
            currentMode = 6;
            setColorIcon(0,0,0,0,0,0,1,0);
            setColorText(false,false,false,false,false,false,true,false);
            document.querySelectorAll(".single-stat-container")[0].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[0].innerHTML = "CASE Install";
            document.querySelectorAll(".single-stat-container")[1].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[1].innerHTML = "Cable Connection/Termination";
            document.querySelectorAll(".single-stat-container")[2].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[2].innerHTML = "Pre-Op Testing";
            document.querySelectorAll(".single-stat-container")[3].style.display = "None";
            document.querySelectorAll(".single-stat-container")[4].style.display = "None";
            document.querySelectorAll(".single-stat-container")[5].style.display = "None";
            document.querySelectorAll(".single-stat-container")[6].style.display = "None";
            setZCaseProgress("GENERAL");
            break;
        case 7: // TOPB
            currentMode = 7;
            setColorIcon(0,0,0,0,0,0,0,1);
            setColorText(false,false,false,false,false,false,false,true);
            document.querySelectorAll(".single-stat-container")[0].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[0].innerHTML = "TOPB Install";
            document.querySelectorAll(".single-stat-container")[1].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[1].innerHTML = "Cable Connection/Termination";
            document.querySelectorAll(".single-stat-container")[2].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[2].innerHTML = "Pre-Op Testing";
            document.querySelectorAll(".single-stat-container")[3].style.display = "None";
            document.querySelectorAll(".single-stat-container")[4].style.display = "None";
            document.querySelectorAll(".single-stat-container")[5].style.display = "None";
            document.querySelectorAll(".single-stat-container")[6].style.display = "None";
            setTOPBProgress("GENERAL");
            break;
    } 
}
//////////////////////////////////////////// CODE EXECUTION START ////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    setOverallProgress("GENERAL");
    setMode(0);
});

