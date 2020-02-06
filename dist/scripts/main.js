
// first we select all our logo elements
const logoTags = document.querySelectorAll('section.logo-interaction div')
// then pick the area in which the interaction will happen
const areaTag = document.querySelector('section.logo-interaction')

// we need to keep track of the width and height
// of the interaction area
let w = areaTag.clientWidth
let h = areaTag.clientHeight


logoTags.forEach(tag => {
  // we center the position of the mouse
  // and logo from the start
  let mouseX = w / 2
  let mouseY = h / 2
  
  let logoX = w / 2
  let logoY = h / 2
  // here we can have a var that stores a speed value
  // from the html
  let speed = parseFloat(tag.getAttribute("data-speed"))

  // animate setup
  function animate() {
    let distX = mouseX - logoX
    let distY = mouseY - logoY

    logoX = logoX + (distX * speed)
    logoY = logoY + (distY * speed)


    tag.style.left = logoX + 'px'
    tag.style.top = logoY + 'px'

    requestAnimationFrame(animate)
  }

  animate()
  
  // mouse move setup
  areaTag.addEventListener("mousemove", function () {
   	mouseX = event.pageX
    mouseY = event.pageY
  })
  
  
  // if the window is resized then we 
  // recalculate the center of the inetraction
  const handleResize = function () {
    w = areaTag.clientWidth
    h = areaTag.clientHeight
    logoX = w / 2
    logoY = h / 2
    mouseX = w / 2
    mouseY = h / 2
}

  // if the mouse leaves the area then
  // we want the logo the recenter itself
  areaTag.addEventListener("mouseleave", function () {
   	mouseX = w / 2
  	mouseY = h / 2
  })
  
 window.addEventListener('resize', handleResize)

})