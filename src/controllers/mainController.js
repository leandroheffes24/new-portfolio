const sessionServices = require("../services/sessionServices")
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")

module.exports = {
    index: (req, res) => {
        return res.render("index")
    },

    login: (req, res) => {
        return res.render("login")
    },

    proyectCreate: (req, res) => {
        return res.render("createProyect")
    },

    error404: (req, res) => {
        return res.render("error404")
    },

    access: async (req, res) => {
        const userInDB = await sessionServices.findUserEmail(req.body.email)

        if(!userInDB){
            return res.render("login", {
                errors: {
                    email: {
                        msg: "Unregistered email"
                    }
                }
            })
        }

        if (!bcrypt.compareSync(req.body.password, userInDB.password)){
            return res.render("login", {
                errors: {
                    email: {
                        msg: "Incorrect password"
                    }
                }
            })
        } else {
            req.session.userLoggedIn = userInDB
            return res.render("index", {userLoggedIn:userInDB})
        }
    },

    proyectCreateProcess: (req, res) => {
        let errors = validationResult(req)
        console.log("ESTOS SON LOS ERRORES => ", errors.mapped());

        // if (errors.errors.length > 0) {
        //     return res.render("createProyect", {errors: errors.mapped(), oldData: req.body})
        // }
    }
}