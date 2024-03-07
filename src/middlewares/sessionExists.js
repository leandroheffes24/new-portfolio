function sessionExists (req, res, next) {
    console.log("SESSION EXISTS MIDDLEWARE EXECUTED");

    res.locals.sessionExists = false
    if(req.session && req.session.userLoggedIn){
        res.locals.sessionExists = true
    }

    console.log("ESTE ES EL ESTADO => " + res.locals.sessionExists);

    next()
}

module.exports = sessionExists