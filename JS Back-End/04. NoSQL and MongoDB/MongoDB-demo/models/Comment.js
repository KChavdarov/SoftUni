const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    content: { type: String, required: true },
});

module.exports = mongoose.model('Comment', commentSchema);