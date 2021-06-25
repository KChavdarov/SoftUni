const authController = require('../controllers/authController.js');
const homeController = require('../controllers/homeController.js');
const productController = require('../controllers/productController.js');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/product', productController); // CHANGE CONTROLLER PATH
};