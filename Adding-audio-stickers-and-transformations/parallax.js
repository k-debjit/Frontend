//find middle of the window
const sections = document.querySelectorAll("section")
const bodyTag = document.querySelector("body")

const addMovement = function(){
  //How far we are down the page
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)//middle point is half of window inner height + how far we have scrolled
  
  //find middle of each section
  sections.forEach((section, index) => {
    const topSection = section.offsetTop //top position of section
    const midSection = topSection + (section.offsetHeight / 2)//offsetHeight will return the total height of the section

    //how far the page has been scrolled from the middle of the section
    const distanceToSection = midViewport - midSection

    // pick the tags to parallax
    const image = section.querySelector("img")
    const contentTag = section.querySelector("div")

    //wight down this distance
    let rotation = distanceToSection / 100
    let contentDist = -1 * distanceToSection / 2 //-1 is for opposite direction

    //for every even sections,rotate the other way
    //if the index divisibale by two
    //if the index's remainder zero
    if(index % 2 == 0){
      rotation = rotation * -1
    }

    //apply some parallax
    image.style.transform = `rotate(${rotation}deg)`
    contentTag.style.top = `${contentDist}px`
    contentTag.style.transform = `rotate(${-1 * rotation}deg)`

    //check background color
    if(distanceToSection > -100){
      const dataBackground = section.getAttribute("data-background")
      bodyTag.style.backgroundColor = dataBackground
    }
  })
  
  }

addMovement()//run on page load

document.addEventListener("scroll", function(){
  addMovement()//run on scroll
})

window.addEventListener("resize", function(){
  addMovement()//run on resize of window
})