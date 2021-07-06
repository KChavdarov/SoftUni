const express = require('express');
const { PORT } = require('./config/index.js');
const databaseConfig = require('./config/database.js');
const expressConfig = require('./config/express.js');
const middlewareConfig = require('./config/middleware.js');
const routerConfig = require('./config/router.js');


async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    middlewareConfig(app);

    routerConfig(app);

    app.listen(PORT, () => { console.log('Server started on port ' + PORT); });
}

start();