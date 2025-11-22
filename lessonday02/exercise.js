// let age = Number(prompt("how old are you?: "));
// if ( age >= 0 && age <= 3 ){
//     console.log("You are a child")
//     alert("You are not an adult!")
// }
// else if ( age >= 4 && age <= 16) {
//     console.log("You are a teenager")
//     alert("You are not an adult!")
// }
// else {
//     alert("You are an adult you have to pay taxes")
//     console.log("You are an adult you have to pay taxes")
// }

// // ex 2

// let number = Number(prompt("enter a number"));
// if ( number > 0 ){
//     console.log("normal number")
//     alert("normal number")
// }
// if ( number < 0 ){
//     alert("negetive number")
//     console.log("negative number")
// }

// //ex 3

// let cal = Number(prompt("enter a number"));
// if ( cal % 2 == 0 ){
//     console.log("even number")
//     alert("even number")
// }
// else {
//     console.log("odd number")
//     alert("odd number")
// }

// // ex 4

// let username = prompt(" username: ")
// let password = prompt(" user password: ")

// if ( username === "admin" && password === "password"){
//     console.log("login successfull")
// }
// else {
//     console.log("name or password is wrong")
// }

// ex 5

// let temp = prompt(" what's the temputure?")
// if (temp > 15 ){
//     console.log("it's warn outside")
//     alert("It's warm outside")

// }
// if (temp < 15 ){
//     console.log("It's cold outside don't forget to wear your coat")
//     alert("It's cold outside don't forget to wear your coat")
// }
// let weather = prompt("Is it raining?")
// if ( weather === "yes"){
//     console.log("don't forget your umbrella")
//     alert("don't forget your umbrella")
// }
// if ( weather === "no"){
//     console.log("have a nice sunny day")
//     alert("have a nice sunny day")
// }

// ex 6

// let day = prompt("What day is it today?");
// if ( day === "monday"){
//     console.log("happy monday!!")
//     alert("happy monday")
// }
// if ( day === "tuesday"){
//     console.log("happy tuesday")
//     alert("happy tuesday")
// }
// if ( day === "wednesday"){
//     console.log("happy wednesday")
//     alert("happy wednesday")
// }
// if ( day === "thursday"){
//     console.log("happy thursday")
//     alert("happy thursday")
// }
// if ( day === "friday"){
//     console.log("happy friday")
//     alert("happy friday")
// }
// if ( day === "saturday"){
//     console.log("happy saturday")
//     alert("happy saturday")
// }
// if ( day === "sunday"){
//     console.log("happy sunday")
//     alert("happy sunday")
// }

// ex 7

// let score = Number(prompt("Score (0-100): "));
// if ( score >= 0 && score <= 49 ){
//     console.log("You got F ")
//     alert("You got F")
// }
// if ( score >= 50 && score <= 59 ){
//     console.log("You got D ")
//     alert("You got D")
// }
// if ( score >= 60 && score <= 69 ){
//     console.log("You got C ")
//     alert("You got C")
// }
// if ( score >= 70 && score <= 89 ){
//     console.log("You got B ")
//     alert("You got B")
// }
// if ( score >= 90 && score <= 100 ){
//     console.log("You got A ")
//     alert("You got A")
// }

// ex 9

// let ticket = Number(prompt("how old are you?"));
// if ( ticket >= 0 && ticket <= 12){
//     console.log("Your Ticket is 5000₮")
//     alert("your ticket is 5000₮")
// }
// if ( ticket >= 13 && ticket <= 64){
//     console.log("Your Ticket is 10000₮")
//     alert("your ticket is 10000₮")
// }
// if ( ticket > 65 ){
//     console.log("Your Ticket is 7000₮")
//     alert("your ticket is 7000₮")
// }

// ex 10

let A = Number(prompt("first angle"))
let B = Number(prompt("secong angle"))
let C = Number(prompt("third angle"))
if ( A == B && B == C){
    console.log("Адил талт")
    alert("Адил талт")
}else if (A === B || B === C || A === C ){
    console.log("Адил хажуут")
    alert("Адил хажуут")
}else {
    console.log("Зөрөө талт")
    alert("Зөрөө талт")
}