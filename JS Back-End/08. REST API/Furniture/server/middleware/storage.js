const furnitureService = require('../services/furniture.js');

module.exports = () => (req, res, next) => {
    req.storage = Object.assign({}, furnitureService);
    next();
};