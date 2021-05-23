const http = require('http');
const aboutController = require('./controllers/aboutController.js');
const homeController = require('./controllers/homeController.js');
const catalogController = require('./controllers/catalogController.js');
const router = require('./router');

router.registerHandler('/', homeController);
router.registerHandler('/about', aboutController);
router.registerHandler('/catalog',catalogController);

const port = 3030;
const server = http.createServer(requestHandler);
server.listen(port, () => console.log(`Server listening on port ${port}`));

function requestHandler(req, res) {
    console.log('>>>', req.method, req.url);
    const handler = router.match(req.url);
    handler(req, res);
}