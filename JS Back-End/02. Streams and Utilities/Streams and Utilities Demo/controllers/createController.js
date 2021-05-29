const formidable = require('formidable');
const database = require('../util/database.js');

module.exports = (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
        console.log('created item');
        console.log(fields);
        database.addItem(fields);
        res.writeHead(301, {
            'Location': '/catalog'
        });
        res.end();
    });
};