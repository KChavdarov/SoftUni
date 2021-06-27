const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },

    // ADDD AN ARRAY OF PRODUCTS BASED ON PROJECT REQUIREMENTS
    PRODUCTS: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shoe'
    }],

});

module.exports = new mongoose.model('User', userSchema);