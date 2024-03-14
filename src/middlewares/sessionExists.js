function sessionExists (req, res, next) {
    res.locals.sessionExists = false
    if(req.session && req.session.userLoggedIn){
        res.locals.sessionExists = true
    }

    next()
}

module.exports = sessionExists