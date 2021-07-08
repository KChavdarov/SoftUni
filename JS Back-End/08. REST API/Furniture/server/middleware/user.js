const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createUser, getUserByEmail } = require('../services/user.js');
const { TOKEN_SECRET } = require('../config/index.js');

module.exports = () => (req, res, next) => {
    if (parseToken(req, res)) {
        req.auth = {
            register,
            login,
            logout,
        };
        next();
    }
};

async function register(email, password) {
    const existing = await getUserByEmail(email);
    if (existing) {
        throw new Error('Email already in use');
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser(email, hashedPassword);
        const token = createToken(user);
        return {
            accessToken: token,
            _id: user._id,
            email: user.email
        };
    }
}

async function login(email, password) {
    const user = await getUserByEmail(email);
    if (user) {
        const isMatch = bcrypt.compare(password, user.hashedPassword);
        if (isMatch) {
            const token = createToken(user);
            return {
                accessToken: token,
                _id: user._id,
                email: user.email
            };
        } else {
            throw new Error('Incorrect username or password');
        }
    } else {
        throw new Error('Incorrect username or password');
    }
}

async function logout(req, res) {
}

function createToken(user) {
    const token = jwt.sign({
        _id: user._id,
        email: user.email,
    }, TOKEN_SECRET);
    return token;
}

function parseToken(req, res) {
    const token = req.headers['x-authorization'];
    if (token) {
        try {
            const userData = jwt.verify(token, TOKEN_SECRET);
            req.user = userData;
        } catch (err) {
            console.log(err.message);
            // res.status(401).json({ message: 'Invalid access token' });
            // return false;
        }
    }
    return true;
}