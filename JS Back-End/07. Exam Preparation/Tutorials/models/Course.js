const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter course title'],
    },
    description: {
        type: String,
        required: [true, 'Please enter course description shorter than 50 characters'],
        maxLength: [50, 'Please enter course description shorter than 50 characters'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Please enter a valid imageUrl'],
        match: [/^https?/i, 'Please enter a valid URL']
    },
    duration: {
        type: String,
        required: [true, 'Please enter course duration'],
    },

    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },

    //  ADD ARRAY OF USER OBJECT IDs TO IMPLEMENT LIKE/COMMENT/BUY/ETC.
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = new mongoose.model('Course', courseSchema);