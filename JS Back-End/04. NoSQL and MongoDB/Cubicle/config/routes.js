const { catalog } = require('../controllers/catalog.js');
const { defaultHandler } = require('../controllers/default.js');
const { about } = require('../controllers/about.js');
const { create, post } = require('../controllers/create.js');
const { details, attach, attachPost } = require('../controllers/details.js');
const { edit, update } = require('../controllers/edit.js');
const { postComment } = require('../controllers/comment.js');
const { createAccessory, accessoryPost } = require('../controllers/accessory.js');


module.exports = (app) => {
    // setup route handlers
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/create', create);
    app.post('/create', post);
    app.get('/edit/:id', edit);
    app.post('/edit/:id', update);
    app.post('/comments/:cubeId', postComment);
    app.get('/accessory/create', createAccessory);
    app.post('/accessory/create', accessoryPost);
    app.get('/details/:cubeId/attach', attach);
    app.post('/details/:cubeId/attach', attachPost);

    // setup default handler
    app.all('*', defaultHandler);
};