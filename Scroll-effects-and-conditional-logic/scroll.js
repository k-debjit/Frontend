// when we scroll. we want to run a function
// we want to figure our how far down we've scrolled.
//we want to display the pixels we've scrolled inside of our .progress div
//document is a javascript keyword that refers to the entire html page

$(document).on('scroll',function(){
  //the scrollTop method gives us back a pixel value for how far it is to
  //the top of the page (from our current scroll position)
  var pixelsFromTop = $(document).scrollTop()
  $('.progress').text(pixelsFromTop +' '+ 'pixels from top')

  if(pixelsFromTop>100){
    $('header').addClass('hidden')
  }
  else{
    $('header').removeClass('hidden')
  }

  if(pixelsFromTop<600){
    $('body').css('background-color', '#fff')
  }
  else if(pixelsFromTop<1400){
     $('body').css('background-color', '#a29c97')
  }
  else if(pixelsFromTop<2200){
     $('body').css('background-color', '#d9dfe4')
  }
  else if(pixelsFromTop<3000){
     $('body').css('background-color', '#fff0f0')
  }
  else{
     $('body').css('background-color', '#cdccc7')
  }


//1. make some variable for our documentheight and windowheight
//2. make a variable to work out the difference between the two
//(as we a comparing this to our scrollTop position which goes from the top of window.)
//So it will be documentheight - windowheight
//3. using difference and the scrollPosition,divide them into each other
//to make percentage.
//4. multiply by 100 to get back a % value
var documentHeight = $(document).height()
var windowHeight = $(window).height()
var difference = documentHeight - windowHeight
var percentage = 100 * pixelsFromTop / difference
//here we join the number of % scrolled with the % symbol otherwise
//it will assume we are talking about pixels
$('.bar').css('width', percentage + '%')
})

