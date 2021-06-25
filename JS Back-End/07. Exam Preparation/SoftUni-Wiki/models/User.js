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

    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }],

});

module.exports = new mongoose.model('User', userSchema);