import path, {dirname} from "path";
import { fileURLToPath } from "url"
import express from "express";
import hbs from "hbs"
import forecast from "../utils/forecast.js";

const app = express()

//Define paths for Express config
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename) 
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

//Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

//Setup static director to serve
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "Marlon Leon"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About me",
        name: "Marlon Leon"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        helpMessage: "Help message",
        title: "Help",
        name: "Marlon Leon"
    })
})

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You must provide an address"
        })
    }

    forecast(req.query.address, "Enter Your API Key", (error, data) => {
        if (error) {
            return res.send({error})
        }

        res.send({
            forecast: data.forecast,
            location: `${data.city}, ${data.country}`,
            address: req.query.address
        })
    })
})

app.get("/products", (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term"
        })
    }

    res.send({
        forecast: "Raining",
        location: "Miami",
        products: []
    })
})

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404 Error",
        errorMessage: "Help article not found",
        name: "Marlon Leon"
    })
})

app.get("*", (req, res) => {
    res.render("404", {
        title: "404 Error",
        errorMessage: "Page not found",
        name: "Marlon Leon"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})