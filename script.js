var bubble = " ";

for (var i = 1; i <= 160; i++) {
    var rn = Math.floor(Math.random() * 10);
    bubble += `<div id="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = bubble;