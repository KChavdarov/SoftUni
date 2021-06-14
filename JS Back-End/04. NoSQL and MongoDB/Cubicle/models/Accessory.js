const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
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
});

module.exports = new mongoose.model('Accessory', accessorySchema);