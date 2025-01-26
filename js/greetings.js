
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"


const greeting = document.querySelector("#greeting")
function onLoginSubmit(event) {
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, loginInput.value)
    paintGreetings()
}

const savedUsername = localStorage.getItem(USERNAME_KEY)
if (savedUsername === null ) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings()
}

function paintGreetings() {
    const username = localStorage.getItem('username')
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}