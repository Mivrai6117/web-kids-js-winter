let form = document.getElementById("form")
let input = document.getElementById("input")
let todolist = document.getElementById("todos")
let todos = JSON.parse(localStorage.getItem("todos"))

const updateLocalStorage = () =>{
    const todosElement = document.querySelectorAll("li");
    const todos = [];
    todosElement.forEach((todosElement) =>{
        todos.push({
            Text : todosElement.innerText,
            completed: todosElement.classList.contains("completed")
        })
    })
    localStorage.setItem("todos",JSON,stringify(todos))
}

const addTodo = (todo) => {
    let todoText = input.value;
    if (todo) todoText = todo.Text
    if (todoText) {
        const todoElement = document.createElement("li");
        if (todo && todo.completed) {
            todoElement.classList.add("completed");
        }
        todoElement.innerText = todoText;
        todoElement.addEventListener("click" , () => {
            todoElement.classList.toggle("completed");
            updateLocalStorage();
        });
        todoElement.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoElement.remove();
            updateLocalStorage();
        });
        todolist.appendChild(todoElement);
        input.value = "";
        updateLocalStorage();
    };
};

if (todos) {
    todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    addTodo();
});
