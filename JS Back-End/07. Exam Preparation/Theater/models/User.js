const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    likedPlays: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Play'
    }]
});

module.exports = new mongoose.model('User', userSchema);