const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 500,
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