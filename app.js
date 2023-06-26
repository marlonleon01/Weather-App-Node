import forecast from "./utils/forecast.js"


forecast(city, apiKey, (error, data) => {
    if (error) {
        return console.log(error)
    }

    console.log(data)
})