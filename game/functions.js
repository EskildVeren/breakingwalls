
let direction = null

function playerInput(e) {
    //console.log(e.key);
    if (e.key == "ArrowLeft") {
        direction = "left"
    }
    if (e.key == "ArrowRight") {
        direction = "right"
    }
}

function resetInput(e) {
    if (e.key == "ArrowLeft" && direction == "left") {
        direction = null
    }
    if (e.key == "ArrowRight" && direction == "right") {
        direction = null
    }
}

body.addEventListener("keydown", playerInput)
body.addEventListener("keyup", resetInput)


function checkBallPlayerCollission(player, ball) {
    if (xCollission(ball, player) && yCollission(ball, player)) {
        ball.vy = -Math.abs(ball.vy)
    }
}

function xCollission(object1, object2) {
    if ((object1.x + object1.width > object2.x) && (object1.x < object2.x + object2.width)) {
        return true
    }
    return false
}

function yCollission(object1, object2) {
    if ((object1.y + object1.height > object2.y) && (object1.y < object2.y + object2.height)) {
        return true   
    }
    return false
}

function checckBallCollission() {
    
}