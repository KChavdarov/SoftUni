const authController = require('../controllers/authController.js');
const homeController = require('../controllers/homeController.js');
const playController = require('../controllers/playController.js');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/', homeController);
    app.use('/plays', playController);
};