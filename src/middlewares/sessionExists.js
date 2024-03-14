function sessionExists (req, res, next) {
    res.locals.sessionExists = false
    console.log("NO EXISTE SESSION");
    if(req.session && req.session.userLoggedIn){
        res.locals.sessionExists = true
        console.log("EXISTE SESSION");
    }

    next()
}

module.exports = sessionExists