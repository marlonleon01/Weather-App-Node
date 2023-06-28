import axios from "axios"

function forecast(city, apiKey, callback) {
    let url = ``

    if (city === undefined) {
        console.log("Please provide a city!")
    } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
        
        axios.get(url)
        .then(response => {
            callback(undefined, {
                city: response.data.name, 
                country: response.data.sys.country, 
                forecast: `It is currently ${response.data.main.temp} and feels like ${response.data.main.feels_like}. The humidity is ${response.data.main.humidity}%.`
            })
        })
        .catch(error => {
            if (error.response && error.response.data) {
                callback("Unable to find location", undefined)
            } else {
                callback("Unable to connect to the internet", undefined)
            }
        })
    }
}

export default forecast