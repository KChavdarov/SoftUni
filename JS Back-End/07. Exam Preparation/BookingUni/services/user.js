const User = require('../models/User.js');

module.exports = {
    createUser,
    getUserByUsername,
};


async function createUser(username, hashedPassword) {
    const user = new User({username, hashedPassword});
    await user.save();
    return user;
}

async function getUserByUsername(username) {
    const user = await User.findOne({ username: { $regex: new RegExp(`^${username}$`, 'i') } });
    return user;
}