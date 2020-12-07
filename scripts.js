// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeOffButton = null;
let landButton = null;
let missionAbortButton = null;
let upButton = null;
let downButton = null;
let leftButton = null;
let rightButton = null;

function init() {
    takeOffButton = document.getElementById("takeoff");
    landButton = document.getElementById("landing");
    missionAbortButton = document.getElementById("missionAbort");
    // upButton = document.getElementById("up");
    // downButton = document.getElementById("down");
    // leftButton = document.getElementById("left");
    // rightButton = document.getElementById("right");
    console.log("page is fully loaded");
    let counter = 0;

    takeOffButton.addEventListener("click", (e) => {   
     let response = window.confirm("Confirm that the shuttle is ready for takeoff!");
     if (response === true) {
        counter += 10000
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = counter;
     }
    });

    landButton.addEventListener("click", (e) => {
        counter = 0;
        let response = window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = counter;
    });

    missionAbortButton.addEventListener("click", (e) => {
        counter = 0;
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response === true) {
           document.getElementById("flightStatus").innerHTML = "Mission aborted.";
           document.getElementById("shuttleBackground").style.backgroundColor = "green";
           document.getElementById("spaceShuttleHeight").innerHTML = counter;
        }
    });

    // const moveDirection = () => {

    // }

    // upButton.addEventListener("click", (e) => {  
    //     console.log("clicked up button");
    // });


    const directionBtns = Array.from(
        document.getElementsByClassName('direction-btn')
    );

    const getNumbersFromTranslate = (translateStr) => {
        if (!translateStr) {
            return [0, 0];
        }
        return translateStr
            .substring(10, translateStr.length - 1)
            .replace(/px/g, '')
            .split(', ')
            .map((numStr) => Number(numStr));
        };
    
    const moveDirection = (e) => {
        let [currentX, currentY] = getNumbersFromTranslate(
            rocket.style.transform
        );
            const moveX = Number(e.target.dataset.xmovement) || 0;
            const moveY = Number(e.target.dataset.ymovement) || 0;
            rocket.style.transform = `translate(${currentX + moveX}px, ${currentY + moveY}px)`;
        };
        
        directionBtns.forEach((directionBtn) => {
            directionBtn.addEventListener('click', moveDirection);
        });
}


window.onload = init;