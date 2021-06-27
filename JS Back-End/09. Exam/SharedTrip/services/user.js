const User = require('../models/User.js');

module.exports = {
    createUser,
    getUserByEmail,
};

/* SWITCH BETWEEN USERNAME OR PASSWORD FUNCTIONS */

async function createUser(email, gender, hashedPassword) {
    const user = new User({ email, gender, hashedPassword });
    await user.save();
    return user;
}


/* SWITCH BETWEEN USERNAME OR PASSWORD FUNCTIONS */

async function getUserByEmail(email) {
    const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
    return user;
}