function userLoggedInMiddleware(req, res, next){
    if(req.session.userLoggedIn) {
        return res.redirect("/")
    }
    next();
}

module.exports = userLoggedInMiddleware