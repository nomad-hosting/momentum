const h1 = document.querySelector("div.hello:first-child h1")

h1.addEventListener("click", handleTitleClick)

function handleTitleClick() {
    const clickedClass = "clicked"

    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass)
    } else {
        h1.classList.add(clickedClass)
    }
}