const tripService = require('../services/trip.js');

module.exports = () => {
    return (req, res, next) => {
        req.storage = Object.assign({}, tripService);
        next();
    };
};