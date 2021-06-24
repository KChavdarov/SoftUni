const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET, COOKIE_NAME } = require('../config/index.js');
const userService = require('../services/user.js');

module.exports = () => {
    return (req, res, next) => {
        // Parses JWT and if verified calls next(), else return redirect to login page
        if (parseToken(req, res)) {
            req.auth = {
                async register({ username, password }) { //Accepts whole request body as an object, not individual params
                    const token = await registerUser(username, password);
                    res.cookie(COOKIE_NAME, token);
                },
                async login({ username, password }) {
                    const token = await loginUser(username, password);
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

async function registerUser(username, password) {
    const existing = await userService.getUserByUsername(username);
    if (existing) {
        throw new Error('Username already in use!');
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await userService.createUser(username, hashedPassword);

    return generateToken(user);
}

async function loginUser(username, password) {
    const user = await userService.getUserByUsername(username);

    if (user && await bcrypt.compare(password, user.hashedPassword)) {
        return generateToken(user);
    } else {
        throw new Error('Incorrect username or password');
    }
}

function generateToken(userData) {
    // Add additional elements to the user data if needed 
    const token = jwt.sign({ _id: userData._id, username: userData.username, }, TOKEN_SECRET);
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