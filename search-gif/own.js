//fetch function is used to include api
fetch (`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=50&offset=0&rating=PG-13&lang=en`)

// .then() is used to handle the response
.then(funtion(response){
  //Now we need to convert response to json
  return response.json()
})

//we need to again attach .then() handle json data
//this is arrow function
.then(json=>{
//With json, we can extract all sort of data and its an array
const gif = json.data[0]// Grabbing the first result
//From inspection web page, found where the mp4 file is sitting
const src = gif.images.original.mp4
const video = createVideo(src)


function createVideo (src){
//create element lets us create html elements inside of js
const video = document.createElement('video')
//Now we need to set the attributes for the element
video.src = src
video.autoplay = true //video will be played automatically
video.loop = true //video will be repeated
console.log(video)
return video
}
//We need to grab .videos div from html, so that our created video element can be added to it
const videoEl = document.querySelector('.videos')
videosEl.appendChild(videoEl)//'append child' adds an element to the last of all child elements of a parent element

})
//if fetch fails, we need to catch the error
.catch(error =>{

})

