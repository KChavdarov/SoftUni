const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/cubicle';

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            autoIndex: false,
        });
        const db = mongoose.connection;
        db.on('open', () => {
            console.log('Database connected!');
            resolve('');
        });
        db.on('error', (err) => {
            console.error(err);
            reject(err.message);
        });
    });
};