

let speedX
let speedY
let dimX
let dimY
let imgs

function preload() {
    imgs = loadImage("img/m.png")
}



function LetterMove(x, y) {

    this.x = x
    this.y = y

    this.speedX = 5
    this.speedY = 5

    imgs.width = imgs.width / 2
    imgs.height = imgs.height / 2

    this.history = []

    this.update = function() {

        this.x = this.x + this.speedX
        this.y = this.y + this.speedY

        let v = createVector(this.x, this.y)
        this.history.push(v)

        if (this.history.length > 180) {
            this.history.splice(0, 1)
        }

        // create bounce bounds
        if (this.x >= width - imgs.width){
            this.speedX = -this.speedX
        } else if (this.x <= 0) {
            this.speedX = -this.speedX
        }

        if (this.y >= height - imgs.height){
            this.speedY = -this.speedY
        } else if (this.y <= 0) {
            this.speedY = -this.speedY
        }


    }

    this.show = function() {
        image(imgs, this.x, this.y,)

        for (var i = 0; i < this.history.length; i++) {
            var pos = this.history[i]
            image(imgs, pos.x, pos.y)
        }
    }


}

var LetterMove
function setup() {
    pixelDensity(2.0)
    createCanvas(windowWidth, windowHeight)
    LetterMove = new LetterMove(80, 80)
}

function draw() {
    background('#1b1b1b')
    LetterMove.update()
    LetterMove.show()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}