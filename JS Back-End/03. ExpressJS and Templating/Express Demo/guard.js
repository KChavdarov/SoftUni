const e = require('express');

function guard(req, res, next) {
    // console.log(req.headers);
    if (res.headers.hasOwnProperty('x-admin')) {
        req.send('admin page');
        next();
    } else {
        req.status(401).send('Admins only');
    }
}

module.exports = guard;