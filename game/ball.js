class ball {
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
        this.x += vx*deltaTime
        this.y += vy*deltaTime
    }
}