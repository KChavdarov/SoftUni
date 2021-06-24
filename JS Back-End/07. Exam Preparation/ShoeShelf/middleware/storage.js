const shoeService = require('../services/shoe.js');

module.exports = () => {
    return (req, res, next) => {
        // TODO -> Import Main model services
        req.storage = Object.assign({}, shoeService);
        next();
    };
};