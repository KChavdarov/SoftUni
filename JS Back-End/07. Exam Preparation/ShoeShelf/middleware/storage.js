module.exports = () => {
    return (req, res, next) => {
        // TODO -> Import Main model services
        req.storage = Object.assign({});
        next();
    };
};