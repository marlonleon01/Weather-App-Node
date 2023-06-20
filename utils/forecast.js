import axios from "axios"

function forecast(city, state, country, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=${apiKey}`

    axios.get(url)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            if (error.response && error.response.data) {
                console.log(error.response.data.message)
            } else {
                console.log("Unable to connect to the internet")
            }
        })
}

export default forecast