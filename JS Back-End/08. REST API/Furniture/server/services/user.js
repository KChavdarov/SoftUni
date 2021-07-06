const User = require('../models/User.js');

module.exports = {
    createUser,
    getUserByEmail,
};

async function createUser(email, hashedPassword) {
    const user = new User({ email, hashedPassword });
    await user.save();
    return user;
}

async function getUserByEmail(email) {
    const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
    return user;
}