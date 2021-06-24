const homeController = require('../controllers/homeController.js');
const authController = require('../controllers/authController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
};