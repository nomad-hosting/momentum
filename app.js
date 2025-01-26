const h1 = document.querySelector("div.hello:first-child h1")

h1.addEventListener("click", handleTitleClick)

function handleTitleClick() {
    const currentColor = h1.style.color

    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato"
    } else {
        newColor = "blue"
    }

    h1.style.color = newColor
}