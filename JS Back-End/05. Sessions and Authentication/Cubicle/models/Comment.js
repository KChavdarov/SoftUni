const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: { type: String, required: true },
    content: { type: String, required: true, maxLength: 250 }
});

module.exports = mongoose.model('Comment', commentSchema);