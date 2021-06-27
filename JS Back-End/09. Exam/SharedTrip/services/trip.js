const Trip = require('../models/Trip.js');
const User = require('../models/User.js');

module.exports = {
    create,
    getById,
    getAll,
    edit,
    deleteById,
    joinTrip,
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
    const trip = await Trip.findById(id).populate('creator').populate('buddies').lean();
    return trip;
};

async function getAll() {
    return await Trip.find({}).lean(); //    ADD SORTING/FILTERING IF NECESSARY
};

async function edit(id, data) {
    const trip = await Trip.findById(id);
    Object.assign(trip, data);
    await trip.save();
    return trip;
};

async function deleteById(id) {
    return await Trip.findByIdAndDelete(id);
};

async function joinTrip(tripId, userId) {
    const trip = await Trip.findById(tripId);
    const user = await User.findById(userId);

    if (trip && user) {
        trip.buddies.push(user);
        trip.seats--;
        user.trips.push(trip);
        await Promise.all([
            trip.save(),
            user.save()
        ]);
        return trip;
    } else {
        throw new Error('Error occurred while joining trip');
    }
}