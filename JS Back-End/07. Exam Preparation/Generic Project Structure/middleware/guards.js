module.exports = {
    isUser,
    isGuest,
};

function isUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            return res.redirect('/auth/login');
        }
    };
};

function isGuest() {
    return (req, res, next) => {
        if (!req.user) {
            next();
        } else {
            return res.redirect('/');
        }
    };
}