const bcrypt = require('bcrypt');
const saltRounds = 8;

const password1 = 'pass1';
const password2 = 'pass2';

async function start() {
    const hash1 = bcrypt.hash(password1, saltRounds);
    const hash2 = bcrypt.hash(password2, saltRounds);
}

async function end() {
    const [match1, match2] = await Promise.all([
        bcrypt.compare(password1, '$2b$08$rIsbpgU7hug9ugKwjP6PZuR.zNWUoT4F3J9aPRPNAEKmq1bQ6zrrS'),
        bcrypt.compare(password2, '$2b$08$rIsbpgU7hug9ugKwjP6PZuR.zNWUoT4F3J9aPRPNAEKmq1bQ6zrrS')
    ]);

    console.log('Match1: ', match1);
    console.log('Match2: ', match2);
}

start();
end();