// ex 1

// const { createElement } = require("react")

// let Ptag = document.querySelector("#text")
// Ptag.addEventListener("click" , function (){
//     Ptag.textContent = "clicked"
// })

// ex 2

// let button = document.querySelector("#button");
// let box = document.querySelector("#box");

// button.addEventListener("click" , function() {
//     box.style.backgroundColor = "red"
// });

// // ex 3

// let input = document.getElementById("name")
// let show = document.getElementById("show")
// let result = document.getElementById("result")

// show.addEventListener("click" , function() {
//     result.textContent = input.value;
// })

// ex 4

// let box2 = document.getElementById("box2")
// let add = document.getElementById("add")

// add.addEventListener("click" , function(){
//    box2.classList.add("active") 
// })

// ex 5

// let toggle = document.querySelector("#toggle")
// let body = document.querySelector("body")
// toggle.addEventListener("click" , function(){
//     body.classList.toggle("dark-mode")
// })

// ex 6
// let item = prompt("what do you want to add to the list?")
// let ul = document.querySelector("list1")
// let li = document.querySelector("addItem")
// ul.addEventListener("click" , function(){
//     li.textContent = `${item}`
// })


// ex 7
let ul = document.getElementById("list2")
let remove = document.getElementById("remove")
remove.addEventListener("click" , function(){
    ul.lastElementChild.remove();
})

// ex 8
let change = document.getElementById("change")
let img = document.getElementById("image")
change.addEventListener("click" , function() {
})
