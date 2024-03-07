const {Router} = require('express');
const router = Router();
const proyectsController = require("../../controllers/api/proyectsController")

router.get("/proyects", proyectsController.list)

module.exports = router;