const userServices = require("../database/services/users")
const proyectsServices = require("../database/services/proyects")
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")
const { v4: uuidv4 } = require('uuid');

module.exports = {
    index: (req, res) => {
        fetch('https://leandro-heffes.vercel.app/api/proyects')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const proyects = proyectsServices.getProyects()
            return res.render("index", {proyects, data})
        })
    },

    login: (req, res) => {
        return res.render("login")
    },

    proyectCreate: (req, res) => {
        return res.render("createProyect")
    },

    proyectEdit: (req, res) => {
        const id = req.params.id
        const proyect = proyectsServices.getProyectById(id)
        return res.render("editProyect", {proyect})
    },

    proyectDelete: (req, res) => {
        const id = req.params.id
        proyectsServices.deleteProyect(id)
        res.redirect("/")
    },

    error404: (req, res) => {
        return res.render("error404")
    },

    access: (req, res) => {
        const user = userServices.findUserEmail(req.body.email)

        if(!user){
            return res.render("login", {
                errors: {
                    email: {
                        msg: "Unregistered email"
                    }
                }
            })
        }
        if(!bcrypt.compareSync(req.body.password, user.password)){
            return res.render("login", {
                errors: {
                    password: {
                        msg: "Incorrect password"
                    }
                }
            })
        } else {
            req.session.userLoggedIn = user
            return res.redirect("/")
        }
    },

    proyectCreateProcess: (req, res) => {
        let errors = validationResult(req)
        // console.log("THESE ARE THE ERRORS => ", errors);
        // console.log("THESE ARE THE MAPPED ERRORS => ", errors.mapped());
        // console.log("ERRORS.ERRORS =>", errors.errors);
        // console.log("THIS IS THE BODY =>", req.body);

        if (errors.errors.length > 0) {
            return res.render("createProyect", {errors: errors.mapped(), oldData: req.body})
        }

        let newProyect = {
            id: uuidv4(),
            ...req.body
        }

        proyectsServices.createProyect(newProyect, req.file.filename)

        return res.redirect("/")
    },

    proyectEditProcess: (req, res) => {
        let errors = validationResult(req)
        const id = req.params.id

        if(errors.errors.length > 0){
            const proyectToEdit = proyectsServices.getProyectById(id)
            return res.render("editProyect", {errors: errors.mapped(), oldData: req.body, proyect:proyectToEdit})
        }

        const newProyect = req.body
        proyectsServices.updateProyect(newProyect, req.file.filename, id)
        return res.redirect("/")
    }
}