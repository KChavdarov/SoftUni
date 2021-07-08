const Furniture = require('../models/Furniture.js');

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
};

async function getAll() {
    return await Furniture.find({}).lean();
}

async function getById(id) {
    return await Furniture.findById(id).lean();
}

async function create(data) {
    const item = new Furniture(data);
    await item.save();
    return item;
}

async function updateById(id, data) {
    const item = await Furniture.findById(id);
    Object.assign(item, data);
    item.save();
    return item;
}

async function deleteById(id){
    return await Furniture.findByIdAndDelete(id);
}