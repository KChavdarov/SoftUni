const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },

    trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip'
    }],

});

module.exports = new mongoose.model('User', userSchema);