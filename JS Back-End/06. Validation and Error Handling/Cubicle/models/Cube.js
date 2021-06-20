const mongoose = require('mongoose');

const NAME_PATTERN = /^[\s\d\w]+$/;

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        match: NAME_PATTERN,
    },
    description: {
        type: String,
        required: true,
        minLength: 20,
        maxLength: 500,
        match: NAME_PATTERN,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator() {
                this.imageUrl.startsWith('http://') || this.imageUrl.startsWith('https://');
            }
        }
    },
    difficulty: {
        type: Number,
        min: 1,
        max: 6
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    accessories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Accessory' }],
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Cube', cubeSchema);