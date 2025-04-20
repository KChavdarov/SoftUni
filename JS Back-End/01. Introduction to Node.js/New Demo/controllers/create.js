const formidable = require('formidable');
const items = require('../models/items.js');

module.exports = (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        const serial = fields.serial;
        const name = fields.name;
        items.create(serial, name);
        res.writeHead(301, {
            'Location': '/catalog'
        })
        res.end();
    })
}   