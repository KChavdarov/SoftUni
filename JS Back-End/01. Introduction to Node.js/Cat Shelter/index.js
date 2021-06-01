const http = require('http');
const port = 3030;

const router = require('./router.js');
const defaultHandler = require('./controllers/default.js');
const homeController = require('./controllers/home.js');
const breedController = require('./controllers/breedForm.js');
const createBreed = require('./controllers/addBreed.js');
const catController = require('./controllers/catForm.js');
const addCat = require('./controllers/addCat.js');
const editCat = require('./controllers/editCat.js');
const updateCat = require('./controllers/updateCat.js');
const shelterCat = require('./controllers/shelterCat.js');
const removeCat = require('./controllers/removeCat.js');

router.get('/', homeController);
router.get('/cats/add-breed', breedController);
router.get('/cats/add-cat', catController);
router.get('/cats/edit', editCat);
router.get('/cats/shelter', shelterCat);

router.post('/cats/add-breed', createBreed);
router.post('/cats/add-cat', addCat);
router.post('/cats/edit', updateCat);
router.post('/cats/shelter', removeCat);


const server = http.createServer(requestHandler);
server.listen(port, () => console.log(`server listening on port ${port}`));

function requestHandler(req, res) {
    const url = new URL(req.url, `http://localhost:${port}`);
    req.itemId = url.searchParams.get('id');
    req.search = url.searchParams.get('search');
    console.log('>>>', req.method, url.pathname);
    let handler;
    handler = router.match(req.method, url.pathname) || defaultHandler;
    handler(req, res);
}