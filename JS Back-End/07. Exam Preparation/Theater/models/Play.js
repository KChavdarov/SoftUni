const mongoose = require('mongoose');

const playSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
    },
    description: {
        type: String,
        required: [true, 'Please enter a description shorter than 50 characters'],
        maxLength: [50, 'Please enter a description shorter than 50 characters'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Please enter a valid Image URL'],
        match: [/^https?/i, 'Please enter a Image URL'],
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    usersLiked: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = new mongoose.model('Play', playSchema);