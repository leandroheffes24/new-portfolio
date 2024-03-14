const fs = require("fs")
const path = require("path")
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getProyects: function() {
        const filePath = path.join(__dirname, "../proyects.json");
        const proyects = JSON.parse(fs.readFileSync(filePath, "utf-8"))
        return proyects
    },

    saveProyect: function(proyects) {
        const filePath = path.join(__dirname, "../proyects.json")
        fs.writeFileSync(filePath, JSON.stringify(proyects, null, 2))
    },

    getProyectById: function(id) {
        return this.getProyects().find(proyect => proyect.id == id)
    },

    createProyect: function(proyect, image) {
        const proyects = this.getProyects()

        const newProyect = {
            id: uuidv4(),
            name: proyect.proyectName,
            image: image,
            proyect_link: proyect.proyectLink,
            github_link: proyect.githubLink
        }

        proyects.push(newProyect)
        this.saveProyect(proyects)
    },

    updateProyect: function(proyect, image, id){
        const proyects = this.getProyects()
        const proyectToEdit = proyects.find((proyectToEdit) => proyectToEdit.id == id)

        const newProyect = {
            image: image,
            name: proyect.proyectName,
            proyect_link: proyect.proyectLink,
            github_link: proyect.githubLink,
            id: id
        }

        Object.assign(proyectToEdit, newProyect)
        this.saveProyect(proyects)
    },

    deleteProyect: function(id){
        const proyects = this.getProyects()
        const proyectToDelete = proyects.filter(proyect => proyect.id != id)
        this.saveProyect(proyectToDelete)
    }
}