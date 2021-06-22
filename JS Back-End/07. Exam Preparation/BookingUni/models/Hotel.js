const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Username must be at least 4 characters long'],
        minLength: [4, 'Username must be at least 4 characters long']
    },
    city: {
        type: String,
        required: [true, 'City must be at least 3 characters long'],
        minLength: [3, 'City must be at least 3 characters long']
    },
    imageUrl: {
        type: String,
        required: [true, 'Please enter a valid image URL'],
        match: [/^https?/i, 'Please enter a valid image URL'],
    },
    rooms: {
        type: Number,
        min: [1, 'Room count must be between 1 and 100'],
        max: [100, 'Room count must be between 1 and 100'],
        required: [true, 'Room count must be between 1 and 100'],
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Hotel', hotelSchema);