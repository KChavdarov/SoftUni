const Course = require('../models/Course.js');

module.exports = {
    //EXPORT ALL FUNCTIONS!
    create,
    getById,
    getAll,
    getTop,
    edit,
    deleteById,
    PRODUCT_ACTION,
};

async function create(data) {
    const pattern = new RegExp(`^${data.title}$`, 'i');
    const existing = await Course.findOne({ title: pattern });
    if (existing) {
        throw new Error('Course with this title already exists');
    } else {
        const course = new Course(data);
        await course.save();
        return course;
    }
};

async function getById(id) {
    const course = await Course.findById(id).lean();
    return course;
};

async function getAll() {
    return await Course.find({}).sort('-createdAt').lean(); //    ADD SORTING/FILTERING IF NECESSARY
};

async function getTop() {
    return await Course.find({}).sort('-users').limit(3).lean(); //    ADD SORTING/FILTERING IF NECESSARY
};

async function edit(id, data) {
    const course = await Course.findById(id);

    if (course.title.toLocaleLowerCase() != data.title.toLocaleLowerCase()) {
        const pattern = new RegExp(`^${data.title}$`, 'i');
        const existing = await Course.findOne({ title: pattern });
        if (existing) {
            throw new Error('Course with this title already exists');
        }
    }

    Object.assign(course, data);
    await course.save();
    return course;
};

async function deleteById(id) {
    return await Course.findByIdAndDelete(id);
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