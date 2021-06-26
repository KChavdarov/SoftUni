const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter course title longer than 4 characters'],
        minLength: [4, 'Please enter course title longer than 4 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please enter course description between 20 and 50 characters'],
        maxLength: [50, 'Please enter course description between 20 and 50 characters'],
        minLength: [20, 'Please enter course description between 20 and 50 characters'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Please enter a valid image URL'],
        match: [/^https?/i, 'Please enter a valid image URL']
    },
    duration: {
        type: String,
        required: [true, 'Please enter course duration'],
    },

    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    createdAt: { type: Date, default: Date.now },

    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = new mongoose.model('Course', courseSchema);