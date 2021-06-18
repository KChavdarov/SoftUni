const User = require('../models/User.js');

async function createUser(username, hashedPassword) {
    const user = await new User({
        username,
        hashedPassword
    });
    await user.save();
    return user;
}

async function getUserByUsername(username) {
    return await User.findOne({ username: { $regex: username, $options: 'i' } });
}

module.exports = {
    createUser,
    getUserByUsername,
};