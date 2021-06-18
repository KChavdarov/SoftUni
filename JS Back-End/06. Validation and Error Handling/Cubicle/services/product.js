const Cube = require('../models/Cube.js');
const Comment = require('../models/Comment.js');
const Accessory = require('../models/Accessory.js');

async function getAllItems(query) {
    const options = { name: new RegExp(`${query.search || ''}`, 'i'), difficulty: { $gte: query.from || 0, $lte: query.to || 6 } };
    return Cube.find(options).lean();
}

async function getItemById(id) {
    try {
        const cube = await Cube
            .findById(id)
            .populate({ path: 'comments', populate: { path: 'author', select: 'username' } })
            .populate('accessories')
            .populate({ path: 'author', select: 'username' })
            .lean();
        return cube;
    } catch {
        return undefined;
    }
}

async function addItem(item) {
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

async function deleteItem(id) {
    const cube = await Cube.findById(id);
    if (!cube) {
        throw new ReferenceError('Cube not found');
    }
    await Cube.findByIdAndDelete(id);
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

module.exports = {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem,
    createComment,
    attachAccessory,
};