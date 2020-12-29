function MovingObject(object){
    this.pos = object.pos;
    this.vel = object.vel;
    this.radius = object.radius;
    this.color = object.color;
}

MovingObject.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill()
    ctx.stroke();
}

MovingObject.prototype.move = function(ctx){
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.draw(ctx);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
}






module.exports = MovingObject;