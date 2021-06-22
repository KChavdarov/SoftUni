const User = require('../models/User.js');

module.exports = {
    createUser,
    getUserByUsername,
    getUserByEmail,
    bookHotel,
    getUserById,
};


async function createUser(username, email, hashedPassword) {
    const user = new User({ username, email, hashedPassword });
    await user.save();
    return user;
}

async function getUserByUsername(username) {
    const user = await User.findOne({ username: { $regex: new RegExp(`^${username}$`, 'i') } });
    return user;
}
async function getUserByEmail(email) {
    const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
    return user;
}

async function bookHotel(hotelId, userId) {
    const user = await User.findById(userId);
    if (user) {
        user.bookedHotels.push(hotelId);
        await user.save();
    } else {
        throw new Error('User not found');
    }
}

async function getUserById(id) {
    return await User.findById(id).populate('bookedHotels').lean();
}