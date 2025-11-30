document.write("Domument.write")
console.log(document);

// getelementbyid
let text = document.getElementById("text")
document.getElementById("text").textContent="new text!";

// queryselector
let query = document.querySelector("#query")
document.querySelector("#query").textContent = "querySelector!";

let list = document.querySelectorAll("li")
console.log(list);


// style change

let style = document.querySelector("p")
style.style.color = "blue"
style.style.backgroundColor = "cyan"
style.style.fontSize = "50px"

// attribute change
document.querySelector("img").src = "https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/20586/516506/heroimage0.327162001643150501.jpg"
document.getElementById("meow").src = "https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?width=1200&quality=85&auto=format&fit=max&s=ece1ea9d22adb87f37b4361ae1c23eb2"

// create Element, appendchild
let divTag = document.createElement("div");
divTag.textContent = "hellooo kitten!"
document.body.appendChild(divTag);

// remove element
let  li = document.getElementById("groon")
li.remove();

// even listener
button.addEventListener("click",function () {
    alert ("you clicked")
}) 