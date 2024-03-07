// -------------------- REQUIREMENTS --------------------

const {Router} = require("express")
const mainController = require("../controllers/mainController")
const userLoggedInMiddleware = require("../middlewares/userLoggedInMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware")
const multerUpload = require("./multer/multerConfig")
const proyectsValidation = require("../validations/proyectsValidation")
const apiRouter = require("./api/index")

// -------------------- ROUTER --------------------

const router = Router()

// -------------------- ROUTES --------------------

router.use("/api", apiRouter)

router.get("/", mainController.index)
router.get("/login", userLoggedInMiddleware, mainController.login)
router.post("/login", mainController.access)
router.get("/proyect-create", guestMiddleware, mainController.proyectCreate)
router.post("/proyect-create", multerUpload.single("proyectImage"), proyectsValidation, guestMiddleware, mainController.proyectCreateProcess)
router.get("/error404", mainController.error404)

// -------------------- EXPORT --------------------

module.exports = router