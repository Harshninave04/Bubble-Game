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
// For this we are adding this code into one function so it'll become easy to access
// and it's the best way or best practice of writing JS !!

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
            // But as soon as the timeInterval gets stop we have to finish the game so for that
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`

        }
    }, 1000)
}

// this function is giving the new hit for functioning
// Inside this function there is a variable called rn which is giving the random number
// Initializig the rn outside so that we can easily get access to that variabe outside
var rn;
function getNewHit() {
    rn = Math.floor(Math.random() * 10); // Random Number
    document.querySelector("#hitval").textContent = rn;
}

var score = 0;
// this function is use to increase the score by 10
function increaseScore() {
    score = score + 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").
    addEventListener("click", function (details) {
        // console.log(details.target.textContent);
        // details.target => fetched the div where it was targeted
        // details.target.textContent => It fetch the value only which div holds

        // But there is a problem we have to match the fetch number with the hit value but we are not getting number from the above console line (It is giving the string and to convert that string into the number we have to use Number();)
        // we saved that detail into one variable called clickedNumber

        var clickedNumber = Number(details.target.textContent);
        if (clickedNumber === rn) {
            increaseScore();
            // This function is used to increase the score by 10 which we already have initialized 
            makeBubble();
            getNewHit();

            // Conclusion about this scope is we are increasing the score until we click the exact hit then after increasing the score we are changing the bubbles and getting new hit !!
        }
    })


getNewHit();
runTimer();
makeBubble();
