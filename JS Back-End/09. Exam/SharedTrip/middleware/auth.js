const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET, COOKIE_NAME } = require('../config/index.js');
const userService = require('../services/user.js');

module.exports = () => {
    return (req, res, next) => {
        if (parseToken(req, res)) {
            req.auth = {

                async register({ email, gender, password }) {
                    const token = await registerUser(email, gender, password);
                    res.cookie(COOKIE_NAME, token);
                },


                async login({ email, password }) {
                    const token = await loginUser(email, password);
                    res.cookie(COOKIE_NAME, token);
                },


                logout() {
                    res.clearCookie(COOKIE_NAME);
                },

            };
            next();
        }
    };
};

async function registerUser(email, gender, password) {
    
    const existing = await userService.getUserByEmail(email);
    if (existing) {
        throw new Error('Email already in use!');
    }
    
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await userService.createUser(email, gender, hashedPassword);

    return generateToken(user);
}

async function loginUser(email, password) {
    
    const user = await userService.getUserByEmail(email);

    if (user && await bcrypt.compare(password, user.hashedPassword)) {
        return generateToken(user);
    } else {
        throw new Error('Incorrect username or password');
    }
}

function generateToken(userData) {
    const token = jwt.sign({ _id: userData._id, gender: userData.gender, email: userData.email }, TOKEN_SECRET);
    return token;
}

function parseToken(req, res) {
    const token = req.cookies[COOKIE_NAME];
    if (token) {
        try {
            const userData = jwt.verify(token, TOKEN_SECRET);
            req.user = userData;
            res.locals.user = userData;
        } catch {
            res.clearCookie(COOKIE_NAME);
            res.redirect('/auth/login');
            return false;
        }
    }
    return true;
}