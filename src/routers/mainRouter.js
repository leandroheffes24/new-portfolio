// -------------------- REQUIREMENTS --------------------

const {Router} = require("express")
const mainController = require("../controllers/mainController")
const userLoggedInMiddleware = require("../middlewares/userLoggedInMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware")

// -------------------- ROUTER --------------------

const router = Router()

// -------------------- ROUTES --------------------

router.get("/", mainController.index)
router.get("/login", userLoggedInMiddleware, mainController.login)
router.post("/login", mainController.access)
router.get("/proyect-create", guestMiddleware, mainController.proyectCreate)
router.post("/proyect-create", guestMiddleware, mainController.proyectCreateProcess)
router.get("/error404", mainController.error404)

// -------------------- EXPORT --------------------

module.exports = router