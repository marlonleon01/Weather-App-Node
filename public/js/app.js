const weatherForm = document.getElementById("weather-form")
const locationInput = document.getElementById("location-input")

async function fetchWeather(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const location = locationInput.value

    fetchWeather(`http://localhost:3000/weather?address=${location}`)
})