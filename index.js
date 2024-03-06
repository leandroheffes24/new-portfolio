// -------------------- REQUIREMENTS --------------------

const express = require("express")
const mainRouter = require("./src/routers/mainRouter")
const error404Middleware = require("./src/middlewares/error404Middleware")

// -------------------- APP --------------------

const app = express()

// -------------------- SETTINGS --------------------

app.set("view engine", "ejs")
app.set("views", __dirname + "/src/views")

// -------------------- USES --------------------

app.use(express.static(__dirname + "/public"))

// -------------------- ROUTERS --------------------

app.use(mainRouter)
app.use(error404Middleware)

// -------------------- SERVER --------------------

const PORT = process.env.PORT || 3024
app.listen(PORT, () => console.log(`running server on port ${PORT}`))