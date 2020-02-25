const canvasTag = document.querySelector("section canvas")

canvasTag.width = window.innerWidth * 2
canvasTag.height = window.innerHeight * 2

canvasTag.style.width = window.innerWidth + "px"
canvasTag.style.height = window.innerHeight + "px"

const context = canvasTag.getContext("2d")
context.scale(2, 2)

let aimX = window.innerWidth / 2
let aimY = window.innerHeight / 2
let currentX = 0
let currentY = 0

let positions = []

let i = 0
const images = ["img/letter0.png", "img/letter1.png", "img/letter2.png", "img/letter3.png"].map(src => {
  const image = document.createElement("img")
  image.src = src
  return image
})

document.addEventListener("mousemove", function (event) {
  aimX = event.pageX
  aimY = event.pageY
  if (currentX === 0) {
    currentX = event.pageX
    currentY = event.pageY
  }

})

document.addEventListener("touchmove", function (event) {
    aimX = event.pageX
    aimY = event.pageY
    if (currentX === 0) {
      currentX = event.pageX
      currentY = event.pageY
    }
  
  })



function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the image)
    const w = window.innerWidth - images[0].width
    const h = window.innerHeight - images[0].height

    const nw = Math.floor(Math.random() * w)
    const nh = Math.floor(Math.random() * h)
    
    return [nw, nh]
 
}


function moveImage() {

    let newq = makeNewPosition()

    currentX = aimX + newq[0]
    currentY = aimY + newq[1]

    console.log(newq[0], newq[1])

}

moveImage()

setInterval(function() {
    // moveImage()
    i = i + 1
    if (i >= images.length) {
        i = 0
    }
}, 2000)


const draw = function () {

    if (currentX) {    
        currentX = currentX + (aimX - currentX) * 0.1
        currentY = currentY + (aimY - currentY) * 0.1

    // work out the distance between current place and aim
    const dist = Math.sqrt(Math.pow(currentX - aimX, 2) + Math.pow(currentY - aimY, 2))

    // if enough distance, add it the list
    // if (dist > 0.01) {
        // save current images, x and y position as array
        positions.push([images[i], currentX, currentY])
    // }

    }
  
    // only the last 100
    positions = positions.slice(-50)
    
    // remove EVERYTHING
    context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    
    // and redraw based on the last 50 positions
    positions.forEach(pos => {
            context.drawImage(pos[0], pos[1] - 200, pos[2] - 300, 406, 436)
    })
    
    requestAnimationFrame(draw)
}

draw()



// window.addEventListener('resize', function (){

//     canvasTag.width = window.innerWidth * 2
//     canvasTag.height = window.innerHeight * 2

// })


