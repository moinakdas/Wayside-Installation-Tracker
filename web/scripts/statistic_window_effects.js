
///////////////////////////////////// GLOBAL VARS & FUNCTION DEFINITIONS ///////////////////////////////////////
currentMode = 0; //define current page map = 0, CMS = 1, AXC = 2, SIGNALS = 3, SWITCHES 4, WRU = 5, Z-CASE = 6, TOPB = 7.

eel.expose
function setOverallProgress(location) {
    switch(location){
        case "GENERAL":
            let cmsProg = 0;
            let axcProg = 0;
            let sigProg = 0;
            let switchProg = 0;
            let wruProg = 0;
            let zcaseProg = 0;
            let topbProg = 0;
            let promises = [
                eel.calcOverallProgressByType("CMRS")().then((r) => {
                    document.querySelector('.percentage-label').innerHTML = formatPercent(r);
                    document.querySelector(".progress-bar").style.width = formatPercent(r);
                    document.querySelector(".progress-bar").style.backgroundColor = interpolateColor(r);
                    cmsProg = r;
                }),
                eel.calcOverallProgressByType("AXC")().then((r) => {
                    document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[1].style.width = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r);
                    axcProg = r;
                }),
                eel.calcOverallProgressByType("SIGNAL")().then((r) => {
                    document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[2].style.width = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r);
                    sigProg = r;
                }),
                eel.calcOverallProgressByType("SWITCH")().then((r) => {
                    document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[3].style.width = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[3].style.backgroundColor = interpolateColor(r);
                    switchProg = r;
                }),
                eel.calcOverallProgressByType("WRU")().then((r) => {
                    document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[4].style.width = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[4].style.backgroundColor = interpolateColor(r);
                    wruProg = r;
                }),
                eel.calcOverallProgressByType("ZCase")().then((r) => {
                    document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[5].style.width = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[5].style.backgroundColor = interpolateColor(r);
                    zcaseProg = r;
                }),
                eel.calcOverallProgressByType("TOPB")().then((r) => {
                    document.querySelectorAll('.percentage-label')[6].innerHTML = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[6].style.width = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[6].style.backgroundColor = interpolateColor(r);
                    topbProg = r;
                })
            ];
            Promise.all(promises).then(() => {
                console.log(cmsProg)
                console.log(axcProg)
                console.log(sigProg)
                console.log(switchProg)
                console.log(wruProg)
                console.log(zcaseProg)
                console.log(topbProg)
                total = 0
                numValid = 0
                if(cmsProg != -1 && typeof cmsProg != 'undefined'){
                    total += cmsProg;
                    numValid++;
                }
                if(axcProg != -1 && typeof axcProg != 'undefined'){
                    total += axcProg;
                    numValid++;
                }
                if(sigProg != -1 && typeof sigProg != 'undefined'){
                    total += sigProg;
                    numValid++;
                }
                if(switchProg != -1 && typeof switchProg != 'undefined'){
                    total += switchProg;
                    numValid++;
                }
                if(wruProg != -1 && typeof wruProg != 'undefined'){
                    total += wruProg;
                    numValid++;
                }
                if(zcaseProg != -1 && typeof zcaseProg != 'undefined'){
                    total += zcaseProg;
                    numValid++;
                }
                if(topbProg != -1 && typeof topbProg != 'undefined'){
                    total += topbProg;
                    numValid++;
                }

                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(total/numValid));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(total/numValid);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(total/numValid);
            });
            

            break;
        default:
            eel.calcProgressByLocation(location,"GENERAL")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(r);
            });
            eel.calcProgressByLocation(location,"CMRS")().then((r) => {
                if( r == -1){
                    document.querySelector('.single-stat-container').style.display = "block";
                    document.querySelector('.percentage-label').innerHTML = "--";
                    document.querySelector(".progress-bar").style.width = 0;

                }else{
                    document.querySelector('.single-stat-container').style.display = "block";
                    document.querySelector('.percentage-label').innerHTML = formatPercent(r);
                    document.querySelector(".progress-bar").style.width = formatPercent(r);
                    document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r);
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
                    document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r);
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
                    document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r);
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
                    document.querySelectorAll(".progress-bar")[3].style.backgroundColor = interpolateColor(r);
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
                   document.querySelectorAll(".progress-bar")[4].style.backgroundColor = interpolateColor(r);
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
                    document.querySelectorAll(".progress-bar")[5].style.backgroundColor = interpolateColor(r);
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
                   document.querySelectorAll(".progress-bar")[6].style.backgroundColor = interpolateColor(r);
                }   
            });
            break;
    }
}
const NumToMode = ["GENERAL","CMRS","AXC","SIGNAL","SWITCH","WRU","ZCase","TOPB"];

