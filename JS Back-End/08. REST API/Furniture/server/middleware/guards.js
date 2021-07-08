module.exports = {
    isAuth,
    isGuest,
    isOwner,
};

function isAuth() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.status(403).json({ message: 'Please sign in' });
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if (!req.user) {
            next();
        } else {
            res.status(400).json({ message: 'You are already signed in' });
        }
    };
}

function isOwner() {
    return (req, res, next) => {
        const item = req.data;
        if (req.user && (req.user._id == item._ownerId)) {
            next();
        } else {
            res.status(403).json({ message: 'You are not the owner of this item' });
        }
    };
}