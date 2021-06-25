const articleServices = require('../services/article.js');

module.exports = () => {
    return (req, res, next) => {
        req.storage = Object.assign({}, articleServices);
        next();
    };
};