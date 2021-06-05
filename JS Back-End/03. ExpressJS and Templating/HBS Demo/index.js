const express = require('express');
const hbs = require('express-handlebars');
const router = require('./controllers/catalog.js');
const catalogController = require('./controllers/catalog.js');
const homeController = require('./controllers/home.js');
const logger = require('./logger.js');
const init = require('./util/database.js');
const bodyParser = require('express').urlencoded({ extended: true });
const port = 3030;

async function startApp() {
    const app = express();

    app.engine('.hbs', hbs({
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs');

    app.use(logger);
    app.use(bodyParser);
    app.use(await init());
    app.use('/static', express.static('static'));
    app.use('/catalog', router);

    app.get('/', homeController);
    app.get('/catalog', catalogController);

    app.listen(port, () => console.log('Server listening on port ' + port));
}

startApp();