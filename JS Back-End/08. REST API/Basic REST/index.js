const dataController = require('./dataController.js');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express.json());
app.use('/api', dataController);

app.get('/', (req, res) => {
    res.send('Please send requests to /api');
});

app.listen(5000, () => console.log('App accessible at http://localhost:5000'));