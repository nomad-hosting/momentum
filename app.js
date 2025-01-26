
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

loginForm.addEventListener("submit", onLoginSubmit)

function onLoginSubmit(event) {
    event.preventDefault()
    console.log(event) 
    const username = loginInput.value

    console.log(username)
}