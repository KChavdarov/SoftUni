const Furniture = require('../models/Furniture.js');

module.exports = {
    getAll,
    getById,
    create,
};

async function getAll() {
    return await Furniture.find({});
}

async function getById(id) {
    return await Furniture.findById(id);
}

async function create(data) {
    const furniture = new Furniture(data);
    await furniture.save();
    return furniture;
}