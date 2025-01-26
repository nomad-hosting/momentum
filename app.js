const h1 = document.querySelector("div.hello:first-child h1")

h1.addEventListener("click", handleTitleClick)

function handleTitleClick() {
    const clickedClass = "clicked"

    h1.classList.toggle(clickedClass)
}