const Play = require('../models/Play.js');

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    editPlay,
    deletePlay,
};

async function getAllPlays() {
    return await Play.find({ isPublic: true }).sort('-createdAt').lean();
}

async function getPlayById(id) {
    return await Play.findById(id).lean();
}

async function createPlay(data) {
    console.log(data);
    const pattern = new RegExp(`^${data.title}$`, 'i');
    console.log(pattern);
    const existing = await Play.findOne({ title: pattern });
    if (existing) {
        throw new Error('Play with this title already exists');
    } else {
        const play = new Play(data);
        await play.save();
        return play;
    }
}

async function editPlay(id, data) {
    const play = await Play.findById(id);
    Object.assign(play, data);
    await play.save();
    return play;
}

async function deletePlay(id) {
    return await Play.findByIdAndDelete(id);
}