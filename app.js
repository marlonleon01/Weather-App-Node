import forecast from "./utils/forecast.js"


forecast("Miami", "Enter Your API Key", (error, data) => {
    if (error) {
        return console.log(error)
    }

    console.log(data)
})