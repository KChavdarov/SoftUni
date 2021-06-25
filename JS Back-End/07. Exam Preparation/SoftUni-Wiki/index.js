const express = require('express');
const { PORT } = require('./config/index.js');
const databaseConfig = require('./config/database.js');
const expressConfig = require('./config/express.js');
const routesConfig = require('./config/router.js');
const middlewareConfig = require('./config/middleware.js');

start();

async function start() {
    const app = express();
    
    await databaseConfig(app);
    expressConfig(app);
    middlewareConfig(app);

    routesConfig(app);

    app.listen(PORT, () => {
        console.log('Application started at http://localhost:' + PORT);
    });
}