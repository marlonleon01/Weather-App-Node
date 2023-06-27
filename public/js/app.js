const weatherForm = document.getElementById("weather-form")
const locationInput = document.getElementById("location-input")
const messageOne = document.getElementById("message-1")
const messageTwo = document.getElementById("message-2")

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const location = locationInput.value

    messageOne.textContent = "Loading Weather Forecast"
    messageTwo.textContent = ""

    fetch(`http://localhost:3000/weather?address=${location}`)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
})