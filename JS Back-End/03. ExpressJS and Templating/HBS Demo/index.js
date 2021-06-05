const express = require('express');
const hbs = require('express-handlebars');
const logger = require('./logger.js');
const app = express();
const port = 3030;

app.engine('.hbs', hbs({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use(logger);
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    const data = {
        'title': 'My Homepage',
        'user': {
            'username': 'Peter',
            'email': 'peter@abv.bg'
        },
        'kitty': '/static/cat.jpg',
        'name': 'Peter',
        'age': 22,
        // 'items': ['coins', 'chewing gum', 'keys', 'phone', 'wallet', 'lint']
        'items': [{
                'name': 'coins',
                'qty': 55
            }, {
                'name': 'chewing gum',
                'qty': 4
            },
            {
                'name': 'keys',
                'qty': 1
            },
            {
                'name': 'phone',
                'qty': 1
            },
            {
                'name': 'wallet',
                'qty': 1
            },
            {
                'name': 'lint',
                'qty': 1
            }
        ],
        'message': '<p>Message</p>'
    };
    res.render('home', data);
});

app.listen(port, () => console.log('Server listening on port ' + port));