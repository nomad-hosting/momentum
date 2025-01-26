const API_KEY = "151f1a606ac2d91a11ffa47fc6e5a4d7"

async function onGeoOk(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metric`

    const ret = await fetch(url);
    const data = await ret.json()

    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")

    weather.innerText = data.weather[0].main
    city.innerText = data.name
}

function onGeoError() {
    alert("can't find you. no weather for you")
}

console.log(navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError))