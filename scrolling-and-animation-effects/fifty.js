function makeMarquee(){
    const title = 'FIFTY Food Festival - December 10 - 14, Sea Valley'
    
    const marqueeText = new Array(50).fill(title).join('-')
    
    //1. grab .marquee span from html
    //2. set our repeating title as the content
    
    //querySelector and querySelectorAll are the same as $ in jQuery
    const marquee = document.querySelector('.marquee span')
    // innerHTML lets us set the content inside an element
    marquee.innerHTML = marqueeText
    }
    
    makeMarquee()
    
    //Function to create random number
    function random(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    
    //Getting the circle element from html which will be an array
    const circles = document.querySelectorAll('.circle')
    
    //loop through the array to get every element
    circles.forEach(function(circle, index){
      //convert into arrow function be like
      //circles.forEach((circle,index)=>{})
      circle.animate([
    //keyframes
    {transform: 'scale(1)'},
    {transform: 'scale(1.2)'},
    {transform: 'scale(1)'}
    ],{
    // timing options
    delay: 300 * index,
    duration: 3000,
    iterations: Infinity
    })
    
    })
    
    
    
    /* jQuery loops through the array itself automatically but in vanilla 
    Javascript we need to loop through manually */
    const squiggles = document.querySelectorAll('.squiggle')
    
    //loop through the array to get every element
    squiggles.forEach(function(squiggle, index){
      
      //Creating random number between 0 and 45
      const randomNumber = random(0,45)
      squiggle.animate([
    //keyframes
    {transform: 'rotate(0deg)'},
    {transform: 'rotate('+ randomNumber +'deg)'},
    //In modern javascript joining is like
    //{transform: `rotate(${randomNumber}deg)`}
    {transform: 'rotate(0deg)'}
    ],{
    // timing options
    delay: 300 * index,
    duration: 3000,
    iterations: Infinity
    })
    
    })
    
    //This code has been taken from github which is related to script added in html
    //inView('.someSelector')
    //.on('enter', doSomething)
    //.on('exit', el => {
    // el.style.opacity = 0.5
    //})
    //When a section enters the viewport, 'in-viewport' class will be added.
    //When it exits,class will be removed
    inView('.section')
      .on('enter', section => {
        // classList.add is the same as jQuery's addClass() method
        section.classList.add('in-viewport')
      })
      .on('exit', section =>{
        section.classList.remove('in-viewport')
      })
    
      // This way we can add or remove 'in-viewport' class when
      // 0.2 portion of our section is scrolled in the viewport
      inView.threshold(0.2)
    
    
    //1. Select sections and loop through them
    //2. in each section, artists and shapes will be grabbed
    //3. for both of these we will add transition delay
    //4. after that shapes only fade in after artists
    
    const sections = document.querySelectorAll('.section')
    
    sections.forEach((section, index)=>{
      // here querySelectorAll is used on 'section' only
      //we find elements inside of our section vs our entire page
      const artists = section.querySelectorAll('.lineup li')
      const shapes = section.querySelectorAll('.shape')
      artists.forEach((artist,index)=>{
        const delay = index * 100
        artist.style.transitionDelay = delay + 'ms'
      })
    
      shapes.forEach((shape,index)=>{
        //We are setting our delay up to only start once all of our
        //artists have faded in, using the .length property
        const delay = (artists.length + index) * 100
        shape.style.transitionDelay = delay + 'ms'
      })
    })
    
    
    //1. when we click a .js-scroll link, we want to run a function
    //2. we want to stop the link from jumping straight(default behaviour) to our section.
    //3. we want to find out the href attribute and then grab the element
    //4. the scroll to it using scrollIntoView
    
    const scrollLinks = document.querySelectorAll('.js-scroll')
    
    scrollLinks.forEach(link=>{
      //addEventListener is same as jQuery's .on()
      // we can listen for events on elements and then run a function
      link.addEventListener('click',(event)=>{
        //using the event keyword we get access to a snapshot of what happened when we clicked on our link
        
        //this is same as return false in jQuery
        //this will block the default browser behaviour of the link jumping to the href attribute
        event.preventDefault()
    
    // grabbing href attribute from link
        const href = link.getAttribute('href')
        // we use the new scrollIntoView Feature to scroll to desired element in smooth fashion
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
          })
      })
    })
    
    