module.exports = {
    index: (req, res) => {
        return res.render("index")
    },

    login: (req, res) => {
        return res.render("login")
    },

    error404: (req, res) => {
        return res.render("error404")
    }
}