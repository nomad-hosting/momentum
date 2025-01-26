
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const HIDDEN_CLASSNAME = "hidden"

loginForm.addEventListener("submit", onLoginSubmit)


const greeting = document.querySelector("#greeting")
function onLoginSubmit(event) {
    event.preventDefault()
    loginForm.classList.toggle(HIDDEN_CLASSNAME)
    const username = loginInput.value;

    greeting.innerText = `Hello ${username}`
    greeting.classList.toggle(HIDDEN_CLASSNAME)
}

const link = document.querySelector("a")
link.addEventListener("click", handleLinkClick)
function handleLinkClick(event) {
    event.preventDefault()

    alert("click!")
}
