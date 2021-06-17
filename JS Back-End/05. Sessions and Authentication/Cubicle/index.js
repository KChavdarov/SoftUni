// initialize Express and HBS
const express = require('express');
const expressConfig = require('./config/express.js');
const databaseConfig = require('./config/database.js');
const routesConfig = require('./config/routes.js');
const storage = require('./middleware/storage.js');
const auth = require('./services/user.js');
const port = 3030;

start();

async function start() {
    const app = express();

    // setup DB
    await databaseConfig(app);
    // configure express
    expressConfig(app);
    // setup storage middleware
    app.use(await storage());
    // setup routes
    routesConfig(app);
    // start app
    app.listen(port, () => console.log('Server listening on port ' + port));
}