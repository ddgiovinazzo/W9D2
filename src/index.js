console.log("Hello there");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./util.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;

window.Util = Util;

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [1, 1],
    //     radius: 5,
    //     color: "#00FF00"
    // });
    // const mo2 = new MovingObject({
    //     pos: [500, 300],
    //     vel: [10, 10],
    //     radius: 300,
    //     color: "red"
    // });
    // const a = new Asteroid([500, 300]);
    // mo2.draw(ctx);
    // a.draw(ctx);
    // setInterval(mo.move.bind(a,canvas,ctx), 10);
});