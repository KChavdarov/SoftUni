const hotel = require('../services/hotel.js');

module.exports = () => {
    return (req, res, next) => {
        req.storage = { ...hotel };
        next();
    };
};