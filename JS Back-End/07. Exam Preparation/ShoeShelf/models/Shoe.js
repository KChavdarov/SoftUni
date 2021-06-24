const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter shoe name'],
    },
    price: {
        type: Number,
        minValue: [0, 'Price cannot be negative'],
        required: [true, 'Please enter a price']
    },
    imageUrl: {
        type: String,
        required: [true, 'Please enter a valid imageUrl'],
        match: [/^https?/i, 'Please enter a valid URL']
    },
    brand: {
        type: String,
        required: [true, 'Please enter brand name']
    },
    description: {
        type: String,
        required: [true, 'Please enter shoe description']
    },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    buyers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = new mongoose.model('Shoe', shoeSchema);