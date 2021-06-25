const Article = require('../models/Article.js');

module.exports = {
    create,
    getById,
    getLatest,
    getAllTitles,
    edit,
    deleteById,
};

async function create(data) {
    const pattern = new RegExp(`^${data.title}$`, 'i');
    const existing = await Article.findOne({ title: pattern });
    if (existing) {
        throw new Error('Title already in use');
    } else {
        const article = new Article(data);
        await article.save();
        return article;
    }
};

async function getById(id) {
    const article = await Article.findById(id).lean();
    return article;
};

async function getLatest() {
    return await Article.find({}).limit(3).sort('-createdAt').lean();
};

async function getAllTitles(query) {
    const pattern = new RegExp(`${query}`, 'i');
    return await Article.find({ title: pattern }).select('title').lean();
};

async function edit(id, data) {
    const article = await Article.findById(id);
    Object.assign(article, data);
    await article.save();
    return article;
};

async function deleteById(id) {
    return await Article.findByIdAndDelete(id);
};