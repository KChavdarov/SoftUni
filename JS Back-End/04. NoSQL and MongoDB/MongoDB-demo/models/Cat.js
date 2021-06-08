const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator(value) {
                return value[0].toLocaleUpperCase() === value[0];
            },
            message: 'Name must start with a capital letter - {VALUE}'
        }
    },
    color: {
        type: String,
        required: true,
        enum: {
            values: ['white', 'grey', 'orange', 'black', 'mixed'],
            message: 'Cat cannot be of color {VALUE}'
        }
    }
});

module.exports = mongoose.model('Cat', catSchema);