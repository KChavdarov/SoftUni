const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    make: {
        type: String,
        required: [true, 'Make must be at least 4 characters long'],
        minLength: [4, 'Make must be at least 4 characters long']
    },
    model: {
        type: String,
        required: [true, 'Model must be at least 4 characters long'],
        minLength: [4, 'Model must be at least 4 characters long']
    },
    img: {
        type: String,
        required: [true, 'Please enter a valid url'],
        // match: [/^https?/i, 'Please enter a valid URL'],
    },
    description: {
        type: String,
        required: [true, 'Description must be at least 10 characters long'],
        minLength: [10, 'Description must be at least 10 characters long']
    },
    material: { type: String },
    price: {
        type: Number,
        required: [true, 'Please enter a valid price'],
        min: [0, 'Please enter a valid price'],
    },
    year: {
        type: Number,
        required: [true, 'Year must be between 1950 and 2050'],
        min: [1950, 'Year must be between 1950 and 2050'],
        max: [2050, 'Year must be between 1950 and 2050'],
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = new mongoose.model('Furniture', furnitureSchema);