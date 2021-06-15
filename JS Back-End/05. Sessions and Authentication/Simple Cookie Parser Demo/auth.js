const bcrypt = require('bcrypt');
const users = {};

module.exports = (req, res, next) => {
    req.register = async (username, password) => {
        const id = (Math.random() * 999999 | 0).toString(16).padStart(6, '0');
        const hashedPassword = await bcrypt.hash(password, 8);
        users[id] = { username, hashedPassword };
    };
    req.login = async (username, password) => {
        const userData = Object.entries(users).find(([id, u]) => u.username == username);
        if (!userData) {
            return false;
        }
        const [id, user] = userData;
        const match = await bcrypt.compare(password, user.hashedPassword);
        if (match) {
            req.session.user = {
                _id: id,
                username
            };
            console.log(user);
            return true;
        } else {
            return false;
        }
    };
    next();
};