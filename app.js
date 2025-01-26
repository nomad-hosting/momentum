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

window.addEventListener("resize", handleWindowResize)

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"
}