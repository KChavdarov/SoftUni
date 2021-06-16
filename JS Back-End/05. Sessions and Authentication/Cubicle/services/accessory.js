const Accessory = require('../models/Accessory.js');

async function createAccessory(data) {
    const accessory = new Accessory(data);
    return accessory.save();
}

async function getAccessories(existing) {
    return Accessory.find({ _id: { $nin: existing } }).lean();
}

module.exports = {
    createAccessory,
    getAccessories,
};