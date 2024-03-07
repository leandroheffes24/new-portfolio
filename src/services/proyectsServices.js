const {Proyects} = require("../../database/models")

module.exports = {
    createProduct: (proyect, image) => {
        // console.log("THIS IS THE PROYECT =>", proyect);
        // console.log("THIS IS THE IMAGE =>", image);
        return Proyects.create({
            id: proyect.id,
            name: proyect.proyectName,
            image: image,
            proyect_link: proyect.proyectLink,
            github_link: proyect.githubLink
        })
    }
}