const http = require('http');
const port = 3030;

const router = require('./router.js');
const defaultHandler = require('./controllers/default.js');
const homeController = require('./controllers/home.js');
const breedController = require('./controllers/breed.js');
const createBreed = require('./controllers/addBreed.js');
const catController = require('./controllers/cat.js');
const addCat = require('./controllers/addCat.js');

router.get('/', homeController);
router.get('/cats/add-breed', breedController);
router.get('/cats/add-cat', catController);

router.post('/cats/add-breed', createBreed);
router.post('/cats/add-cat', addCat);

const server = http.createServer(requestHandler);
server.listen(port, () => console.log(`server listening on port ${port}`));

function requestHandler(req, res) {
    const url = new URL(req.url, `http://localhost:${port}`);
    console.log('>>>', req.method, url.pathname);
    let handler;
    handler = router.match(req.method, url.pathname) || defaultHandler;
    handler(req, res);
}