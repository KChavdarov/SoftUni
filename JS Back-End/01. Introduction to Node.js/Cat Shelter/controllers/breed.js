const {render} = require('../util/template.js');
const defaultHandler = require('./default.js');

async function breedController(req, res) {
    try {
        const template = await render('addBreed');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(template);
        res.end();
    } catch {
        return defaultHandler(req, res);
    }

    // const filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));
    // fs.readFile(filePath, (err, data) => {
    //     if (err) {
    //         return defaultHandler(req, res);
    //     }
    //     res.writeHead(200, {
    //         'Content-Type': 'text/html'
    //     });
    //     res.write(data);
    //     res.end();
    // });

    // const template = fs.createReadStream(filePath);
    // template.once('data', data => {
    //     res.writeHead(200, {
    //         'Content-Type': 'text/html'
    //     });
    //     res.write(data);
    //     res.on('data', data => res.write(data));
    // });
    // template.on('end', () => res.end());
    // template.on('error', () => defaultHandler(req, res));
}

module.exports = breedController;