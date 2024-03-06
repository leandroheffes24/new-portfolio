// -------------------- REQUIREMENTS --------------------

const {Router} = require("express")
const mainController = require("../controllers/mainController")
const userLoggedInMiddleware = require("../middlewares/userLoggedInMiddleware")

// -------------------- ROUTER --------------------

const router = Router()

// -------------------- ROUTES --------------------

router.get("/", mainController.index)
router.get("/login", userLoggedInMiddleware, mainController.login)
router.post("/login", mainController.access)
router.get("/error404", mainController.error404)

// -------------------- EXPORT --------------------

module.exports = router