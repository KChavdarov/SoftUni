const Cube = require('../models/Cube.js');
const Comment = require('../models/Comment.js');
const Accessory = require('../models/Accessory.js');

async function init() {
    return (req, res, next) => {
        req.storage = {
            getAllItems,
            getItemById,
            addItem,
            updateItem,
            createComment,
            createAccessory,
            getAccessories,
            attachAccessory,
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
        const cube = await Cube.findById(id).populate('comments').populate('accessories').lean();
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

async function createComment(data) {
    const cube = await Cube.findById(data.cubeId);
    if (!cube) {
        throw new ReferenceError('Cube not found');
    }

    const comment = new Comment(data);
    await comment.save();

    cube.comments.push(comment);
    await cube.save();
}

async function createAccessory(data) {
    const accessory = new Accessory(data);
    return accessory.save();
}

async function getAccessories(existing) {
    return Accessory.find({ _id: { $nin: existing } }).lean();
}

async function attachAccessory(cubeId, accessoryId) {
    const [cube, accessory] = await Promise.all([
        Cube.findById(cubeId),
        Accessory.findById(accessoryId)
    ]);

    if (!cube || !accessory) {
        throw new ReferenceError('ID not found');
    }

    cube.accessories.push(accessory);
    return cube.save();
}

module.exports = { init };