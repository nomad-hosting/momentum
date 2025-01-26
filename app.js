
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

loginForm.addEventListener("submit", onLoginSubmit)

function onLoginSubmit(event) {
    event.preventDefault()
    const username = loginInput.value;
    loginForm.classList.toggle('hidden')
    console.log(username)
}

const link = document.querySelector("a")
link.addEventListener("click", handleLinkClick)
function handleLinkClick(event) {
    event.preventDefault()

    alert("click!")
}
