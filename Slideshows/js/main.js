// whenever we load the page, always display the first slide
var currentSlide = 0


//We need to know many slides are there in the array
var totalSlides = $('.holder div').length

var moveSlide = function(slide){
  //2. turn our currentSlide value into a 'vw' unit
  var vwUnit = - slide * 100
  // added the unit 'vw'
  var leftPosition = vwUnit + 'vw'
  //3. pass the 'vw' unit into our css method.
  //Grabbed the holder and changing the css property
$('.holder').css('left',leftPosition)

// 1st slide position number is zero in array. That's why increment 1
// is important to get the actual slide number
var slideNumber = slide + 1
$('.steps').text(slideNumber + '/' + totalSlides)
}



//setInterval will run the function inside in every 3000ms or 3second.
//setTimeout is similar but runs once. 
var autoSlide = setInterval(function(){
  previousSlide()
}, 3000)


//1. a function to take us to next slide

var nextSlide = function(){
  //1. increment our currentSlide value
  currentSlide = currentSlide + 1

  //Check if the current slide number is greater or equal to total number of slides
  if(currentSlide >= totalSlides){
    currentSlide = 0
  }
  moveSlide(currentSlide)
}


//2. a function to take us to previous slide

var previousSlide = function(){
  //decrement our currentSlide value. If the currentSlide is zero, 
  //there will be no previous slide and it will holder towards right
  currentSlide = currentSlide - 1

  //Check if the current slide number is less than zero
  if(currentSlide < 0){
    // In array last position = totalSlides - 1
    currentSlide = totalSlides - 1
  }

  //below part can also be inside moveSlide function
  //2. turn our currentSlide value into a 'vw' unit
  var vwUnit = - currentSlide * 100
  // added the unit 'vw'
  var leftPosition = vwUnit + 'vw'
  //3. pass the 'vw' unit into our css method.
  //Grabbed the holder and changing the css property
$('.holder').css('left',leftPosition)

// 1st slide position number is zero in array. That's why increment 1
// is important to get the actual slide number
var slideNumber = currentSlide + 1
$('.steps').text(slideNumber + '/' + totalSlides)
}



//next button
$('.next').on('click', function(){
  //this will cancel autoSlide function and user can have the control
  clearInterval(autoSlide)
  //calling next slide will take us to next slide
  nextSlide()
})

//previous button
$('.prev').on('click', function(){
  clearInterval(autoSlide)
  previousSlide()
})

//sliding images through keyboard arrow key
$('.body').on('keydown', function(event){

//event gives all the information of a particular event. In this case
//we are looking for left and right arrow key number when they are pressed.
var keyCode = event.keyCode

//From inspection we found left key number is 37 and right key number is 39
if(keyCode == 37){
  previousSlide()
}
if(keyCode==39){
  nextSlide()
}
})
