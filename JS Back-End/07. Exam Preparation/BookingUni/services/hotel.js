const Hotel = require('../models/Hotel.js');

module.exports = {
    createHotel,
    getAllHotels,
    getHotelById,
    updateHotel,
    addReservation,
    deleteHotelById,
};

async function createHotel(hotelData) {
    const hotel = new Hotel(hotelData);
    await hotel.save();

    return hotel;
}
async function getAllHotels() {
    const hotels = await Hotel.find({}).sort('-rooms').lean();
    return hotels;
}

async function getHotelById(id) {
    const hotel = await Hotel.findById(id).lean();
    return hotel;
}

async function updateHotel(id, hotelData) {
    const hotel = await Hotel.findById(id);
    if (hotel) {
        Object.assign(hotel, hotelData);
        await hotel.save();
        return hotel;
    } else {
        throw new Error('Hotel not found');
    }
}

async function deleteHotelById(id) {
    await Hotel.findByIdAndDelete(id);
}

async function addReservation(hotelId, userId) {
    const hotel = await Hotel.findById(hotelId);
    if (hotel) {
        hotel.reservations.push(userId);
        await hotel.save();
        return hotel;
    } else {
        throw new Error('Hotel not found');
    }
}