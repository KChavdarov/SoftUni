const bcrypt = require('bcrypt');
const userService = require('../services/user.js');
const jwt = require('jsonwebtoken');

module.exports = () => (req, res, next) => {
    req.auth = {
        register,
        login
    };
    next();

    async function register({username, password, repeatPassword}) {
        if (username == '' || password == '' || repeatPassword == '') {
            throw new Error('All fields are required!');
        } else if (password !== repeatPassword) {
            throw new Error('Passwords don\'t match!');
        } else {
            const hashedPassword = await bcrypt.hash(password, 8);
            await userService.createUser(username, hashedPassword);
        }
    }


    async function login(username, password) {
        const user = await userService.getUserByUsername(username);
        if (!user) {
            throw new Error('Wrong username or password!');
        } else {
            const isMatch = await bcrypt.compare(password, user.hashedPassword);
            if (isMatch) {
                const userViewModel = { _id: user._id, username: user.username };
                const token = jwt.sign(userViewModel, 'my very secure secret');
                res.cookie('SESSION_DATA', token, { httpOnly: true });
                req.user = userViewModel;
            } else {
                throw new Error('Wrong username or password!');
            }
        }
    }
};