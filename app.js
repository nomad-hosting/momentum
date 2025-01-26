const title = document.querySelector("#title:first-child h1")

title.addEventListener("click", handleTitleClick)


function handleTitleClick() {
    title.style.color = 'red'
    console.log("title was clicked!")
}