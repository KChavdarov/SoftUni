const Shoe = require('../models/Shoe.js');

module.exports = {
    createShoe,
    getAllShoes,
    getShoeById,
    editShoe,
    deleteShoe,
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
    const shoe = await Shoe.findById(id);
    return shoe;
};

async function getAllShoes() {
    return await Shoe.find({});
};

async function editShoe(id, shoeData) {};

async function deleteShoe(id) {};