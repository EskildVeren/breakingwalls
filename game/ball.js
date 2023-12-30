class Ball extends GameObject{
    constructor(x, y, width, height, vx, vy) {
        super(x, y, width, height)
        this.vx = vx
        this.vy = vy
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