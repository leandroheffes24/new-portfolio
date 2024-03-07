const {body} = require("express-validator")
const path = require("path")

module.exports = [
    body("proyectName").notEmpty().withMessage("You must enter a name for the project."),
    body("proyectImage").custom((value, {req}) => {
        let file = req.file
        let acceptedExtensions = [".png", ".jpg", ".webp"]

        if(!file){
            throw new Error("You must upload an image.")
        } else {
            let extensionFile = path.extname(file.originalname)

            if(!acceptedExtensions.includes(extensionFile)){
                throw new Error(`Accepted extensions: ${acceptedExtensions.join(", ")}`)
            }
        }

        return true
    })
]