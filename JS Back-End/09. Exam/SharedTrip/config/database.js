const mongoose = require('mongoose');
const { DB_CONNECTION_STRING } = require('./index.js');

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = mongoose.connection;
        db.on('open', () => {
            console.log('Database connected!');
            resolve();
        });
        db.on('error', (err) => {
            console.error(err);
            reject(err.message);
        });
    });
};