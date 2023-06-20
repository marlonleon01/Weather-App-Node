import forecast from "./utils/forecast.js"

forecast(process.argv[2], process.argv[3], process.argv[4], "Enter API KEY")

console.log(process.argv[2])