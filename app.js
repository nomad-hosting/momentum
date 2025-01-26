const title = document.querySelector("div.hello:first-child h1")

title.addEventListener("click", handleTitleClick)
title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseleave", handleMouseLeave)

function handleTitleClick() {
    title.style.color = 'red'
    console.log("title was clicked!")
}

function handleMouseEnter() {
    title.innerText = "mouse is here"
}

function handleMouseLeave() {
    title.innerText = "mouse is leave"
}

// window event
window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy() {
    alert("copier")
}

function handleWindowOffline() {
    alert("SOS no wifi")
}

function handleWindowOnline() {
    alert("online!")
}