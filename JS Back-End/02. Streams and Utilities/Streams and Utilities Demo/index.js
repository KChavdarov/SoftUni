const http = require('http');
const router = require('./router');

const defaultHandler = require('./controllers/defaultController.js');
const aboutController = require('./controllers/aboutController.js');
const homeController = require('./controllers/homeController.js');
const catalogController = require('./controllers/catalogController.js');
const createController = require('./controllers/createController.js');
const deleteController = require('./controllers/deleteController.js');
const uploadHandler = require('./controllers/uploadController.js');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/catalog', catalogController);
router.get('/delete', deleteController);

router.post('/create', createController);
router.post('/upload', uploadHandler);

const port = 3030;
const server = http.createServer(requestHandler);
server.listen(port, () => console.log(`Server listening on port ${port}`));

function requestHandler(req, res) {
    console.log('>>>', req.method, req.url);
    const url = new URL(req.url, 'http://localhost:3030');
    req.itemId = url.searchParams.get('id');
    const handler = router.match(req.method, url.pathname) || defaultHandler;
    handler(req, res);
}