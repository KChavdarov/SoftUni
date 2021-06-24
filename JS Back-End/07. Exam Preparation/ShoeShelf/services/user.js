const User = require('../models/User.js');

module.exports = {
    createUser,
    getUserByEmail,
};


async function createUser(email, username, hashedPassword) {
    const user = new User({email, username, hashedPassword});
    await user.save();
    return user;
}

async function getUserByEmail(email) {
    const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
    return user;
}