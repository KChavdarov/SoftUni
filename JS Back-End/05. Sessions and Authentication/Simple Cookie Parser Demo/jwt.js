const jwt = require('jsonwebtoken');

const payload = { message: 'Hi!' };
const secret = 'my-secret-key';

const token = jwt.sign(payload, secret, { expiresIn: '2d' });

const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiSGkhIiwiaWF0IjoxNjIzNzk1MTYxLCJleHAiOjE2MjM5Njc5NjF9.g1LPOD6lJ_kfur_yHSMzPEefbNvcojWqFParE9aNroU';

console.log(jwt.decode(myToken));
console.log(jwt.decode(myToken, secret)); // throws error if token is invalid