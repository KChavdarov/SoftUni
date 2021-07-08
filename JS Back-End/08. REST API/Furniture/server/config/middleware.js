const cors = require('../middleware/cors.js');
const logger = require('../middleware/logger.js');
const storage = require('../middleware/storage.js');
const user = require('../middleware/user.js');

module.exports = (app) => {
    app.use(cors());
    app.use(logger());
    app.use(storage());
    app.use(user());
};