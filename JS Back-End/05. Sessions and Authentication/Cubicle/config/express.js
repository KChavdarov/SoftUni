const express = require('express');
const hbs = require('express-handlebars');
const auth = require('../middleware/auth.js');
const cookieParser = require('cookie-parser');


module.exports = (app) => {
    app.engine('.hbs', hbs({
        extname: '.hbs'
    }));

    app.set('view engine', '.hbs');
    // setup Static Files
    app.use('/static', express.static('static'));
    // setup form-parser
    app.use(express.urlencoded({ extended: true }));
    // setup cookie-parser
    app.use(cookieParser());
    // setup auth middleware;
    app.use(auth());
};