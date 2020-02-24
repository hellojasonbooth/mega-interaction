
let x 
let y 
let speedX 
let speedY 
let radiusX
let radiusY

let imgs

function preload() {
    imgs = loadImage("../img/m.png")
}

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight)
    position = createVector(200, 200)
    speedX = 5
    speedY = 5
    x = 100
    y = 100
    dimX = imgs.width
    dimY = imgs.height
    canvas.parent('interaction')
}

function draw() {
    background('#1b1b1b55')
    fill('#fff')

    image(imgs, x, y)

    x = x + speedX
    y = y + speedY
  
    if (x + dimX >= width){
        speedX = speedX * -1
    } else if (x <= 0) {
        speedX = speedX * -1
    }

    if (y + dimY >= height){
        speedY = speedY * -1
    } else if (y <= 0) {
        speedY = speedY * -1
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}