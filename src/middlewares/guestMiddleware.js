function guestMiddleware(req, res, next){
    if(!req.session.userLoggedIn) {
        return res.redirect("/")
    }
    next();
}

module.exports = guestMiddleware