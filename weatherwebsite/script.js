const city = document.querySelector('#cityName')
const search = document.querySelector('#searchBtn')
const temp = document.querySelector('#temperature')
const humidity = document.querySelector('#humidity')
const windsp = document.querySelector('#wind')
const cityInput = document.querySelector('#city')
const icon = document.querySelector('#weatherIcon')

const apiKey = ""

// 🔹 Dummy data (jab tak API active nahi)
const dummyData = {
    name: "Delhi",
    main: {
        temp: 30,
        humidity: 45
    },
    wind: {
        speed: 3
    },
    weather: [
        { icon: "01d" }
    ]
}

// 🔹 Common UI update function
function showWeather(data) {
    city.innerText = data.name
    temp.innerText = `🌡 Temperature: ${data.main.temp}°C`
    humidity.innerText = `💧 Humidity: ${data.main.humidity}%`

    const windSpeed = (data.wind.speed * 3.6).toFixed(1)
    windsp.innerText = `💨 Wind: ${windSpeed} km/h`

    const iconCode = data.weather[0].icon
    icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}

// 🔹 Page load pe dummy data dikhao
showWeather(dummyData)

search.addEventListener("click", getWeather)

cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getWeather()
    }
})

async function getWeather() {

    const cityName = cityInput.value.trim()
    if (cityName === "") {
        alert("Enter city name")
        return
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        const response = await fetch(url)

        if (!response.ok) {
            alert("API not active yet or city not found")
            return
        }

        const data = await response.json()

        // 🔥 API ACTIVE → REAL DATA
        showWeather(data)

    } catch (error) {
        alert("Network error")
        console.log(error)
    }
}
