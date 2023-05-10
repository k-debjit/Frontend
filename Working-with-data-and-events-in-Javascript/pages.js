
let pageNumber = 0

const page = [
  {
    copy:"Brisbane based we designer", background:"#edc7a9", circle:"#3e78ed"
  },
  {
    copy:"Kayne south aircondition", background:"#a1fffe", circle:"#e34a47"
  },
  {
    copy:"I have got a job with higher salary", background:"#d3c7f3", circle:"#f7fe00"
  },
  {
    copy:`letting you <a href="pdf.pdf">download pdf here</a>`, background:"#faffb8", circle:"#b472e6"
  }
  ]

const nextTag = document.querySelector("footer img.next")
const prevTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")

const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")//whole body like css rules

//For next slide
const next = () => {
pageNumber = pageNumber + 1

if(pageNumber > page.length - 1){
  pageNumber = 0
}

update()
}



//For previous slide
const previous = () =>{
  pageNumber = pageNumber - 1

  if(pageNumber < 0){
    pageNumber = page.length -1
  }

update()
}



//pick a random slide
const random = () => {
pageNumber = Math.floor(Math.random() * page.length)
update()
}

//update slide number
const update = () =>{
outputTag.innerHTML = page[pageNumber].copy
circleTag.style.backgroundColor = page[pageNumber].circle//changing only style
bodyTag.style.backgroundColor = page[pageNumber].background
}


//on click next slide
nextTag.addEventListener("click",function(){
  next()
  
})


//on click previous slide
prevTag.addEventListener("click", function(){
  previous()
})


//on click pick random slide
randomTag.addEventListener("click", function(){
  random()
})



//when left or right keyboard key is pressed
document.addEventListener("keyup", function(event){
  console.log(event)
  // if the key being pressed is ArrowRight
  if(event.key == "ArroRight"){
    next()
  }
  if(event.key == "ArroLeft"){
    previous()
  }
})