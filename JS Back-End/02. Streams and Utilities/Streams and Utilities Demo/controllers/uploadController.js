const fs = require('fs/promises');
const formidable = require('formidable');

function uploadHandler(req, res) {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
        const file = files['uploaded-file'];
        const filename = file.name;
        const filePath = file.path;
        const targetPath = './uploads/' + filename;
        await fs.rename(filePath, targetPath);

        res.writeHead(301, {
            'Location': '/catalog'
        });
        res.end();
    });
}

module.exports = uploadHandler;