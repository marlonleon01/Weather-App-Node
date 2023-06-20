import axios from "axios"

function forecast(city, state, country, apiKey) {
    let url = ``

    if (city === undefined) {
        console.log("Please provide a city!")
    } else if (country === undefined && state === undefined) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    } else if (country === undefined) {
        country = state
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apiKey}`
    } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=${apiKey}`
    }

    axios.get(url)
        .then(response => {
            console.log(`It is currently ${response.data.main.temp} and feels like ${response.data.main.feels_like}.`)
        })
        .catch(error => {
            if (error.response && error.response.data) {
                console.log("Unable to find location")
            } else {
                console.log("Unable to connect to the internet")
            }
        })
}

export default forecast

