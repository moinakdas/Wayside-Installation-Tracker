let isFilterWindowVisible = true;

let interlockingVisibility = [true,true,true];
let interlockingId = ["interlocking-1","interlocking-2","interlocking-3"];
let currentTrack = [false,false,false,false,false];
let trackId = ["track-E1","track-E2","track-E3","track-E4","track-E5"];
let trackOrInterlocking = true; //true --> interlocking, false --> track

function getInterlockingVisibility(){
    return interlockingVisibility;
}

const reqInterlockingUpdate = new CustomEvent('reqInterlockingUpdate', {
    bubbles: true,
    cancelable: true,
});

function toggleFilterWindow(){
    let filterWindow = document.querySelector("#filter-window");
    let filterLabel = document.querySelector("#filterLabel");
    let filterIcon = document.querySelector("#filterIcon");

    if(isFilterWindowVisible){
        filterWindow.style.opacity = 0;
        filterLabel.style.color = "#A7ADB2";
        filterIcon.style.opacity = 0;
        setTimeout(() => {
            filterWindow.style.display = "none";
        }, 300); // Adjust the duration to match your CSS transition time
        isFilterWindowVisible = false;
    }else{
        filterWindow.style.display = "flex";
        setTimeout(() => {
            filterWindow.style.opacity = 1;
            filterLabel.style.color = "#8AF581";
            filterIcon.style.opacity = 1;
        }, 50); // Delay the fade-in to allow display change to take effect
        isFilterWindowVisible = true;
    }
}

//expects 2 integers
function setFilter(filterType,filter){
    switch(filterType){
        case 0: // interlocking
            trackOrInterlocking = true;
            document.getElementById(trackId[0]).style.backgroundColor = "rgb(39, 40, 48)";
            document.getElementById(trackId[1]).style.backgroundColor = "rgb(39, 40, 48)";
            document.getElementById(trackId[2]).style.backgroundColor = "rgb(39, 40, 48)";
            document.getElementById(trackId[3]).style.backgroundColor = "rgb(39, 40, 48)";
            document.getElementById(trackId[4]).style.backgroundColor = "rgb(39, 40, 48)";
            currentTrack = [false,false,false,false,false];

            interlockingVisibility[filter] = !interlockingVisibility[filter]
        
            if(document.getElementById(interlockingId[filter]).style.backgroundColor == "rgb(31, 31, 38)"){
                document.getElementById(interlockingId[filter]).style.backgroundColor = "rgb(39, 40, 48)";
            }else{
                document.getElementById(interlockingId[filter]).style.backgroundColor = "rgb(31, 31, 38)";
                console.log(document.getElementById(interlockingId[filter]).style.backgroundColor);
            }
            document.dispatchEvent(reqInterlockingUpdate);
            break
        case 1: // track
            trackOrInterlocking = false;
            document.getElementById(interlockingId[0]).style.backgroundColor = "rgb(39, 40, 48)";
            document.getElementById(interlockingId[1]).style.backgroundColor = "rgb(39, 40, 48)";
            document.getElementById(interlockingId[2]).style.backgroundColor = "rgb(39, 40, 48)";
            interlockingVisibility = [true,true,true]//interlockingVisibility = [false,false,false]

            currentTrack[filter] = !currentTrack[filter]
            if(document.getElementById(trackId[filter]).style.backgroundColor == "rgb(31, 31, 38)"){
                document.getElementById(trackId[filter]).style.backgroundColor = "rgb(39, 40, 48)";
            }else{
                document.getElementById(trackId[filter]).style.backgroundColor = "rgb(31, 31, 38)";
            }
            document.dispatchEvent(reqInterlockingUpdate);
            break
    }
}

$(document).ready(function() {
    $('[id^="option"]').hover(function() {
        if( parseInt(id) - 1 != getCurrentMode()){
            var id = $(this).attr('id').replace('option', ''); // Extract the number from the id
            var highlightColor = $(this).data('highlight-color'); // Get the highlight color from data attribute
            $('#entryText' + id).stop().animate({ color: highlightColor }, 200);
            $('#icon' + id).stop().animate({ opacity: 1 }, 200);
        }
    }, function() {
        var id = $(this).attr('id').replace('option', ''); // Extract the number from the id
        if( parseInt(id) - 1 != getCurrentMode()){
            $('#entryText' + id).stop().animate({ color: '#A7ADB2' }, 200);
            $('#icon' + id).stop().animate({ opacity: 0 }, 200);
        }
    });
    toggleFilterWindow();

    document.getElementById("option9").addEventListener("mouseover", function() {
        document.querySelector("#filterLabel").style.color = "#8AF581";
        document.querySelector("#filterIcon").style.opacity = 1;
    });
    setFilter(0,0);
    setFilter(0,1);
    setFilter(0,2);
});