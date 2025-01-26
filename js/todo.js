const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")


function paintTodo(newTodo) {
    const newList = document.createElement("li")
    const span = document.createElement("span")
    newList.appendChild(span)

    span.innerText = newTodo

    todoList.appendChild(newList)
}

function handleTodoSubmit(event) {
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ""  
    
    paintTodo(newTodo)
}

todoForm.addEventListener("submit", handleTodoSubmit)