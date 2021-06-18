module.exports = {
    isAuth,
    isGuest,
    isOwner,
};

function isAuth(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/auth/login');
    }
}

function isGuest(req, res, next) {
    if (!req.user) {
        next();
    } else {
        res.redirect('/products');
    }
}

function isOwner(req, res, next) {
    if (req.data.cubicle && req.user && (req.data.cubicle.author._id == req.user._id)) {
        next();
    } else {
        return res.redirect('/products/details/' + req.params.id);
    }
}