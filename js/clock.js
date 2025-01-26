const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date()
    const dateString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    clock.innerText = dateString
}

getClock()
setInterval(getClock, 1000)