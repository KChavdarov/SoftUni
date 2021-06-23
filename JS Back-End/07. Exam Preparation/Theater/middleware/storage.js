const playService = require('../services/play.js');

module.exports = () => {
    return (req, res, next) => {
        req.storage = Object.assign({}, playService);
        next();
    };
};