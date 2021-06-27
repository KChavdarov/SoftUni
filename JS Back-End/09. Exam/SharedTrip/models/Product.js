const mongoose = require('mongoose');

const PRODUCT_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter shoe name'],
    },
    description: {
        type: String,
        required: [true, 'Please enter shoe description']
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

    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },

    //  ADD ARRAY OF USER OBJECT IDs TO IMPLEMENT LIKE/COMMENT/BUY/ETC.
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = new mongoose.model('PRODUCT', PRODUCT_Schema);