function sigmoid(x, steepness = 4, midpoint = 0.5) {
    return 1 / (1 + Math.exp(-steepness * (x - midpoint)));
}

function interpolateColor(value) {
    if (value == -1) {
        return "#898B8E";
    }
    const color1 = [205, 34, 34]; // Red
    const color2 = [191, 166, 34]; // Yellow
    const color3 = [42, 163, 23]; // Green

    let color;
    if (value <= 0.5) {
        // Interpolate between color1 and color2 for values <= 0.5
        const newValue = sigmoid(value / 0.5);
        color = interpolate(color1, color2, newValue);
    } else {
        // Interpolate between color2 and color3 for values > 0.5
        const newValue = sigmoid((value - 0.5) / 0.5);
        color = interpolate(color2, color3, newValue);
    }

    // Format the color as rgb
    return `rgb(${Math.round(color[0])},${Math.round(color[1])},${Math.round(color[2])})`;
}

function interpolate(color1, color2, value) {
    // Calculate intermediate color components
    const r = color1[0] + (color2[0] - color1[0]) * value;
    const g = color1[1] + (color2[1] - color1[1]) * value;
    const b = color1[2] + (color2[2] - color1[2]) * value;

    return [r, g, b];
}

function assignColorsByMode(){
    let church, fortham, prospect, seventh, fourth, smith, carroll, bergen, hoyt, fulton, clinton, classon, bedford, myrtle, flushing, broadway, metro, nassau, green, twentyfirst, courtsq;
    let chufor, for15s, street15s7av, street7av4th, street4thsmi, smicar, carber, berhoy, hoyful, fulcli, clicla, clabed, bedmyr, myrflu, fluBro, broMet, metnas, nasgre, gretwentyfirst, twentfirstcou;

    let promises = [
        eel.calcProgressByLocation("CHURCH", NumToMode[currentMode])().then((r) => {
            church = interpolateColor(r);
        }),
        eel.calcProgressByLocation("FORT HAMILTON", NumToMode[currentMode])().then((r) => {
            fortham = interpolateColor(r);
        }),
        eel.calcProgressByLocation("15TH STREET PROSPECT PARK", NumToMode[currentMode])().then((r) => {
            prospect = interpolateColor(r);
        }),
        eel.calcProgressByLocation("7TH AVENUE", NumToMode[currentMode])().then((r) => {
            seventh = interpolateColor(r);
        }),
        eel.calcProgressByLocation("4TH 9TH STREET", NumToMode[currentMode])().then((r) => {
            fourth = interpolateColor(r);
        }),
        eel.calcProgressByLocation("SMITH & 9TH STREET", NumToMode[currentMode])().then((r) => {
            smith = interpolateColor(r);
        }),
        eel.calcProgressByLocation("CARROLL", NumToMode[currentMode])().then((r) => {
            carroll = interpolateColor(r);
        }),
        eel.calcProgressByLocation("BERGEN", NumToMode[currentMode])().then((r) => {
            bergen = interpolateColor(r);
        }),
        eel.calcProgressByLocation("HOYT SCHERMERHORN", NumToMode[currentMode])().then((r) => {
            hoyt = interpolateColor(r);
        }),
        eel.calcProgressByLocation("CLINTON-WASHINGTON", NumToMode[currentMode])().then((r) => {
            clinton = interpolateColor(r);
        }),
        eel.calcProgressByLocation("FULTON", NumToMode[currentMode])().then((r) => {
            fulton = interpolateColor(r);
        }),
        eel.calcProgressByLocation("CLASSON", NumToMode[currentMode])().then((r) => {
            classon = interpolateColor(r);
        }),
        eel.calcProgressByLocation("BEDFORD NOSTRAND", NumToMode[currentMode])().then((r) => {
            bedford = interpolateColor(r);
        }),
        eel.calcProgressByLocation("MYRTLE AVE", NumToMode[currentMode])().then((r) => {
            myrtle = interpolateColor(r);
        }),
        eel.calcProgressByLocation("FLUSHING", NumToMode[currentMode])().then((r) => {
            flushing = interpolateColor(r);
        }),
        eel.calcProgressByLocation("BROADWAY", NumToMode[currentMode])().then((r) => {
            broadway = interpolateColor(r);
        }),
        eel.calcProgressByLocation("METROPOLITAN", NumToMode[currentMode])().then((r) => {
            metro = interpolateColor(r);
        }),
        eel.calcProgressByLocation("NASSAU", NumToMode[currentMode])().then((r) => {
            nassau = interpolateColor(r);
        }),
        eel.calcProgressByLocation("GREENPOINT", NumToMode[currentMode])().then((r) => {
            green = interpolateColor(r);
        }),
        eel.calcProgressByLocation("21ST STATION", NumToMode[currentMode])().then((r) => {
            twentyfirst = interpolateColor(r);
        }),
        eel.calcProgressByLocation("COURT SQ", NumToMode[currentMode])().then((r) => {
            courtsq = interpolateColor(r);
        }),
        eel.calcProgressByLocation("CHU-FOR", NumToMode[currentMode])().then((r) => {
            chufor = interpolateColor(r);
        }),
        eel.calcProgressByLocation("CHU-FOR", NumToMode[currentMode])().then((r) => {
            chufor = interpolateColor(r);
        }),
        eel.calcProgressByLocation("FOR-15S", NumToMode[currentMode])().then((r) => {
            for15s = interpolateColor(r);
        }),
        eel.calcProgressByLocation("15S-7AV", NumToMode[currentMode])().then((r) => {
            street15s7av = interpolateColor(r);
        }),
        eel.calcProgressByLocation("7AV-4TH", NumToMode[currentMode])().then((r) => {
            street7av4th = interpolateColor(r);
        }),
        eel.calcProgressByLocation("4TH-SMI", NumToMode[currentMode])().then((r) => {
            street4thsmi = interpolateColor(r);
        }),
        eel.calcProgressByLocation("SMI-CAR", NumToMode[currentMode])().then((r) => {
            smicar = interpolateColor(r);
        }),
        eel.calcProgressByLocation("CAR-BER", NumToMode[currentMode])().then((r) => {
            carber = interpolateColor(r);
        }),
        eel.calcProgressByLocation("BER-HOY", NumToMode[currentMode])().then((r) => {
            berhoy = interpolateColor(r);
        }),
        eel.calcProgressByLocation("HOY-FUL", NumToMode[currentMode])().then((r) => {
            hoyful = interpolateColor(r);
        }),
        eel.calcProgressByLocation("FUL-CLI", NumToMode[currentMode])().then((r) => {
            fulcli = interpolateColor(r);
        }),
        eel.calcProgressByLocation("CLI-CLA", NumToMode[currentMode])().then((r) => {
            clicla = interpolateColor(r);
        }),
        eel.calcProgressByLocation("CLA-BED", NumToMode[currentMode])().then((r) => {
            clabed = interpolateColor(r);
        }),
        eel.calcProgressByLocation("BED-MYR", NumToMode[currentMode])().then((r) => {
            bedmyr = interpolateColor(r);
        }),
        eel.calcProgressByLocation("MYR-FLU", NumToMode[currentMode])().then((r) => {
            myrflu = interpolateColor(r);
        }),
        eel.calcProgressByLocation("FLU-BRO", NumToMode[currentMode])().then((r) => {
            fluBro = interpolateColor(r);
        }),
        eel.calcProgressByLocation("BRO-MET", NumToMode[currentMode])().then((r) => {
            broMet = interpolateColor(r);
        }),
        eel.calcProgressByLocation("MET-NAS", NumToMode[currentMode])().then((r) => {
            metnas = interpolateColor(r);
        }),
        eel.calcProgressByLocation("NAS-GRE", NumToMode[currentMode])().then((r) => {
            nasgre = interpolateColor(r);
        }),
        eel.calcProgressByLocation("GRE-21S", NumToMode[currentMode])().then((r) => {
            gretwentyfirst = interpolateColor(r);
        }),
        eel.calcProgressByLocation("21S-COU", NumToMode[currentMode])().then((r) => {
            twentfirstcou = interpolateColor(r);
        })
    ];
    Promise.all(promises).then(() => {
        updateStationColors(church, fortham, prospect, seventh, fourth, smith, carroll, bergen, hoyt, fulton, clinton, classon, bedford, myrtle, flushing, broadway, metro, nassau, green, twentyfirst, courtsq);
        updateTunnelColors(chufor, for15s, street15s7av, street7av4th, street4thsmi, smicar, carber, berhoy, hoyful, fulcli, clicla, clabed, bedmyr, myrflu, fluBro, broMet, metnas, nasgre, gretwentyfirst, twentfirstcou);
        document.dispatchEvent(reqDraw);
    });
    
}

