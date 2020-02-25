// test two
const canvasTag = document.querySelector("canvas.two")
canvasTag.width = window.innerWidth * 2
canvasTag.height =window.innerHeight * 2
canvasTag.style.width = window.innerWidth + "px"
canvasTag.style.height = window.innerHeight + "px" 

const context = canvasTag.getContext("2d")
context.scale(2, 2)


let aimX = null
let aimY = null
let currentX = null
let currentY = 0


let i = 0

const letters = [
    'img/svg/m.svg ', 'img/svg/e.svg',
    'img/svg/g.svg', 'img/svg/a.svg'].map(src => {
    const letter = document.createElement("img")
    letter.src = src
    return letter
})




canvasTag.addEventListener('mousemove', function(event) {

  aimX = event.pageX
  aimY = event.pageY

  if (currentX === null) {
    currentX = event.pageX
    currentY = event.pageY
  }

})

canvasTag.addEventListener('click', function () {
    i = i + 1

    if (i >= letters.length) {
        i = 0
    }
})


const draw = function () {

  if(currentX){
    if (letters[i].complete) {
      context.drawImage(letters[i], currentX - 100, currentY - 100, letters[i].width, letters[i].height)
    }

    currentX = currentX + (aimX - currentX) * 0.08
    currentY = currentY + (aimY - currentY) * 0.08

  }

  requestAnimationFrame(draw)

}

draw()
