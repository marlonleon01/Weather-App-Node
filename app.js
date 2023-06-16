import axios from "axios"

const apiKey = "INCLUDE YOUR API KEY"
const url = `https://api.openweathermap.org/data/2.5/weather?q=Miami,fl,usa&units=imperial&appid=${apiKey}`

axios.get(url)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error.message)
    })