const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, minValue: 0, required: true },
    imageUrl: { type: String, required: true },
    brand: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    buyers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});