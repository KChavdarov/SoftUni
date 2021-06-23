const Play = require('../models/Play.js');

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    editPlay,
    deletePlay,
    likePlay
};

async function getAllPlays() {
    return await Play.find({ isPublic: true }).sort('-createdAt').lean();
}

async function getPlayById(id) {
    return await Play.findById(id).lean();
}

async function createPlay(data) {
    const pattern = new RegExp(`^${data.title}$`, 'i');
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

async function likePlay(playId, userId) {
    const play = await Play.findById(playId);
    play.usersLiked.push(userId);
    await play.save();
    return play;
}