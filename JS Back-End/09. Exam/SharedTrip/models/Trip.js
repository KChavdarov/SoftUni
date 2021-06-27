const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    start: {
        type: String,
        required: [true, 'Please enter departure point'],
        minLength: [4, 'Please enter departure point'],
    },
    end: {
        type: String,
        required: [true, 'Please enter arrival point'],
        minLength: [4, 'Please enter departure point'],
    },
    date: {
        type: String,
        required: [true, 'Please enter departure date'],
    },
    time: {
        type: String,
        required: [true, 'Please enter departure time'],
    },
    description: {
        type: String,
        required: [true, 'Please enter trip description longer than 10 characters'],
        minLength: [10, 'Please enter trip description longer than 10 characters' ]
    },
    seats: {
        type: Number,
        min: [0, 'Please enter a price between 1 and 50'],
        max: [4, 'Please enter a price between 1 and 50'],
        required: [true, 'Please enter a price between 1 and 50']
    },
    price: {
        type: Number,
        min: [1, 'Please enter a price between 1 and 50'],
        max: [50, 'Please enter a price between 1 and 50'],
        required: [true, 'Please enter a price between 1 and 50']
    },
    imageUrl: {
        type: String,
        required: [true, 'Please enter a valid image URL'],
        match: [/^https?/i, 'Please enter a valid image URL']
    },
    car: {
        type: String,
        required: [true, 'Please enter car brand longer than 4 characters'],
        minLength: [4, 'Please enter car brand longer than 4 characters'],
    },

    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    
    createdAt: { type: Date, default: Date.now },

    buddies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = new mongoose.model('Trip', tripSchema);