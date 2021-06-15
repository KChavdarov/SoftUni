const express = require('express');

const app = express();

const sessions = {};

app.get('/', (req, res) => {
    let session = {};
    if (req.headers.cookie) {
        const id = req.headers.cookie.split('=')[1];
        session = sessions[id];
        console.log('Existing user session. ID: ' + id);
    } else {
        const id = ('0000000' + (Math.random() * 99999999 | 0).toString(16)).slice(-8);
        sessions[id] = session;
        session.visited = 0;
        res.setHeader('Set-Cookie', 'sessionId=' + id);
        console.log('New user session generated. ID: ' + id);
    }
    session.visited++;
    res.send('<h1>Hello!</h1><p>You have visited this web page ' + session.visited + ' number of times</p>');
});

app.listen(3030);