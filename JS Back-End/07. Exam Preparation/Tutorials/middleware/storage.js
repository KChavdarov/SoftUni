const courseServices = require('../services/course.js');

module.exports = () => {
    return (req, res, next) => {
        req.storage = Object.assign({}, courseServices);
        next();
    };
};