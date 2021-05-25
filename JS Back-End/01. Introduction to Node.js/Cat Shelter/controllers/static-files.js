const fs = require('fs');
const path = require('path');

function staticController(req, res) {
    const filePath = path.normalize(path.join(__dirname, `..${req.url}`));
    fs.readFile(filePath, (err, data) => {
        if (err) {
            //TODO: return Default Handler
        }

        res.writeHead(200, {
            'Content-Type': getContentType(req.url)
        });
        res.write(data);
        res.end();
    });
}

function getContentType(url) {
    const contentTypes = {
        css: 'text/css',
        jpeg: 'image/jpeg',
        jpg: 'image/jpeg',
        png: 'image/png',
        ico: 'image/x-icon',
    };
    const extension = url.match(/\/.+\.(.+)$/)[1];
    console.log(extension);
    return contentTypes[extension] || 'text';
}

module.exports = staticController;