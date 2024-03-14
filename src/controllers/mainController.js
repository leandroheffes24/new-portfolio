const userServices = require("../database/services/users")
const proyectsServices = require("../services/proyectsServices")
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")
const { v4: uuidv4 } = require('uuid');

module.exports = {
    index: (req, res) => {
        return proyectsServices.getAllProyects().then(proyects => res.render("index", {proyects}))
    },

    login: (req, res) => {
        return res.render("login")
    },

    proyectCreate: (req, res) => {
        return res.render("createProyect")
    },

    proyectEdit: (req, res) => {
        const id = req.params.id
        return proyectsServices.getProyectById(id).then(proyect => res.render("editProyect", {proyect}))
    },

    proyectDelete: (req, res) => {
        const id = req.params.id
        return proyectsServices.deleteProyect(id).then(() => res.redirect("/"))
    },

    error404: (req, res) => {
        return res.render("error404")
    },

    access: async (req, res) => {
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
        }
        return res.redirect("/")

        // const userInDB = await sessionServices.findUserEmail(req.body.email)

        // if(!userInDB){
        //     return res.render("login", {
        //         errors: {
        //             email: {
        //                 msg: "Unregistered email"
        //             }
        //         }
        //     })
        // }

        // if (!bcrypt.compareSync(req.body.password, userInDB.password)){
        //     return res.render("login", {
        //         errors: {
        //             email: {
        //                 msg: "Incorrect password"
        //             }
        //         }
        //     })
        // } else {
        //     req.session.userLoggedIn = userInDB
        //     return res.redirect("/")
        // }
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

        return proyectsServices.createProyect(newProyect, req.file.filename).then(res.redirect("/"))
    },

    proyectEditProcess: async (req, res) => {
        let errors = validationResult(req)
        const id = req.params.id

        if(errors.errors.length > 0){
            const proyectToEdit = await proyectsServices.getProyectById(id)
            return res.render("editProyect", {errors: errors.mapped(), oldData: req.body, proyect:proyectToEdit})
        }

        const newProyect = req.body
        return proyectsServices.updateProyect(newProyect, req.file.filename, id).then(res.redirect("/"))
    }
}