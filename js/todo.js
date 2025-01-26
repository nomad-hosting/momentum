const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")
const TODO_KEY = "todos"

let todos = []

function saveTodos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos))
}


function deleteTodo(event) {
    // this one is ok too
    //todoList.removeChild(event.target.parentNode)

    const li = event.target.parentNode

    console.log(li.id)
    todos = todos.filter((d)=> d.id !== parseInt(li.id))
    saveTodos()

    li.remove()
}

function paintTodo(newTodoObj) {
    const newList = document.createElement("li")
    newList.id = newTodoObj.id

    const span = document.createElement("span")
    newList.appendChild(span)
    const button = document.createElement("button")  
    button.innerText = "X"
    button.classList.add("red")
    button.addEventListener("click", deleteTodo)

    newList.appendChild(button)

    span.innerText = newTodoObj.text

    todoList.appendChild(newList)
}

function handleTodoSubmit(event) {
    event.preventDefault()
    const newTodoObj = {text: todoInput.value, id:Date.now()}
    todos.push(newTodoObj)
    todoInput.value = ""  

    paintTodo(newTodoObj)
    saveTodos()
}

todoForm.addEventListener("submit", handleTodoSubmit)

const savedTodos = localStorage.getItem(TODO_KEY)

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos)
    todos = parsedTodos
    parsedTodos.forEach((todo)=>{
        paintTodo(todo)
    })
}