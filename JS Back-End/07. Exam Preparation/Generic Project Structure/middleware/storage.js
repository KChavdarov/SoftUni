// IMPORT ALL NECESSARY PRODUCT SERVICES AND ADD THEM TO THE STORAGE OBJECT

module.exports = () => {
    return (req, res, next) => {
        req.storage = Object.assign({});
        next();
    };
};