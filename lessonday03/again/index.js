// let score = Number(prompt("score"))
// let attend = Number(prompt("attandence"))
// let grade;

// if (attend < 70) {
//     grade = "f"
// }else {
//     if (score >= 90) {
//         grade = "A"
//     }else if(score >= 80)
//         grade = "B"
// }else if(score >= 70){
//         grade = "C"
// }else if(score >= 60){
//         grade = "D"
// }else{
//         grade = "B"
//         if (grade === "A" && attend < 80) {
//             grade = "B"
//             console.log(`your grade is {grade}`)
//         }
// }

let food = prompt("MENU: Pizza 30k | Burger 10k | Pasta 10k")
if (food === "Pizza"){
    console.log("Pizza 30k")
    alert("Pizza 30k")
}
else if(food === "Burger"){
    console.log("Burger 10k")
    alert("Burger 10k")
}
else {
    console.log("pasta 10k")
    alert("pasta 10k")
}