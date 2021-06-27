const Trip = require('../models/Trip.js');
const User = require('../models/User.js');

module.exports = {
    create,
    getById,
    getAll,
    edit,
    deleteById,
    PRODUCT_ACTION,
};

async function create(data) {
    const user = await User.findById(data.creator);
    const trip = new Trip(data);

    trip.buddies.push(user);
    user.trips.push(trip);

    await trip.save();
    await user.save();

    return trip;
};

async function getById(id) {
    const trip = await Trip.findById(id).lean();
    return trip;
};

async function getAll() {
    return await Trip.find({}).lean(); //    ADD SORTING/FILTERING IF NECESSARY
};





async function edit(id, data) {
    const trip = await Trip.findById(id);

    if (trip.name.toLowerCase() != data.name.toLowerCase()) {
        const pattern = new RegExp(`^${data.name}$`, 'i');
        const existing = await trip.findOne({ name: pattern });
        if (existing) {
            throw new Error('Name already in use');
        }
    }

    Object.assign(trip, data);
    await trip.save();
    return trip;
};




async function deleteById(id) {
    return await Trip.findByIdAndDelete(id);
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