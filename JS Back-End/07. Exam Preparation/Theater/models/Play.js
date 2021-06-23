const mongoose = require('mongoose');

const playSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?/i,
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: String || Date,
        required: true,
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