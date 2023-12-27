const canvas = document.getElementById("canvas")
const body = document.querySelector("body")

ctx = canvas.getContext("2d")

const canvasWidth = 500
const canvasHeight = 400

canvas.width = canvasWidth
canvas.height = canvasHeight

ctx.fillRect(0,0,canvasWidth,canvasHeight)