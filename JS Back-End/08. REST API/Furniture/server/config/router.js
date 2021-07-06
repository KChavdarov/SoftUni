const furnitureController = require('../controllers/furnitureController.js');
const userController = require('../controllers/userController.js');

module.exports = (app) => {
    app.get('/', (req, res) => res.send('API access available at endpoint \'/data\''));

    app.use('/data/catalog', furnitureController);
    app.use('/users', userController);
};