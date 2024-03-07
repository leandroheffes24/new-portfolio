const proyectsServices = require("../../services/proyectsServices")

module.exports = {
    list: async (req, res) => {
        const proyects = await proyectsServices.getAllProyects()

        res.json({
            meta: {
                url: req.originalUrl,
                total: proyects.length
            },
            proyects: proyects.map(proyect => ({
                id: proyect.id,
                name: proyect.name,
                image: proyect.image,
                proyect_link: proyect.proyect_link,
                github_link: proyect.github_link
            }))
        })
    }
}