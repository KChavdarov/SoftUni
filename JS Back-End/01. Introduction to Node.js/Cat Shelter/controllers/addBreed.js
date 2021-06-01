const fs = require('fs/promises');
const qs = require('querystring');
const path = require('path');
const formidable = require('formidable');
const defaultHandler = require('./default.js');


function createBreed(req, res) {
    const filePath = path.normalize(path.join(__dirname, '../data/breeds.json'));
    let formData = '';
    req.on('data', data => formData += data);
    req.on('end', async () => {
        const body = qs.parse(formData);
        let breedsDb = await fs.readFile(filePath);
        breedsDb = JSON.parse(breedsDb.toString());
        const newBreed = body['breed'];
        if (!breedsDb.includes(newBreed)) {
            breedsDb.push(newBreed);
            fs.writeFile(filePath, JSON.stringify(breedsDb));
        }
        res.writeHead(303, {
            'Location': '/'
        });
        res.end();
    });
    req.on('error', () => defaultHandler(req, res));

    // const form = new formidable.IncomingForm();
    // form.parse(req, async (err, fields, files) => {
    //     if (err) {
    //         return defaultHandler(req, res);
    //     }
    //     const newBreed = fields['breed'];

    //     if (!breedsDb.includes(newBreed)) {
    //         breedsDb.push(newBreed);
    //         await fs.writeFile(filePath, JSON.stringify(breedsDb));
    //     }
    // });
    // res.writeHead(303, {
    //     'Location': '/'
    // });
    // res.end();
}

module.exports = createBreed;