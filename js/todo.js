const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")


function deleteTodo(event) {
    // this one is ok too
    //todoList.removeChild(event.target.parentNode)

    event.target.parentNode.remove()
}

function paintTodo(newTodo) {
    const newList = document.createElement("li")

    const span = document.createElement("span")
    newList.appendChild(span)
    const button = document.createElement("button")  
    button.innerText = "X"
    button.classList.add("red")
    button.addEventListener("click", deleteTodo)

    newList.appendChild(button)

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