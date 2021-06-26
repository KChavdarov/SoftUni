const PRODUCT = require('../models/Product.js');

module.exports = {
    //EXPORT ALL FUNCTIONS!
    create,
    getById,
    getAll,
    edit,
    deleteById,
    PRODUCT_ACTION,
};

async function create(data) {
    const pattern = new RegExp(`^${data.name}$`, 'i');
    const existing = await PRODUCT.findOne({ name: pattern });
    if (existing) {
        throw new Error('Name already in use');
    } else {
        const PRODUCT = new PRODUCT(data);
        await PRODUCT.save();
        return PRODUCT;
    }
};

async function getById(id) {
    const PRODUCT = await PRODUCT.findById(id).lean();
    return PRODUCT;
};

async function getAll() {
    return await PRODUCT.find({}).lean(); //    ADD SORTING/FILTERING IF NECESSARY
};

async function edit(id, data) {
    const PRODUCT = await PRODUCT.findById(id);

    if (PRODUCT.name.toLowerCase() != data.name.toLowerCase()) {
        const pattern = new RegExp(`^${data.name}$`, 'i');
        const existing = await PRODUCT.findOne({ name: pattern });
        if (existing) {
            throw new Error('Name already in use');
        }
    }

    Object.assign(PRODUCT, data);
    await PRODUCT.save();
    return PRODUCT;
};

async function deleteById(id) {
    return await PRODUCT.findByIdAndDelete(id);
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