const Article = require('../models/Article.js');

module.exports = {
    //EXPORT ALL FUNCTIONS!
    create,
    getById,
    getAll,
    getAllTitles,
    edit,
    deleteById,
    PRODUCT_ACTION,
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

async function getAll() {
    return await Article.find({}).lean(); //    ADD SORTING/FILTERING IF NECESSARY
};

async function getAllTitles() {
    return await Article.find({}).select('title').lean(); //    ADD SORTING/FILTERING IF NECESSARY
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



//  ADD ANY SPECIFIC FUNCTIONS TO IMPLEMENT COMMENT/LIKE/BUY/ETC. ACTIONS

async function PRODUCT_ACTION(PRODUCT_Id, userId) {
    const PRODUCT = await PRODUCT.findById(PRODUCT_Id);
    if (PRODUCT) {
        const isACTIONED = Boolean(PRODUCT.users.find(b => b == userId));
        if (isACTIONED) {
            throw new Error('User has already ACTION the PRODUCT');
        } else {
            PRODUCT.users.push(userId);
            await PRODUCT.save();
            return PRODUCT;
        }
    } else {
        throw new Error('PRODUCT not found');
    }
}