const productController = require('../controllers/product.js');
const accessoryController = require('../controllers/accessory.js');
const homeController = require('../controllers/home.js');
const commentController = require('../controllers/comment.js');
const authController = require('../controllers/auth.js');


module.exports = (app) => {
    app.use('/products', productController);
    app.use('/accessories', accessoryController);
    app.use('/comments', commentController);
    app.use('/auth', authController);

    app.use('/', homeController);
};