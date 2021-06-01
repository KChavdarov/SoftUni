const fs = require('fs/promises');
const formidable = require('formidable');
const defaultHandler = require('./default.js');
const path = require('path');
const { addItem } = require('../util/database.js');


function addCat(req, res) {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            return defaultHandler(req, res);
        }
        const cat = fields;
        const image = files['upload'];
        const filename = image.name;
        const currentPath = image.path;
        const newPath = path.normalize(path.join(__dirname, '../content/images/' + filename));
        fs.rename(currentPath, newPath);
        cat.image = filename;
        addItem(cat);
        res.writeHead(303, {
            'Location': '/'
        });
        res.end();
    });
}

module.exports = addCat;