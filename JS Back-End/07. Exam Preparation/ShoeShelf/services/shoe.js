const Shoe = require('../models/Shoe.js');

module.exports = {
    createShoe,
    getAllShoes,
    getShoeById,
    editShoe,
    deleteShoe,
    sellShoe,
    getUserShoeCount,
};

async function createShoe(shoeData) {
    const pattern = new RegExp(`^${shoeData.name}$`, 'i');
    const existing = await Shoe.findOne({ name: pattern });
    if (existing) {
        throw new Error('Name already in use');
    } else {
        const shoe = new Shoe(shoeData);
        await shoe.save();
        return shoe;
    }
};

async function getShoeById(id) {
    const shoe = await Shoe.findById(id).lean();
    return shoe;
};

async function getAllShoes() {
    return await Shoe.find({}).sort('-buyers').lean();
};

async function editShoe(id, shoeData) {
    const shoe = await Shoe.findById(id);

    if (shoe.name.toLowerCase() != shoeData.name.toLowerCase()) {
        const pattern = new RegExp(`^${shoeData.name}$`, 'i');
        const existing = await Shoe.findOne({ name: pattern });
        if (existing) {
            throw new Error('Name already in use');
        }
    }

    Object.assign(shoe, shoeData);
    await shoe.save();
    return shoe;
};

async function deleteShoe(id) {
    return await Shoe.findByIdAndDelete(id);
};

async function sellShoe(shoeId, userId) {
    const shoe = await Shoe.findById(shoeId);
    if (shoe) {
        const isSold = Boolean(shoe.buyers.find(b => b == userId));
        console.log(isSold);
        if (isSold) {
            throw new Error('User has already bought these shoes');
        } else {
            shoe.buyers.push(userId);
            await shoe.save();
            return shoe;
        }
    } else {
        throw new Error('Shoe not found');
    }
}

async function getUserShoeCount(userId) {
    return await Shoe.find({ creator: userId }).count();
}