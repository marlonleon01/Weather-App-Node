import forecast from "./utils/forecast.js"


forecast(city, "Enter API KEY", (error, data) => {
    if (error) {
        return console.log(error)
    }

    console.log(data)
})