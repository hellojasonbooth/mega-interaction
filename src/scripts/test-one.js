// test one
const canvasTag = document.querySelector("canvas")
canvasTag.width = window.innerWidth * 2
canvasTag.height =window.innerHeight * 2
canvasTag.style.width = window.innerWidth + "px"
canvasTag.style.height = window.innerHeight + "px" 

const context = canvasTag.getContext("2d")
context.scale(2, 2)

const image = document.createElement("img")
image.src = 'img/m.svg'

document.addEventListener('mousemove', function(event) {
  if (image.complete) {
    context.drawImage(image, event.pageX - 100, event.pageY - 100, 200, 200)
  }
})

