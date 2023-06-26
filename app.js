import forecast from "./utils/forecast.js"


forecast("Miami", "5703d78c1b92bdddcfcf6201163a5d5f", (error, data) => {
    if (error) {
        return console.log(error)
    }

    console.log(data)
})