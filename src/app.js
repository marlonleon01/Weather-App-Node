import path, {dirname} from "path";
import { fileURLToPath } from "url"
import express from "express";

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename) 
const publicDirectoryPath = path.join(__dirname, "../public")

app.use(express.static(publicDirectoryPath))

app.get("/weather", (req, res) => {
    res.send({
        forecase: "Raining",
        location: "Miami"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})