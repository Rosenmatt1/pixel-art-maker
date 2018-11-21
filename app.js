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
let color = ""


box1.addEventListener("click", function() {

  box1.classList.toggle(color)
  box1.classList.toggle("box")

})

box2.addEventListener("click", function() {

  box2.classList.toggle(color)
  box2.classList.toggle("box")
  
})

box3.addEventListener("click", function() {

  box3.classList.toggle(color)
  box3.classList.toggle("box")
  
})

box4.addEventListener("click", function() {

  box4.classList.toggle(color)
  box4.classList.toggle("box")
  
})

box5.addEventListener("click", function() {

  box5.classList.toggle(color)
  box5.classList.toggle("box")
  
})

box6.addEventListener("click", function() {

  box6.classList.toggle(color)
  box6.classList.toggle("box")
  
})

box7.addEventListener("click", function() {

  box7.classList.toggle(color)
  box7.classList.toggle("box")
 
})

box8.addEventListener("click", function() {

  box8.classList.toggle(color)
  box8.classList.toggle("box")
  
})

box9.addEventListener("click", function() {

  box9.classList.toggle(color)
  box9.classList.toggle("box")
 
})

  pickBlue.addEventListener("click", function(event) {
    color = "blue"
    
  })

  pickRed.addEventListener("click", function(event) {
    color = "red"
   
  })

  pickYellow.addEventListener("click", function(event) {
    color = "yellow"
   
  })


  // //   pickBlue.event.target("blue")

    // pickBlue.classList.toggle(color)
    // picklue.classList.toggle("box")

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

