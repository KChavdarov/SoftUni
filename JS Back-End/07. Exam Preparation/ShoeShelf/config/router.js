const homeController = require('../controllers/homeController.js');
const authController = require('../controllers/authController.js');
const shoeController = require('../controllers/shoeController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/shoes', shoeController);
};