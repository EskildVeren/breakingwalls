class Player {
    constructor(x, y, width, height, vx) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
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

    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}