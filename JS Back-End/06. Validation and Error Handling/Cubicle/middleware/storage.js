const productService = require('../services/product.js');
const accessoryService = require('../services/accessory.js');

async function init() {
    return (req, res, next) => {
        req.storage = Object.assign({}, productService, accessoryService);
        next();
    };
}

module.exports = init;