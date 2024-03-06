const sessionServices = require("../services/sessionServices")
const bcrypt = require("bcryptjs")

module.exports = {
    index: (req, res) => {
        return res.render("index")
    },

    login: (req, res) => {
        return res.render("login")
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
            return res.redirect("/")
        }
    }
}