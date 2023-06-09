const irisLeft = document.querySelector("div.iris-left")
const irisRight = document.querySelector("div.iris-right")

//interval
let interval = null

//move the eyes every 3 seconds
const startInterval = function(){
  clearInterval(interval)
  interval = setInterval(()=>{
    const x= Math.random() * window.innerHeight
    const y= Math.random() * window.innerHeight

    moveEye(irisLeft, x, y)
    moveEye(irisRight, x, y)
  }, 3000)
}

const moveEye = function(tag, mouseX, mouseY){
 
  //center of the eye
  const eyeMidX = tag.getBoundingClientRect().left
  const eyeMidY = tag.getBoundingClientRect().top

  //find the difference between eye and mouse
  const diffX = mouseX - eyeMidX
  const diffY = mouseY - eyeMidY - window.pageXOffset


//pythagorus theorem
  const diff = Math.sqrt(diffX * diffX + diffY * diffY)


 // capped radius
 const radius = Math.min(3, diff)

  //tan in math
  const angle = Math.atan2(diffY,diffX)
  


  //capped version of angle
  const cappedX = radius * Math.cos(angle)
  const cappedY = radius * Math.sin(angle)

  const eyeTag = tag.querySelector("div")
  eyeTag.style.left = cappedX + "px"
  eyeTag.style.top = cappedY + "px"
}

//start interval
startInterval()


document.addEventListener("mousemove", function(event){
  startInterval()
  //console.log(event) from inspection pageX and pageY can be understood
  moveEye(irisLeft, event.pageX, event.pageY)
  moveEye(irisRight, event.pageX, event.pageY) 
})