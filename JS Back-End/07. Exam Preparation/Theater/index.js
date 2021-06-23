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

    routesConfig(app);   //always config routes after middleware

    app.listen(PORT, () => {
        console.log('Application started at http://localhost:' + PORT);
        // testUser();
        // testAuth();
    });
}


/*  *  AUTH TESTS *  */
// async function testAuth() {
//     let mockReq = {};
//     let mockRes = {
//         cookie() {
//             console.log(arguments);
//         }
//     };
//     let mockNext = () => {};

//     const auth = require('./middleware/auth.js')();

//     auth(mockReq, mockRes, mockNext);

//     try {
//         // await mockReq.auth.register({username:'kiro', password: '123'});
//         // await mockReq.auth.login({username:'kiro', password: '123'});
//     } catch (err) {
//         console.log(err.message);
//     }
// }

// async function testUser() {
// const { createUser, getUserByUsername } = require('./services/user.js');

//     try {
//         // const result = await createUser('kiro', 123);
//         // console.log(result);

//         // const user = await getUserByUsername('KIRO');
//         // console.log(user);
//     } catch (err) {
//         console.log(err);
//     }
// }