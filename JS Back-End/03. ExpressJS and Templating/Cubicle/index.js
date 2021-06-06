// initialize Express and HBS
const express = require('express');
const hbs = require('express-handlebars');
const { catalog } = require('./controllers/catalog.js');
const { defaultHandler } = require('./controllers/default.js');
const { about } = require('./controllers/about.js');
const { create, post } = require('./controllers/create.js');
const { details } = require('./controllers/details.js');
const { init } = require('./models/storage.js');
const { edit, update } = require('./controllers/edit.js');
const port = 3030;

start();

async function start() {
    const app = express();

    app.engine('.hbs', hbs({
        extname: '.hbs'
    }));

    app.set('view engine', '.hbs');
    // setup Static Files
    app.use('/static', express.static('static'));
    // setup form-parser
    app.use(express.urlencoded({ extended: true }));
    // setup storage middleware
    app.use(await init());

    // setup route handlers
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/create', create);
    app.post('/create', post);
    app.get('/edit/:id', edit);
    app.post('/edit/:id', update);

    // setup default handler
    app.all('*', defaultHandler);

    // start app
    app.listen(port, () => console.log('Server listening on port ' + port));
}