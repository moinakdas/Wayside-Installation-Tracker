//eel.init();
//eel.expose(setOverallProgress);

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
        
        default:
            eel.calcProgressByLocation(location,"CMRS")().then((r) => {
                document.querySelector('.percentage-label').innerHTML = formatPercent(r);
                document.querySelector(".progress-bar").style.width = formatPercent(r);
            });
            eel.calcProgressByLocation(location,"AXC")().then((r) => {
                document.querySelectorAll('.percentage-label')[1].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[1].style.width = formatPercent(r);
            });
            eel.calcProgressByLocation(location,"SIGNAL")().then((r) => {
                document.querySelectorAll('.percentage-label')[2].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[2].style.width = formatPercent(r);
            });
            eel.calcProgressByLocation(location,"SWITCH")().then((r) => {
                document.querySelectorAll('.percentage-label')[3].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[3].style.width = formatPercent(r);
            });
            eel.calcProgressByLocation(location,"WRU")().then((r) => {
                document.querySelectorAll('.percentage-label')[4].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[4].style.width = formatPercent(r);
            });
            eel.calcProgressByLocation(location,"ZCase")().then((r) => {
                document.querySelectorAll('.percentage-label')[5].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[5].style.width = formatPercent(r);
            });
            eel.calcProgressByLocation(location,"TOPB")().then((r) => {
                document.querySelectorAll('.percentage-label')[6].innerHTML = formatPercent(r);
                document.querySelectorAll(".progress-bar")[6].style.width = formatPercent(r);
            });
    }
        // .then(function(result) {
        //     //document.querySelector('.percentage-label').innerHTML = result + '%';
        //     console.log(result);
        // });
}

function formatPercent(decimal) {
    if (decimal < 0 || decimal > 1) {
        return "Invalid input: decimal must be between 0 and 1";
    }
    const percent = Math.round(decimal * 100);
    return percent.toString() + "%";
}

setOverallProgress("GENERAL");