
let direction = null

function playerInput(e) {
    //console.log(e.key);
    if (e.key == "ArrowLeft") {
        direction = "left"
    }
    if (e.key == "ArrowRight") {
        direction = "right"
    }
    console.log(direction);
}

function resetInput(e) {
    if (e.key == "ArrowLeft" && direction == "left") {
        direction = null
    }
    if (e.key == "ArrowRight" && direction == "right") {
        direction = null
    }
    console.log(direction);
}

body.addEventListener("keydown", playerInput)
body.addEventListener("keyup", resetInput)