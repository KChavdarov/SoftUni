const cors = require('../middleware/cors.js');
const logger = require('../middleware/logger.js');
const storage = require('../middleware/storage.js');

module.exports = (app) => {
    app.use(cors());
    app.use(logger());
    app.use(storage());
};