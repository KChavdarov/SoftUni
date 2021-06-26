const User = require('../models/User.js');

module.exports = {
    createUser,
    getUserByUsername,
    enroll,
};


async function createUser(username, hashedPassword) {
    const user = new User({ username, hashedPassword });
    await user.save();
    return user;
}

async function getUserByUsername(username) {
    const user = await User.findOne({ username: { $regex: new RegExp(`^${username}$`, 'i') } });
    return user;
}

async function enroll(courseId, userId) {
    const user = await User.findById(userId);
    if (user) {
        const isEnrolled = Boolean(user.courses.find(c => c == courseId));
        if (isEnrolled) {
            throw new Error('User is already enrolled in the course');
        } else {
            user.courses.push(courseId);
            await user.save();
            return user;
        }
    } else {
        throw new Error('User not found');
    }
}