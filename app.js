document.addEventListener('DOMContentLoaded',function() {
var box1 = document.getElementById("box-1")
var box2 = document.getElementById("box-2")
var box3 = document.getElementById("box-3")
var box4 = document.getElementById("box-4")
var box5 = document.getElementById("box-5")
var box6 = document.getElementById("box-6")
var box7 = document.getElementById("box-7")
var box8 = document.getElementById("box-8")
var box9 = document.getElementById("box-9")
var pickBlue = document.getElementById("blue")
var pickRed = document.getElementById("red")
var pickYellow = document.getElementById("yellow")
var pickWhite = document.getElementById("white")
let color = ""
let currentColor = document.getElementById("currentColor")


box1.addEventListener("click", function() {

  box1.classList.toggle(color)
  // event.target.classList = color

})

box2.addEventListener("click", function() {

  box2.classList.toggle(color)
  // event.target.classList = color
  
})

box3.addEventListener("click", function() {

  box3.classList.toggle(color)
  // event.target.classList = color
  
})

box4.addEventListener("click", function() {

  box4.classList.toggle(color)
  // event.target.classList = color
  
})

box5.addEventListener("click", function() {

  box5.classList.toggle(color)
  // event.target.classList = color
  
})

box6.addEventListener("click", function() {

  box6.classList.toggle(color)
  // event.target.classList = color
  
})

box7.addEventListener("click", function() {

  box7.classList.toggle(color)
  // event.target.classList = color
})

box8.addEventListener("click", function() {

  box8.classList.toggle(color)
  // event.target.classList = color
  
})

box9.addEventListener("click", function(event) {

  box9.classList.toggle(color)
  // event.target.classList = color
  
  
})

  pickBlue.addEventListener("click", function(event) {
    color = "blue"
    currentColor.classList = color
    
  })

  pickRed.addEventListener("click", function(event) {
    color = "red"
    currentColor.classList = color
   
  })

  pickYellow.addEventListener("click", function(event) {
    color = "yellow"
    currentColor.classList = color
  })

  pickWhite.addEventListener("click", function(event) {
    color = "white"
    currentColor.classList = color
  })



})


















// document.addEventListener('DOMContentLoaded',function() {

//   var selectBlueBox = document.getElementById("blue")
  
  
//   selectBlueBox.addEventListener("click", function(event) {
//     // pick = event.target
  
//     selectBlueBox.classList.toggle("red")
//     selectBlueBox.classList.toggle("blue")
  
//   document.selectBlueBox.style.backgroundColor = "red"
//   })
  
//   })








// let canvas = document.getElementsByClassName("canvas")
// for (let i = 0; i < 12; i++) {

//   let block = document.createElement("div")
  
//   block.setAttribute("class", "pixel")
//   // getElementsByTagName("div")
//   // block.classList.add("pixel")
//   canvas.appendChild("block")
  

// }

