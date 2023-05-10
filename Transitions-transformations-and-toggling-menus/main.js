//1. when we click the hamburger, run a fucntion
//2. inside the function, we are going to add/remove the class of open
//3. make sure our link doesn't jump the page to the top

$('.menu-toggle').on('click',function(){
    $('.menu').toggleClass('open')
    return false
  })