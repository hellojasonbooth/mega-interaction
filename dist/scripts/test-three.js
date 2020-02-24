
let imgs

function preload() {
    imgs = loadImage("img/m.png")
}

let x 
let y 
let speed
let radiusX
let radiusY

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight)
    position = createVector(200, 200)

    speed = createVector(4, 4)

    x = 100
    y = 100
    dimX = imgs.width
    dimY = imgs.height
    canvas.parent('interaction')
}

function draw() {
    background('#1b1b1b12')
    fill('#fff')

    image(imgs, x, y)

    x = x + speed.x
    y = y + speed.y
  
    if (x + dimX >= width){
        speed.x = speed.x * -1
    } else if (x <= 0) {
        speed.x = speed.x * -1
    }

    if (y + dimY >= height){
        speed.y = speed.y * -1
    } else if (y <= 0) {
        speed.y = speed.y * -1
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}