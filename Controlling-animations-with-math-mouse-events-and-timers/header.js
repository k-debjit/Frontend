//when scroll down the page at certain point
//add a class to make the header white

const headerTag = document.querySelector("header")

const toggleHeader = function(){
  const pixels = window.pageYOffset//how far page has been scrolled

  if(pixels > 60){
    headerTag.classList.add("scrolled")
  }
  else{
    headerTag.classList.remove("scrolled")
  }
}


const fadeBox = function(){
  const pixels = window.pageYOffset
  const alpha = Math.min(pixels / 500, 0.5) //cutting down the pixel number and it will not exceed 0.5

  headerTag.style.boxShadow=` 0 0 10px rgba(0, 0, 0, ${pixels})`//as scroll starts, boxshadow will apear
}

fadeBox()

//toggleHeader() will be activated both for instant and scroll
toggleHeader()

document.addEventListener("scroll", function(){
  toggleHeader()
  fadeBox()
})