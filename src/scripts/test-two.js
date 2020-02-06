// test two
const canvasTag = document.querySelector("canvas.two")
canvasTag.width = window.innerWidth * 2
canvasTag.height =window.innerHeight * 2
canvasTag.style.width = window.innerWidth + "px"
canvasTag.style.height = window.innerHeight + "px" 

const context = canvasTag.getContext("2d")
context.scale(2, 2)

let i = 0

const letters = [
    'img/m.svg', 'img/e.svg',
    'img/g.svg', 'img/a.svg'
].map(src => {
    const letter = document.createElement("img")
    letter.src = src
    return letter
})




document.addEventListener('mousemove', function(event) {
  if (letters[i].complete) {
    context.drawImage(letters[i], event.pageX - 100, event.pageY - 100, 200, 200)
    //i = i + 1
  }

//   if (i >= letters.length) {
//     i = 0
//   }

})

canvasTag.addEventListener('click', function () {
    i = i + 1

    if (i >= letters.length) {
        i = 0
    }
})

