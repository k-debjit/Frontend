const sentenceTag = document.querySelector(`input[type=text]`)//selecting input same as css

const typesizeTag = document.querySelector(`input[name=typesize]`)
const sizeOutput = document.querySelector("span.size")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value//text area doesn't have innerhtml. It has value

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const fontweightTag = document.querySelector(`input[name="fontweight"`)
const fontweightOutput = document.querySelector("span.fontweight-output")

const colorTags = document.querySelectorAll("div.colors div")

//when sentenceTag is listened, outputTag will be updated
sentenceTag.addEventListener("keyup",function(){
  //this refers to sentenceTag
  if(this.value){
    //input tag doesn't have any content like image tag or any other tag. So input tag doesn't have any innerhtml.
  //So value attribute is used for getting the input dynamically
  outputTag.value = sentenceTag.value
  //above line can also be written as:
  //outputTag.innerHTML = this.value
  //this can used inside a function and it refer to it's function name
  }
  else{
    outputTag.value = originalText
  }
})

//when updating outputTag, amend sentence tag as well

outputTag.addEventListener("keyup",function(){
    sentenceTag.value = this.value

})

//when typesize is changed, update the text next to it
// update font size of the output text
typesizeTag.addEventListener("input",function(){
  outputTag.style.fontSize = this.value + "px"
  sizeOutput.innerHTML = this.value + "pixels"
})


lineheightTag.addEventListener("input",function(){
  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value
})


//when italic checkbox is checked, update the font
italicTag.addEventListener("change",function(){
  if(this.checked){
    outputTag.style.fontStyle = "italic"
  }
  else{
    outputTag.style.fontStyle = "normal"
  }
  
})


//when typeface is changed, font will be updated
typefaceTag.addEventListener("input",function(){
  outputTag.style.fontFamily = this.value
})


//Font Weight
fontweightTag.addEventListener("input",function(){
  fontweightOutput.innerHTML = this.value
  outputTag.style.fontWeight = this.value
})


//go through all color tags
//when clicked, change background color
//then text color and the tag will get selected class
colorTags.forEach(function(tag){
  tag.addEventListener("click", function(){
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color

    //reset classes for all tags first
    colorTags.forEach(function(tag){
      tag.classList.remove("selected")
    })
    //Now add class to the clicked one only
    this.classList.add("selected")
  })
})