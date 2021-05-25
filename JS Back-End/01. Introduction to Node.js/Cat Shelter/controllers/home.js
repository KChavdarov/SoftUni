const fs = require('fs');
const path = require('path');

function homeController(req, res) {
    const filePath = path.normalize(path.join(__dirname, '../views/home/index.html'));
    fs.readFile(filePath, (err, data) => {
        if (err){
            //TODO: return Default Handler
        }

        res.writeHead(200,{
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
}

module.exports = homeController;