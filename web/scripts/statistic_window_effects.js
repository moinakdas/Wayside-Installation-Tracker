eel.init();
eel.expose(setOverallProgress);

function setOverallProgress(equipmentType) {
    eel.calcOverallProgressByType(equipmentType)
        .then(function(result) {
            document.querySelector('.percentage-label').innerHTML = result + '%';
        });
}