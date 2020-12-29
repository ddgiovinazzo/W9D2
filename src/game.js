const Asteroid = require("./asteroid")

function Game(){
    // DIM_X
    // DIM_Y
    NUM_ASTEROIDS = 5
    this.asteroids = []
    this.addAsteroids()
}

Game.prototype.addAsteroids = function(){
    while(this.asteroids.length < NUM_ASTEROIDS){
        this.asteroids.push(new Asteroid(this.randomPosition()))
    }
}

Game.prototype.randomPosition = function(){
    return [Math.random() * 1000, Math.random() * 600] 
}

Game.prototype.draw= function(ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.asteroids.forEach(function(asteroid){
        asteroid.draw(ctx)
    })
}

Game.prototype.moveObjects = function(ctx){
    this.asteroids.forEach(function(asteroid){
        asteroid.move(ctx)
    })
}

module.exports = Game;