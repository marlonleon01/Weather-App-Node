import path, {dirname} from "path";
import { fileURLToPath } from "url"
import express from "express";
import hbs from "hbs"

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
    res.send({
        forecase: "Raining",
        location: "Miami"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})