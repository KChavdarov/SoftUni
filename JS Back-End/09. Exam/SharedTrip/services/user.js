const User = require('../models/User.js');

module.exports = {
    createUser,
    getUserByEmail,
    // getUserByUsername,

};

/* SWITCH BETWEEN USERNAME OR PASSWORD FUNCTIONS */

async function createUser(email, username, hashedPassword) {
    const user = new User({ email, username, hashedPassword });
    await user.save();
    return user;
}

// async function createUser(username, hashedPassword) {
//     const user = new User({username, hashedPassword});
//     await user.save();
//     return user;
// }


/* SWITCH BETWEEN USERNAME OR PASSWORD FUNCTIONS */

async function getUserByEmail(email) {
    const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
    return user;
}

// async function getUserByUsername(username) {
//     const user = await User.findOne({ username: { $regex: new RegExp(`^${username}$`, 'i') } });
//     return user;
// }