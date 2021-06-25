const auth = require('../middleware/auth.js');
const logger = require('../middleware/logger.js');
const storage = require('../middleware/storage.js');

module.exports = (app) => {
    app.use(auth());
    app.use(storage());
    app.use(logger());
};