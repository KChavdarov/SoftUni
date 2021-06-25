const authController = require('../controllers/authController.js');
const homeController = require('../controllers/homeController.js');
const articleController = require('../controllers/articleController.js');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/articles', articleController); // CHANGE CONTROLLER PATH
};