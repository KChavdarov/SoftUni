const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter article title, longer than 5 characters'],
        minLength: [5, 'Please enter article title, longer than 5 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please enter article description, longer than 20 characters'],
        minLength: [20, 'Please enter article description, longer than 20 characters'],
    },

    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },

});

module.exports = new mongoose.model('Article', articleSchema);