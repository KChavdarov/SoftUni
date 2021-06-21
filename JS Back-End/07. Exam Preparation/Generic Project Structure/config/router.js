const authController = require('../controllers/authController.js');

module.exports = (app) => {
    app.use('/auth', authController);
};