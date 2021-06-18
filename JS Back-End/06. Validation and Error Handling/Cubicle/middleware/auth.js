const bcrypt = require('bcrypt');
const userService = require('../services/user.js');
const jwt = require('jsonwebtoken');
const { COOKIE_NAME, TOKEN_SECRET } = require('../config/index.js');

module.exports = () => (req, res, next) => {
    req.auth = {
        register,
        login,
        logout,
    };

    if (readToken()) {
        next();
    }

    async function register({ username, password, repeatPassword }) {
        if (username == '' || password == '' || repeatPassword == '') {
            throw new Error('All fields are required!');
        } else if (password !== repeatPassword) {
            throw new Error('Passwords don\'t match!');
        } else {
            const hashedPassword = await bcrypt.hash(password, 8);
            const user = await userService.createUser(username, hashedPassword);
            req.user = createToken(user);
        }
    }

    async function login(username, password) {
        const user = await userService.getUserByUsername(username);
        if (!user) {
            throw new Error('Wrong username or password!');
        } else {
            const isMatch = await bcrypt.compare(password, user.hashedPassword);
            if (isMatch) {
                req.user = createToken(user);
            } else {
                throw new Error('Wrong username or password!');
            }
        }
    }

    function logout() {
        return res.clearCookie(COOKIE_NAME);
    }

    function readToken() {
        const token = req.cookies[COOKIE_NAME];
        if (token) {
            try {
                const userData = jwt.verify(token, TOKEN_SECRET);
                req.user = userData;
                res.locals.user = userData;
            } catch (err) {
                res.clearCookie(COOKIE_NAME);
                res.redirect('/auth/login');
                return false;
            }
        }
        return true;
    }

    function createToken(user) {
        const userViewModel = { _id: user._id, username: user.username };
        const token = jwt.sign(userViewModel, TOKEN_SECRET);
        res.cookie(COOKIE_NAME, token, { httpOnly: true });
        return userViewModel;
    }
};