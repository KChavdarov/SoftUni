const Trip = require('../models/Trip.js');
const User = require('../models/User.js');

module.exports = {
    create,
    getById,
    getAll,
    edit,
    deleteById,
    joinTrip,
    getUserTrips,
};

async function create(data) {
    const user = await User.findById(data.creator);
    const trip = new Trip(data);

    user.trips.push(trip);

    await trip.save();
    await user.save();

    return trip;
};

async function getById(id) {
    // const trip = await Trip.findById(id).where({ isDeleted: false }).populate('creator').populate('buddies').lean();
    const trip = await Trip.findById(id).where().populate('creator').populate('buddies').lean();
    return trip;
};

async function getAll() {
    // return await Trip.find({ isDeleted: false }).lean();
    return await Trip.find().lean();
};

async function edit(id, data) {
    const trip = await Trip.findById(id);
    Object.assign(trip, data);
    await trip.save();
    return trip;
};

async function deleteById(id) {
    // const trip = await Trip.findById(id);
    // trip.isDeleted = true;
    // await trip.save();
    // return trip;
    return await Trip.findByIdAndDelete(id);
};

async function joinTrip(tripId, userId) {
    const trip = await Trip.findById(tripId);

    if (trip) {
        trip.buddies.push(userId);
        trip.seats--;
        await trip.save();
        return trip;
    } else {
        throw new Error('Error occurred while joining trip');
    }
}

async function getUserTrips(userId) {
    const user = await User.findById(userId).populate('trips').lean();
    return user;
}