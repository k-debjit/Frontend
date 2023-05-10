const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")


//when toggle is clicked, class will be changed
toggleTag.addEventListener("click", function(){
  mainTag.classList.toggle("open")//adding open class created in css. as this class exits only in css, dot hasn't been used

  if(mainTag.classList.contains("open")){//check if toggleTag contains open class. If it contains,"Menu" is will changed to "close"
    toggleTag.innerHTML = `<img src="menu.svg">Close`
  }
  else{
    toggleTag.innerHTML = `<img src="menu.svg">Menu`
  }
})