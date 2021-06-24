const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    shoes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shoe'
    }]
});

module.exports = new mongoose.model('User', userSchema);