function updateProgress(endAngle) {
    console.log(endAngle);
    startAngle = 0;
    var radius = 2.7;
    var circumference = 2 * Math.PI * radius;
    var dashOffset = circumference * (1 - (endAngle - startAngle) / 360);

    var progress = document.getElementById('progress-ring');
    document.getElementById('progress-ring').style.strokeDasharray = (endAngle - startAngle) + ' ' + (360 - (endAngle - startAngle))
    progress.setAttribute('stroke-dasharray', String(endAngle - startAngle) + 'vw');
    progress.setAttribute('stroke-dashoffset', String(dashOffset) + "vw");
}


function setCMSProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcOverallProgressByType("CMRS")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(r);
            });
            eel.getCMSProgressByCMSType("mess")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r);
            });
            eel.getCMSProgressByCMSType("15CMRS")().then((r) => {
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r);
            });
            eel.getCMSProgressByCMSType("24CMRS")().then((r) => {
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r);
            });
            eel.getCMSProgressByCMSType("tray")().then((r) => {
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r);
                document.querySelectorAll(".progress-bar")[3].style.backgroundColor = interpolateColor(r);
            });
            break;
        default:
            eel.calcProgressByLocation(location,"CMRS")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(r);
            });
            eel.getCMSProgressByStationAndType("mess",location)().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r);
            });
            eel.getCMSProgressByStationAndType("15CMRS",location)().then((r) => {
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r);
            });
            eel.getCMSProgressByStationAndType("24CMRS",location)().then((r) => {
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r);
            });
            eel.getCMSProgressByStationAndType("tray",location)().then((r) => {
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r);
                document.querySelectorAll(".progress-bar")[3].style.backgroundColor = interpolateColor(r);
            });
            break;
    }
}

