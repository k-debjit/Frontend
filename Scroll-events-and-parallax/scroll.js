//document represents whole website where window represents portion of website visible on the current window
const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")

const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")

const clientTag = document.querySelector("div.client")
const pageTag = document.querySelector("div.page")
const headerTag = document.querySelector("header")


//when the page is being scrolled, update the pixels tag to be how far we have scrolled
document.addEventListener("scroll", function(){
  //console.log("scroll") will help to see scroll number in inspection
  const pixels = window.pageYOffset//pageYOffset keeps track on how many pixels have been scrolled(Y direction) on the window
  //console.log(pixels)
  pixelsTag.innerHTML = pixels + "pixels scrolled"
})


//progress bar
document.addEventListener("scroll", function(){
  const pixels = window.pageYOffset
  //getBoundingClientRect() can get the total height of a web page
  //window get the height of current viewing portion of web page
  //last page or last portion of the webpage doesn't get scrolled. 
  //last portion of page doesn't get scrolled. As an example: if one page is 800 px high, 4 pages will be 3200.
  //But total scrollable height would be 3200 - 800 = 2400. Because last page will not be scrolled
  //pageYOffset can show total scrollable height but only after scrolling. so we need to subtract window.inngerHeight from total height
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight // total scrollable pixel
  const percentage = pixels / totalScrollableDistance
  progressTag.style.width = `${100 * percentage}%`
})


//check how far down the page we have scrolled
//check which section we are on
//update the text in the header


document.addEventListener("scroll", function(){
  const pixels = window.pageYOffset

  sections.forEach(function(section){
    if(section.offsetTop <= pixels){//offsetTop let us know how far from the top we have scrolled
    clientTag.innerHTML = section.getAttribute("data-client")
    pageTag.innerHTML = section.getAttribute("data-page")

    if(section.hasAttribute("data-is-dark")){
      headerTag.classList.add("white")
      progressTag.classList.add("white")
    }
    else{
      headerTag.classList.remove("white")
      progressTag.classList.remove("white")
    }
    }
  })
})


//when page is scrolled, make things parallax
//we want to move certain tags, based on how far they are from an anchor point
//anchor point is the middle of the section
//we should parallax at a ratio of the middle distance scrolled to the middle point of the anchor
//offsetTop is based on the whole webpage

document.addEventListener("scroll",function(){
  const topViewport = window.pageYOffset //
  const midViewport = topViewport + (window.innerHeight / 2)//finding midpoint of any distance scrolled

  sections.forEach(section =>{
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight)

    const distanceToSection = midViewport - midSection

    const parallaxTags = section.querySelectorAll(`[data-parallax]`)//like input[type="text"] but empty.Any tag that has parallax

    parallaxTags.forEach(tag=>{
      const speed = parseFloat(tag.getAttribute("data-parallax"))//converting a decimal number
    tag.style.transform = `translate(0px, ${distanceToSection * speed}px)`
    })
    
    
  })
})