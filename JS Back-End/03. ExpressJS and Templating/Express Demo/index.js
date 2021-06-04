const express = require('express');
const catalogRouter = require('./catalog.js');
const guard = require('./guard.js');
const logger = require('./logger.js');
const fallback = require('./fallback.js');
const app = express();
const port = 3030;

app.use(logger);
app.use('/catalog', catalogRouter);

// app.use('/static', express.static('static'));
app.use('/public', express.static('static'));

app.get('/', (req, res) => {
    // res.status(200).send('Welcome to Express-JS');
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/data', (req, res) => {
    let person = { name: 'Peter', age: 29 };
    res.json(person);
});

app.get('/legal', (req, res) => {
    res.sendFile(__dirname + '/demo.pdf');
});

app.get('/about', (req, res) => {
    res.status(200).send('About us');
});

app.get('/contacts', (req, res) => {
    res.redirect('/about');
});

app.get('/admin', guard, (req, res) => res.send('admin page'));

app.all('*', (req, res) => {
    res.status('404').send('Cannot ' + req.method + ' ' + req.path);
});

app.use(fallback);

app.listen(port, () => console.log('Server listening on port ' + port));