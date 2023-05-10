const animatedTags= document.querySelectorAll("h2,h3,p,section img, a.button")

//fade out on load
animatedTags.forEach(function(tag){
  tag.style.opacity = 0
})

const fadeIn = function(){
  //look through all the animated tags to see the getBoundingClientRect if it is window or document
  let delay = 0.25
  animatedTags.forEach(tag=>{
    const tagTop = tag.getBoundingClientRect().top//This will give information about top postion
    const tagBottom = tag.getBoundingClientRect.bottom//bottom position

    if(tagTop < window.innerHeight){//if top position is less than innerHeight and bottom position is greater than, the view is in window
      tag.style.animation = `fadein 1s ${delay}s both`//this will trigger keyframe from css both in start and end
      delay = delay + 0.25
    }
    else{
      tag.style.opacity = 0
      tag.style.animation = ""
    }
  })
}

//on load run fadeIn
fadeIn()

//on scroll run fadeIn
document.addEventListener("scroll", function(){
  fadeIn()
})

//on browser resize, run fadeIn
window.addEventListener("resize", function(){
  fadeIn()
})