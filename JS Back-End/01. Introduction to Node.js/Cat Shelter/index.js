const http = require('http');
const port = 3030;

const router = require('./router.js');
const homeController = require('./controllers/home.js');
const staticController = require('./controllers/static-files.js');

router.get('/', homeController);
router.get('/content', staticController);


const server = http.createServer(requestHandler);
server.listen(port, () => console.log(`server listening on port ${port}`));

function requestHandler(req, res) {
    const url = new URL(req.url, `http://localhost:${port}`);
    console.log('>>>', req.method, url.pathname);
    let handler;
    let handlerPath = url.pathname;
    if (url.pathname.startsWith('/content')) {
        handlerPath = '/content';
    }
    handler = router.match(req.method, handlerPath);
    handler(req, res);
}