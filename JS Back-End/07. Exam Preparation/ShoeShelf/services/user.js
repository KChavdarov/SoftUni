const User = require('../models/User.js');

module.exports = {
    createUser,
    getUserByEmail,
    buyShoe,
    getUserById,
};


async function createUser(email, username, hashedPassword) {
    const user = new User({ email, username, hashedPassword });
    await user.save();
    return user;
}

async function getUserByEmail(email) {
    const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
    return user;
}

async function getUserById(id){
    const user = await User.findById(id).populate('shoes').lean();
    return user;
}

async function buyShoe(shoeId, userId) {
    const user = await User.findById(userId);
    if (user) {
        const isBought = Boolean(user.shoes.find(s => s == shoeId));
        console.log(isBought);
        if (isBought) {
            throw new Error('User has already bought these shoes');
        } else {
            user.shoes.push(shoeId);
            await user.save();
            return user;
        }
    } else {
        throw new Error('User not found');
    }
};