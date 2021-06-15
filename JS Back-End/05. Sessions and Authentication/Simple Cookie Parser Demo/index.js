const express = require('express');
const bodyParser = require('express').urlencoded;
const expressSession = require('express-session');
const routes = require('./controllers.js');
const auth = require('./auth.js');


const app = express();
app.use(bodyParser({ extended: false }));
app.use(expressSession({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use((req, res, next) => {
    console.log('>>> ', req.method, req.url, req.body);
    console.log('Session Data: ', req.session);
    next();
});
app.use(auth);
routes(app);


app.post('/register', async (req, res) => {
    await req.register(req.body.username, req.body.password);
    res.redirect('/login');
});

app.post('/login', async (req, res) => {
    const match = await req.login(req.body.username, req.body.password);
    if (match) {
        res.redirect('/');
    } else {
        res.send('username and password don\'t match');
    }
});

app.listen(3030);