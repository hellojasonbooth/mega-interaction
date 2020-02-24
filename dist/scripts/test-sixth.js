

let speedX
let speedY

let imgs

let letters = []

function preload() {
    for (let i = 0; i < 4; i++) {
        letters[i] = loadImage(`img/letter${i}.png`)
    }
}



function LetterMove(x, y) {

    this.x = x
    this.y = y

    this.speedX = 5
    this.speedY = 5

    // half the size of each letter for
    // retina screens
    for (let i = 0; i < 4; i++) {
        letters[i].width = letters[i].width / 2
        letters[i].height = letters[i].height / 2
    }

    // create an array that holds data for 
    // the history of previous positions
    this.history = []

    this.update = function() {

        this.x = this.x + this.speedX
        this.y = this.y + this.speedY

        
        let v = createVector(this.x, this.y)
        this.history.push(v)
        // cap how many you want to see
        if (this.history.length > 180) {
            this.history.splice(0, 1)
        }

        // create wall bounds
        if (this.x >= width - letters[3].width) {
            this.speedX = -this.speedX
        } else if (this.x <= 0) {
            this.speedX = -this.speedX
        }

        if (this.y >= height - letters[3].height) {
            this.speedY = -this.speedY
        } else if (this.y <= 0) {
            this.speedY = -this.speedY
        }

    }

    this.show = function() {
        image(letters[2], this.x, this.y,)

        for (var i = 0; i < this.history.length; i++) {
            var pos = this.history[i]
            image(letters[2], pos.x, pos.y,)
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

    // cursor stuff
    fill('#fea8c5')
    noStroke()
    circle(mouseX, mouseY, 26, 26)
}

// function mouseclicked() {
//     clicked()
// }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}