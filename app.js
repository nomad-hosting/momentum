const title = document.querySelector("#title:first-child h1")

title.addEventListener("click", handleTitleClick)
title.addEventListener("mouseenter", handleMouseEnter)

function handleTitleClick() {
    title.style.color = 'red'
    console.log("title was clicked!")
}

function handleMouseEnter() {
    console.log("mouse is here")
}