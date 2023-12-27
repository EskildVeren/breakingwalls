//Timecontrol
const perfectFrameTime = 1000 / 60;
let deltaTime = 0;
let lastTimestamp = 0;
//Creating objects
gameBoard = new GameBoard()
player = new Player(100, 350, 50, 15, 5)
gameBoard.draw()
player.draw()

function main(timestamp) {

    requestAnimationFrame(main)
    deltaTime = (timestamp - lastTimestamp) / perfectFrameTime;
    lastTimestamp = timestamp;


    if (direction != null) {
        player.move(deltaTime, direction)
    }


    gameBoard.draw()
    player.draw()
}



requestAnimationFrame(main)