const { parseErrorMessage } = require('../util/parser.js');

module.exports = (paramName = 'id') => async (req, res, next) => {
    try {
        const item = await req.storage.getById(req.params[paramName]);
        if (item) {
            item._ownerId = item.owner;
            req.data = item;
        } else {
            const error = new Error('Record does not exist');
            error.status = 404;
            throw error;
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(error.status || 404).json({
            message: parseErrorMessage(error).join('\n'),
        });
    }
};