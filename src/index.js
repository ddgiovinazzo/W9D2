console.log("Hello there");
const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [1, 1],
        radius: 5,
        color: "#00FF00"
    });
    const mo2 = new MovingObject({
        pos: [500, 300],
        vel: [10, 10],
        radius: 300,
        color: "red"
    });
    mo2.draw(ctx);
    setInterval(mo.move.bind(mo,canvas,ctx), 10);
});