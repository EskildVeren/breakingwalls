class Player extends GameObject{
    constructor(x, y, width, height, vx) {
        super(x, y, width, height)
        this.vx = vx
    }   

    move(deltaTime, direction) {
        if (direction == "right") {
            this.x += this.vx * deltaTime
        }
        else if (direction == "left") {
            this.x -= this.vx * deltaTime
        }
        if (this.x < 0) {
            this.x = 0
        }
        if (this.x > canvasWidth - this.width) {
            this.x = canvasWidth - this.width
        }
    }
}