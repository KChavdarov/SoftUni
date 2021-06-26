const authController = require('../controllers/authController.js');
const homeController = require('../controllers/homeController.js');
const courseController = require('../controllers/courseController.js');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/courses', courseController);
};