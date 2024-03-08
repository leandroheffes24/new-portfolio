// -------------------- REQUIREMENTS --------------------

const express = require("express")
const mainRouter = require("./src/routers/mainRouter")
const methodOverride = require("method-override");
const session = require ('express-session');

// ---------- MIDDLEWARES ----------

const error404Middleware = require("./src/middlewares/error404Middleware")
const sessionExists = require("./src/middlewares/sessionExists")

// -------------------- APP --------------------

const app = express()

// -------------------- CORS --------------------

const cors = require("cors");
app.use(
    cors(
        (corsOptions = {
        origin: "*",
        })
    )
);

// -------------------- SETTINGS --------------------

app.set("view engine", "ejs")
app.set("views", __dirname + "/src/views")

// -------------------- USES --------------------

app.use(express.static(__dirname + "/public"))
app.use(methodOverride("_method"))
app.use(
    session({
        secret:"sessionGeneral",
        resave:false,
        saveUninitialized:false,
    })
)
app.use(express.urlencoded({extended: false}))
app.use(sessionExists)

// -------------------- ROUTERS --------------------

app.use(mainRouter)
app.use(error404Middleware)

// -------------------- SERVER --------------------

const PORT = process.env.PORT || 3024
app.listen(PORT, () => console.log(`running server on port ${PORT}`))