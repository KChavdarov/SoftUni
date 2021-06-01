const fs = require('fs/promises');
const formidable = require('formidable');
const defaultHandler = require('./default.js');
const path = require('path');
const { updateItem } = require('../util/catsDatabase.js');

function updateCat(req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            return defaultHandler(req, res);
        }
        const cat = fields;
        if (files) {
            const image = files['upload'];
            const filename = image.name;
            const currentPath = image.path;
            const newPath = path.normalize(path.join(__dirname, '../content/images/' + filename));
            fs.rename(currentPath, newPath);
            cat.image = filename;
        }
        cat.id = req.itemId;
        updateItem(req.itemId, cat);
        res.writeHead(303, {
            'Location': '/'
        });
        res.end();
    });
}

module.exports = updateCat;