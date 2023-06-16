import axios from "axios"

const apiKey = "USE YOUR API KEY"
const url = `https://api.openweathermap.org/data/2.5/weather?q=Miami,fl,usa&units=imperial&appid=${apiKey}`

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