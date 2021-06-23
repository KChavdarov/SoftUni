const Play = require('../models/Play.js');

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    editPlay,
    deletePlay,
};

async function getAllPlays() {
    return await Play.find({}).lean();
}

async function getPlayById(id) {
    return await Play.findById(id).lean();
}

async function createPlay(data) {
    const play = new Play(data);
    await play.save();
    return play;
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