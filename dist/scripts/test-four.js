

function Particle(x, y) {

    this.x = x
    this.y = y

    this.yspeed = 3
    this.xspeed = 3


    this.history = []

    this.update = function() {
        this.x = this.x + this.xspeed
        this.y = this.y + this.yspeed

        // create vector for the x and y
        const v = createVector(this.x, this.y)
        this.history.push(v)
        console.log(this.history.length)
        // limit the amount in the history
        if (this.history.length > 180) {
            this.history.splice(0, 1)
        }

        // create bounce bounds
        if (this.x >= width - 80){
            this.xspeed = -this.xspeed
        } else if (this.x <= 0) {
            this.xspeed = -this.xspeed
        }

        if (this.y >= height - 80){
            this.yspeed = -this.yspeed
        } else if (this.y <= 0) {
            this.yspeed = -this.yspeed
        }

    }

    this.show = function() {
        stroke(0)
        fill(0, 150)
        rect(this.x, this.y, 80, 80)

        for (var i = 0; i < this.history.length; i++) {
            var pos = this.history[i]
            stroke('#ffff00')
            rect(pos.x, pos.y, 80, 80)
        }

    }

}


var particle

function setup() {
    createCanvas(windowWidth, windowHeight)
    particle = new Particle(80, 80)
}

function draw() {
    background(200)
    particle.update()
    particle.show()
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}



