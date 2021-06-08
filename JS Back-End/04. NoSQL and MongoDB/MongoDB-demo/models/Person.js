const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: {
        type: Number,
        required: true,
        min: [0, 'Age cannot be negative!']
    }
});

personSchema.methods.identify = function() {
    return `${this.firstName} ${this.lastName}`;
};

personSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`;
});

personSchema.methods.sayHi = function() {
    return `My name is ${this.fullName} and I am ${this.age} years old`;
};

module.exports = mongoose.model('Person', personSchema);