eel.expose
function setAXCProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcOverallProgressByType("AXC")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress")[0].style.stroke = interpolateColor(r);
            });
            eel.calcAttributeGeneralProgressByEquipType("AXC")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.ACInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.ACInstall);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r.ACInstall);

                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r.JBInstall);

                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.LCInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.LCInstall);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.LCInstall);

                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.ECInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.ECInstall);
                document.querySelectorAll(".progress-bar")[3].style.backgroundColor = interpolateColor(r.ECInstall);

                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[4].style.backgroundColor = interpolateColor(r.preOpTesting);
            });
            break;
        default:
            eel.getEquipmentAttributesByStation(location,"AXC")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.ACInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.ACInstall);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r.ACInstall);

                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r.JBInstall);

                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.LCInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.LCInstall);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.LCInstall);

                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.ECInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.ECInstall);
                document.querySelectorAll(".progress-bar")[3].style.backgroundColor = interpolateColor(r.ECInstall);

                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[4].style.backgroundColor = interpolateColor(r.preOpTesting);

                let avg = 0;
                let numValid = 0;
                if(r.ACInstall > 0 || typeof r.ACInstall != 'undefined'){
                    avg += r.ACInstall;
                    numValid += 1;
                }
                if(r.JBInstall > 0 || typeof r.JBInstall != 'undefined'){
                    avg += r.JBInstall;
                    numValid += 1;
                }
                if(r.LCInstall > 0 || typeof r.LCInstall != 'undefined'){
                    avg += r.LCInstall;
                    numValid += 1;
                }
                if(r.ECInstall > 0 || typeof r.ECInstall != 'undefined'){
                    avg += r.ECInstall;
                    numValid += 1;
                }
                if(r.preOpTesting > 0 || typeof r.preOpTesting != 'undefined'){
                    avg += r.preOpTesting;
                    numValid += 1;
                }
                if(numValid == 0){
                    document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(1));
                    document.querySelector('#general-progress-percent').innerHTML = "--";
                }else{
                    document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(avg/numValid));
                    document.querySelector('#general-progress-percent').innerHTML = formatInteger(avg/numValid);
                    document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(avg/numValid);
                }

            });
            break;
    }
}

function setSignalProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcOverallProgressByType("SIGNAL")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(r);
            });
            eel.calcAttributeGeneralProgressByEquipType("SIGNAL")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.sigInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.sigInstall);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r.sigInstall);

                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r.JBInstall);

                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.SMInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.SMInstall);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.SMInstall);

                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.LCInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.LCInstall);
                document.querySelectorAll(".progress-bar")[3].style.backgroundColor = interpolateColor(r.LCInstall);

                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.breakdownTesting);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.breakdownTesting);
                document.querySelectorAll(".progress-bar")[4].style.backgroundColor = interpolateColor(r.breakdownTesting);

                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercentForWidth(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[5].style.backgroundColor = interpolateColor(r.preOpTesting);
            });
            break;
        default:
            eel.getEquipmentAttributesByStation(location,"SIGNAL")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.sigInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.sigInstall);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r.sigInstall);

                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r.JBInstall);

                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.SMInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.SMInstall);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.SMInstall);

                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.LCInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.LCInstall);
                document.querySelectorAll(".progress-bar")[3].style.backgroundColor = interpolateColor(r.LCInstall);

                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.breakdownTesting);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.breakdownTesting);
                document.querySelectorAll(".progress-bar")[4].style.backgroundColor = interpolateColor(r.breakdownTesting);

                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercentForWidth(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[5].style.backgroundColor = interpolateColor(r.preOpTesting);

                let avg = 0;
                let numValid = 0;
                if(r.sigInstall > 0 || typeof r.sigInstall != 'undefined'){
                    avg += r.sigInstall;
                    numValid += 1;
                }
                if(r.JBInstall > 0 || typeof r.JBInstall != 'undefined'){
                    avg += r.JBInstall;
                    numValid += 1;
                }
                if(r.SMInstall > 0 || typeof r.SMInstall != 'undefined'){
                    avg += r.SMInstall;
                    numValid += 1;
                }
                if(r.LCInstall > 0 || typeof r.LCInstall != 'undefined'){
                    avg += r.LCInstall;
                    numValid += 1;
                }
                if(r.breakdownTesting > 0 || typeof r.breakdownTesting != 'undefined'){
                    avg += r.breakdownTesting;
                    numValid += 1;
                }
                if(r.preOpTesting > 0 || typeof r.preOpTesting != 'undefined'){
                    avg += r.preOpTesting;
                    numValid += 1;
                }
                if(numValid == 0){
                    document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(1));
                    document.querySelector('#general-progress-percent').innerHTML = "--";
                }else{
                    document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(avg/numValid));
                    document.querySelector('#general-progress-percent').innerHTML = formatInteger(avg/numValid);
                    document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(avg/numValid);
                }

            });
            break;
    }
}

function setSwitchProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcOverallProgressByType("SWITCH")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(r);
            });
            eel.calcAttributeGeneralProgressByEquipType("SWITCH")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.switchInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.switchInstall);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r.switchInstall);

                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.JBInstall);

                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.SCInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.SCInstall);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.SCInstall);

                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.LCInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.LCInstall);
                document.querySelectorAll(".progress-bar")[3].style.backgroundColor = interpolateColor(r.LCInstall);

                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.breakdownTesting);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.breakdownTesting);
                document.querySelectorAll(".progress-bar")[4].style.backgroundColor = interpolateColor(r.breakdownTesting);

                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercentForWidth(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[5].style.backgroundColor = interpolateColor(r.preOpTesting);
            });
            break;
        default:
            eel.calcProgressByLocation(location,"SWITCH")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(r);
            });
            eel.getEquipmentAttributesByStation(location,"SWITCH")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.switchInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.switchInstall);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r.switchInstall);

                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r.JBInstall);

                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.SCInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.SCInstall);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.SCInstall);

                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.LCInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.LCInstall);
                document.querySelectorAll(".progress-bar")[3].style.backgroundColor = interpolateColor(r.LCInstall);

                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.breakdownTesting);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.breakdownTesting);
                document.querySelectorAll(".progress-bar")[4].style.backgroundColor = interpolateColor(r.breakdownTesting);

                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercentForWidth(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[5].style.backgroundColor = interpolateColor(r.preOpTesting);

            });
            break;
    }
}

function setWRUProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcOverallProgressByType("WRU")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(r);
            });
            eel.calcAttributeGeneralProgressByEquipType("WRU")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.RUInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.RUInstall);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r.RUInstall);

                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r.JBInstall);

                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.FBInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.FBInstall);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.FBInstall);

                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.antennaInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.antennaInstall);
                document.querySelectorAll(".progress-bar")[3].style.backgroundColor = interpolateColor(r.antennaInstall);

                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.antCableInstall);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.antCableInstall);
                document.querySelectorAll(".progress-bar")[4].style.backgroundColor = interpolateColor(r.antCableInstall);

                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r.splitterInstall);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercentForWidth(r.splitterInstall);
                document.querySelectorAll(".progress-bar")[5].style.backgroundColor = interpolateColor(r.splitterInstall);

                document.querySelectorAll('.percentage-label')[6].innerHTML = formatPercent(r.FCSplicing);
                document.querySelectorAll(".progress-bar")[6].style.width = formatPercentForWidth(r.FCSplicing);
                document.querySelectorAll(".progress-bar")[6].style.backgroundColor = interpolateColor(r.FCSplicing);

                document.querySelectorAll('.percentage-label')[7].innerHTML = formatPercent(r.FTesting);
                document.querySelectorAll(".progress-bar")[7].style.width = formatPercentForWidth(r.FTesting);
                document.querySelectorAll(".progress-bar")[7].style.backgroundColor = interpolateColor(r.FTesting);

                document.querySelectorAll('.percentage-label')[8].innerHTML = formatPercent(r.PTesting);
                document.querySelectorAll(".progress-bar")[8].style.width = formatPercentForWidth(r.PTesting);
                document.querySelectorAll(".progress-bar")[8].style.backgroundColor = interpolateColor(r.PTesting);

            });
            break;
        default:
            eel.calcProgressByLocation(location,"WRU")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(r);
            });
            eel.getEquipmentAttributesByStation(location,"WRU")().then((r) => {
                console.log(r);
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.RUInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.RUInstall);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r.RUInstall);

                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.JBInstall);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r.JBInstall);

                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.FBInstall);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.FBInstall);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.FBInstall);

                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r.antennaInstall);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercentForWidth(r.antennaInstall);
                document.querySelectorAll(".progress-bar")[3].style.backgroundColor = interpolateColor(r.antennaInstall);

                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r.antCableInstall);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercentForWidth(r.antCableInstall);
                document.querySelectorAll(".progress-bar")[4].style.backgroundColor = interpolateColor(r.antCableInstall);

                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r.splitterInstall);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercentForWidth(r.splitterInstall);
                document.querySelectorAll(".progress-bar")[5].style.backgroundColor = interpolateColor(r.splitterInstall);

                document.querySelectorAll('.percentage-label')[6].innerHTML = formatPercent(r.FCSplicing);
                document.querySelectorAll(".progress-bar")[6].style.width = formatPercentForWidth(r.FCSplicing);
                document.querySelectorAll(".progress-bar")[6].style.backgroundColor = interpolateColor(r.FCSplicing);

                document.querySelectorAll('.percentage-label')[7].innerHTML = formatPercent(r.FTesting);
                document.querySelectorAll(".progress-bar")[7].style.width = formatPercentForWidth(r.FTesting);
                document.querySelectorAll(".progress-bar")[7].style.backgroundColor = interpolateColor(r.FTesting);

                document.querySelectorAll('.percentage-label')[8].innerHTML = formatPercent(r.PTesting);
                document.querySelectorAll(".progress-bar")[8].style.width = formatPercentForWidth(r.PTesting);
                document.querySelectorAll(".progress-bar")[8].style.backgroundColor = interpolateColor(r.PTesting);

            });
            break;
    }
}

function setZCaseProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcOverallProgressByType("ZCase")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(r);
            });
            eel.calcAttributeGeneralProgressByEquipType("ZCase")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.caseInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.caseInstall);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r.caseInstall);

                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.cableConnect);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.cableConnect);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r.cableConnect);

                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.preOpTesting);

            });
            break;
        default:
            eel.calcProgressByLocation(location,"ZCase")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(r);
            });
            eel.getEquipmentAttributesByStation(location,"ZCase")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.caseInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.caseInstall);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r.caseInstall);

                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.cableConnect);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.cableConnect);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r.cableConnect);

                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.preOpTesting);
            });
            break;
    }
}

