const Util = require("./util.js");
const MovingObject = require("./moving_object.js");


function Asteroid(pos){
    Util.inherits(Asteroid, MovingObject)
    COLOR = "blue"
    RADIUS = "25"
    MovingObject.call(this, 
        {pos: pos, color: COLOR, radius: RADIUS , vel: Util.randomVec(5)
        })
}



module.exports = Asteroid;