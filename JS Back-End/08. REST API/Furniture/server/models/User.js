const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    furniture: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Furniture'
    }]
});

module.exports = new mongoose.model('User', userSchema);