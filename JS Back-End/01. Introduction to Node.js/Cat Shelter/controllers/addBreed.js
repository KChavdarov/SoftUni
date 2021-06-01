const qs = require('querystring');
const defaultHandler = require('./default.js');
const { addBreed } = require('../util/breedsDatabase.js');


function createBreed(req, res) {
    let formData = '';
    req.on('data', data => formData += data);
    req.on('end', async () => {
        const body = qs.parse(formData);
        const newBreed = body['breed'];
        addBreed(newBreed);
        res.writeHead(303, {
            'Location': '/'
        });
        res.end();
    });
    req.on('error', () => defaultHandler(req, res));
}

module.exports = createBreed;