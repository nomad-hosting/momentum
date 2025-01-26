const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date()
    const hours = `${date.getHours()}`.padStart(2, "0")
    const minutes = `${date.getMinutes()}`.padStart(2, "0")
    const seconds = `${date.getSeconds()}`.padStart(2, "0")

    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000)