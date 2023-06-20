import forecast from "./utils/forecast.js"

const location = {
    city: process.argv[2],
    state: process.argv[3],
    country: process.argv[4]
}

forecast(location, "ENTER API KEY")