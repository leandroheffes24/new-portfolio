const express = require("express")
const app = express()
const mainRouter = require("./src/routers/mainRouter")

app.set("view engine", "ejs")
app.set("views", __dirname + "/src/views")

app.use(express.static(__dirname + "/public"))

app.use(mainRouter)

const PORT = 3024
app.listen(PORT, console.log(`running server on port ${PORT}`))