function setTOPBProgress(location){
    switch(location){
        case "GENERAL":
            eel.calcOverallProgressByType("TOPB")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(r);
            });
            eel.calcAttributeGeneralProgressByEquipType("ZCase")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.TOPBInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.TOPBInstall);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r.TOPBInstall);

                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.cableConnect);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.cableConnect);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r.cableConnect);

                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.preOpTesting);
            });
            break;
        default:
            eel.calcProgressByLocation(location,"TOPB")().then((r) => {
                document.querySelector('.circular-progress').style.setProperty('--progress', formatInteger(r));
                document.querySelector('#general-progress-percent').innerHTML = formatInteger(r);
                document.querySelectorAll(".circular-progress circle.fg")[0].style.stroke = interpolateColor(r);
            });
            eel.getEquipmentAttributesByStation(location,"TOPB")().then((r) => {
                document.querySelectorAll('.percentage-label')[0].innerHTML = formatPercent(r.TOPBInstall);
                document.querySelectorAll(".progress-bar")[0].style.width = formatPercentForWidth(r.TOPBInstall);
                document.querySelectorAll(".progress-bar")[0].style.backgroundColor = interpolateColor(r.TOPBInstall);

                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r.cableConnect);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercentForWidth(r.cableConnect);
                document.querySelectorAll(".progress-bar")[1].style.backgroundColor = interpolateColor(r.cableConnect);

                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercentForWidth(r.preOpTesting);
                document.querySelectorAll(".progress-bar")[2].style.backgroundColor = interpolateColor(r.preOpTesting);
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

function formatInteger(decimal) {
    if (typeof decimal == 'undefined' || decimal < 0) {
        return "--";
    }
    const percent = Math.round(decimal * 100);
    return percent.toString();
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

const reqDraw = new CustomEvent('requestDraw', {
    bubbles: true,
    cancelable: true,
});

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
            document.querySelectorAll(".single-stat-container")[7].style.display = "None";
            document.querySelectorAll(".single-stat-container")[8].style.display = "None";
            document.querySelectorAll("#subtitleHeader")[0].innerHTML = "Wayside Installation Progress";
            setOverallProgress("GENERAL");
            assignColorsByMode();
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
            document.querySelectorAll(".single-stat-container")[7].style.display = "None";
            document.querySelectorAll(".single-stat-container")[8].style.display = "None";
            document.querySelectorAll("#subtitleHeader")[0].innerHTML = "CMS Installation Progress";
            setCMSProgress("GENERAL");
            assignColorsByMode();
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
            document.querySelectorAll(".single-stat-container")[7].style.display = "None";
            document.querySelectorAll(".single-stat-container")[8].style.display = "None";
            document.querySelectorAll("#subtitleHeader")[0].innerHTML = "Axle Counter Installation Progress";
            setAXCProgress("GENERAL");
            assignColorsByMode();
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
            document.querySelectorAll(".single-stat-container")[7].style.display = "None";
            document.querySelectorAll(".single-stat-container")[8].style.display = "None";
            document.querySelectorAll("#subtitleHeader")[0].innerHTML = "Signal Installation Progress";
            setSignalProgress("GENERAL");
            assignColorsByMode();
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
            document.querySelectorAll(".single-stat-container")[7].style.display = "None";
            document.querySelectorAll(".single-stat-container")[8].style.display = "None";
            document.querySelectorAll("#subtitleHeader")[0].innerHTML = "Switch Installation Progress";
            setSwitchProgress("GENERAL");
            assignColorsByMode();
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
            document.querySelectorAll(".single-stat-container")[7].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[7].innerHTML = "Fiber Testing";
            document.querySelectorAll(".single-stat-container")[8].style.display = "Block";
            document.querySelectorAll(".single-stat-title")[8].innerHTML = "Power Testing";
            document.querySelectorAll("#subtitleHeader")[0].innerHTML = "WRU Installation Progress";
            setWRUProgress("GENERAL");
            assignColorsByMode();
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
            document.querySelectorAll(".single-stat-container")[7].style.display = "None";
            document.querySelectorAll(".single-stat-container")[8].style.display = "None";
            document.querySelectorAll(".single-stat-container")[7].style.display = "None";
            document.querySelectorAll(".single-stat-container")[8].style.display = "None";
            document.querySelectorAll("#subtitleHeader")[0].innerHTML = "Z-Case Installation Progress";
            setZCaseProgress("GENERAL");
            assignColorsByMode();
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
            document.querySelectorAll(".single-stat-container")[7].style.display = "None";
            document.querySelectorAll(".single-stat-container")[8].style.display = "None";
            document.querySelectorAll("#subtitleHeader")[0].innerHTML = "TOPB Installation Progress";
            setTOPBProgress("GENERAL");
            assignColorsByMode();
            break;
    } 
}
//////////////////////////////////////////// CODE EXECUTION START ////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    setOverallProgress("GENERAL");
    setMode(0);
    assignColorsByMode();
});

