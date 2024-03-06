// -------------------- REQUIREMENTS --------------------

const {Router} = require("express")
const mainController = require("../controllers/mainController")

// -------------------- ROUTER --------------------

const router = Router()

// -------------------- ROUTES --------------------

router.get("/", mainController.index)
router.get("/login", mainController.login)
router.get("/error404", mainController.error404)

// -------------------- EXPORT --------------------

module.exports = router