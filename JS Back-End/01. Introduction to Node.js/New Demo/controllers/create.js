const formidable = require('formidable');
const formParser = require('../util/formParser.js');
const items = require('../models/items.js');

module.exports = (req, res) => {

    formParser(req).then(data => {
        const serial = data.serial;
        const name = data.name;
        items.create(serial, name);
        res.writeHead(301, {
            'Location': '/catalog'
        })
        res.end();
    });
    
    // const form = new formidable.IncomingForm();

    // form.parse(req, (err, fields, files) => {
    //     const serial = fields.serial;
    //     const name = fields.name;
    //     items.create(serial, name);
    //     res.writeHead(301, {
    //         'Location': '/catalog'
    //     })
    //     res.end();
    // })
}   