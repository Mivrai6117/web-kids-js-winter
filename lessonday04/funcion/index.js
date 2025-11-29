// function line() {
//     console.log("-----------------------");
// }

// line()
// console.log("hello dorj");
// line()

// line()
// console.log("hello sara");
// line()

// function space() {
//     let sen = "Би програмчлалд суралцаж байна"
// let space_count = 0 ;

// for (let i= 0 ; i<sen.length ; i++){
//     if (sen[i] === " "){
//         space_count ++
//     }
// }
// console.log("total space count " + space_count);
// }
// space()

// function add(a ,b){
//     return a + b
// }
// let sum = add (15,7);
// console.log(sum);


// function hello (name) {
//     document.write("hello world" + name)
// }
// hello("enkhjin")

// hello("odkhuu")

// hello("kevin")


// function multiply(c , d){
//     return c * d
// }
// let answer = multiply(5 , 60)
// console.log(answer);


// let first = Number(prompt("first number"))
// let second = Number(prompt("second number"))
// function plus(first , second){
//     console.log(first + second);
    
// }

// // emoji

// drawEmoji("");
// drawEmoji("");


// ex 1

// function displayGreeting(){
//     console.log("Сайн уу, Javascript-ын ертөнцөд тавтай морил!");
// }
// // Функцээ дуудах
// displayGreeting();

// // ex 2

// function showFavoriteQuote(){
//     console.log("Nothing is more powerful than coding the possibilies are endless");
    
// }
// showFavoriteQuote()

// ex 3

// function drawSquare(){
//     console.log("*****")
//     console.log("*   *")
//     console.log("*****")
// }
// drawSquare()

// ex 4

// function printRecipe(){
//     console.log("--- Өндөг шарах жор ---");
//     console.log("1. Хайруулын тавгаа халаана.");
//     console.log("2. Тосоо хийнэ.");
//     console.log("3. Өндгөө хагалж хийнэ.");
//     console.log("4. Давс нэмээд болгоно.");   
// }
// printRecipe()

// ex 5

// function calculateFixedArea(a ,b){
//     return a * b
// }
// let area = calculateFixedArea (10,5);
// console.log(`Total area ${area}`);

// ex 6

// function showMenu(){
//     console.log("--- Манай Цэс ---");
//     console.log("1. Хуушуур - 2000₮");
//     console.log("2. Цуйван - 8000₮");
//     console.log("3. Бууз - 1500₮");
    
// }
// showMenu()


// Math.floor()
// Math.random()
// Date();
// getFullYear()
// getMonth()
// getDate()
// getHours()

// ex 7

// function sing_a_verse(){
//     console.log("Twinkle, twinkle, little star,");
//     console.log("How I wonder what you are!");
//     console.log("Up above the world so high,");
//     console.log("Like a diamond in the sky.");
// }
// sing_a_verse()

// ex 8

// function countToTen(){
//     for (let i = 0; i <= 10; i++) {
//         console.log(i);
//     }
// }
// countToTen()

// ex 9

// function checkFixedNumber(){
//     let num = Number(prompt("choose a number"))
//     if (num  % 2 == 0 ){
//         console.log("even number")
//     }
//     else{
//         console.log("odd number")
//     }
// }
// checkFixedNumber()

// ex 10

// function rollDie(){
//     let numb = Math.floor(Math.random()* 6)+ 1
//     console.log(`you rolled ${numb}`);
    
// }
// rollDie()

// ex 11

// function printShoppingList(){
//     let list = ["bread" , "milk" , "egg" , "apple"]
//     console.log("grocery list:");
//     for (let item of list){
//         console.log("-"+item);
        
//     }
// }
// printShoppingList()

// ex 12

// function greetUser(){
//     let user = prompt("Таны нэр хэн бэ?")
//     alert(`Сайн уу, ${user}!`)
//     console.log(`Сайн уу, ${user}!`);
    
// }
// greetUser()

// ex 13

// function drawTriangle(){
//     for (let i = 1; i <= 5; i++) {
//         console.log("*".repeat(i));
        
//     }
// }
// drawTriangle()

// ex 14

// function displayTime(){
//     let now = new Date();
//     let year = now.getFullYear();
//     let month = now.getMonth() +1;
//     let day = now.getDate();
//     let hour = now.getHours();
//     let minute = now.getMinutes();
//     let second = now.getSeconds();
//     console.log(`Одоогийн цаг: ${year} - ${month} - ${day} - ${hour} - ${minute} - ${second}`);
    
// }
// displayTime()

// ex 15

// function multiplicationTable(){
//     let one = [7,14,21,28,35,42,49,56,63,70]
//         console.log(`7x1=${one [0]}`);
//         console.log(`7x2=${one [1]}`);
//         console.log(`7x3=${one [2]}`);
//         console.log(`7x4=${one [3]}`);
//         console.log(`7x5=${one [4]}`);
//         console.log(`7x6=${one [5]}`);
//         console.log(`7x7=${one [6]}`);
//         console.log(`7x8=${one [7]}`);
//         console.log(`7x9=${one [8]}`);
//         console.log(`7x10=${one[9]}`);
//     }
// multiplicationTable()

// ex 16

function countdown(){
    console.log("Тоолж эхэллээ...");
    
    for (let i = 10; i > 0; i--){
    console.log(i);    
    }
    console.log("launched");
}
countdown()