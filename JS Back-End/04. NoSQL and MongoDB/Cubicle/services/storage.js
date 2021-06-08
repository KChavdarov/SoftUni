const Cube = require('../models/Cube.js');

async function init() {
    return (req, res, next) => {
        req.storage = {
            getAllItems,
            getItemById,
            addItem,
            updateItem
        };
        next();
    };
}

async function getAllItems(query) {
    // const options = {};

    // if (query.search) {
    //     options.name = new RegExp(`${query.search}`, 'i');
    // }
    // if (query.from) {
    //     options.difficulty = { $gte: Number(query.from) };
    // }
    // if (query.to) {
    //     options.difficulty = options.difficulty || {};
    //     options.difficulty.$lte = Number(query.to);
    // }

    const options = { name: new RegExp(`${query.search || ''}`, 'i'), difficulty: { $gte: query.from || 0, $lte: query.to || 6 } };

    return Cube.find(options).lean();
}

async function getItemById(id) {
    try {
        const cube = await Cube.findById(id).lean();
        return cube;
    } catch {
        return undefined;
    }
}

async function addItem(item) {
    // don't await in order to use try/catch at next stage
    const cube = new Cube(item);
    return cube.save();
}

async function updateItem(id, item) {
    const cube = await Cube.findById(id);
    if (!cube) {
        throw new ReferenceError('Cube not found');
    }
    Object.assign(cube, item);
    return cube.save();
}

module.exports = { init };