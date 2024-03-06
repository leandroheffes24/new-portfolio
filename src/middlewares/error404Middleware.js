function error404Middleware (req, res, next) {
    if(res.status(404)){
        return res.redirect("/error404")
    }
    next()
}

module.exports = error404Middleware