/*
var bubble = " ";

for (var i = 1; i <= 160; i++) {
    var rn = Math.floor(Math.random() * 10);
    bubble += `<div id="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = bubble;
*/
// with the help of above line we can add bubble in the game
// and if we remove any of the line then bubble will not be form
// For this we are adding this code into one function so it'll be easy to access
// and it's the best way or best practice !!

function makeBubble() {
    var bubble = " ";

    for (var i = 1; i <= 160; i++) {
        var rn = Math.floor(Math.random() * 10);
        bubble += `<div id="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = bubble;

}

// Below function is for running the timer
var timer = 60;
function runTimer() {
    var timeinterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timeinterval)
            // clearInterval is used to stop the timer
        }
    }, 1000)
}

runTimer();
makeBubble();
