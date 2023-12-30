class Ball {
    constructor(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.width = 10
        this.height = 10
    }
    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    move(deltaTime) {
        this.x += this.vx*deltaTime
        this.y += this.vy*deltaTime
        if (this.x < 0) {
            this.x = 0
            this.vx *= -1
        }
        if (this.x > canvasWidth - this.width) {
            this.x = canvasWidth - this.width
            this.vx *= -1
        }
        if (this.y < 0) {
            this.y = 0
            this.vy *= -1
        }
        if (this.y > canvasHeight - this.height) {
            this.y = canvasHeight - this.height
            this.vy *= -1
        }
    }
}