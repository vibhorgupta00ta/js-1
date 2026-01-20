const city = document.querySelector('#cityName')
const search = document.querySelector('#searchBtn')
const temp = document.querySelector('#temperature')
const humidity = document.querySelector('#humidity')
const windsp = document.querySelector('#wind')
const cityInput = document.querySelector('#city')
const icon = document.querySelector('#weatherIcon')
const aqiEl = document.querySelector('#aqi')

const apiKey = "e0a8d3c769485119ee1960edb6e4a3fc"

search.addEventListener("click", getWeather)

cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getWeather()
    }
})

async function getWeather() {
    const cityName = cityInput.value.trim()
    if (cityName === "") return alert("Enter city name")

    try {
        const weatherRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        )
        if (!weatherRes.ok) throw new Error("City not found")

        const weatherData = await weatherRes.json()

        city.innerText = weatherData.name
        temp.innerText = `🌡 Temperature: ${weatherData.main.temp}°C`
        humidity.innerText = `💧 Humidity: ${weatherData.main.humidity}%`

        const windSpeed = (weatherData.wind.speed * 3.6).toFixed(1)
        windsp.innerText = `💨 Wind: ${windSpeed} km/h`

        icon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

        const { lat, lon } = weatherData.coord
        const aqiRes = await fetch(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
        )
        const aqiData = await aqiRes.json()

        const pm25 = aqiData.list[0].components.pm2_5

        const aqiNumber = calculateAQI(pm25)
        const aqiLabel = getAqiLabel(aqiNumber)

        aqiEl.innerText = `🌫 AQI: ${aqiNumber} (${aqiLabel})`

    } catch (err) {
        alert(err.message)
        console.error(err)
    }
}

function calculateAQI(pm25) {
    if (pm25 <= 12) return Math.round(pm25 * 4.17)
    if (pm25 <= 35.4) return Math.round(((pm25 - 12.1) / (35.4 - 12.1)) * (100 - 51) + 51)
    if (pm25 <= 55.4) return Math.round(((pm25 - 35.5) / (55.4 - 35.5)) * (150 - 101) + 101)
    if (pm25 <= 150.4) return Math.round(((pm25 - 55.5) / (150.4 - 55.5)) * (200 - 151) + 151)
    if (pm25 <= 250.4) return Math.round(((pm25 - 150.5) / (250.4 - 150.5)) * (300 - 201) + 201)
    return Math.round(((pm25 - 250.5) / (500.4 - 250.5)) * (500 - 301) + 301)
}

function getAqiLabel(aqi) {
    if (aqi <= 50) return "Good 😊"
    if (aqi <= 100) return "Moderate 🙂"
    if (aqi <= 150) return "Unhealthy 😐"
    if (aqi <= 200) return "Very Unhealthy 😷"
    if (aqi <= 300) return "Hazardous ☠️"
    return "Severe ☠️"
}
