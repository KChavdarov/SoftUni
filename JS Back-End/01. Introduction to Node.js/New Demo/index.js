const http = require('http');
const router = require('./router.js');

const port = 3000;

const server = http.createServer(requestHandler);

router.get('/', require('./controllers/home.js'));
router.get('/catalog', require('./controllers/catalog.js'));
router.get('/about', require('./controllers/about.js'));
router.post('/create', require('./controllers/create.js'));

function requestHandler(req, res) {
    console.log(req.url, req.method);
    const url = req.url;
    const method = req.method;
    const handler = router.match(url, method);
    handler(req, res);
}

server.listen(port, () => { console.log(`Server listening on port ${port}`) });