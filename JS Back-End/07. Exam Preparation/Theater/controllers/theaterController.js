const router = require('mongoose').Router();

router.get('/create', (req, res) => {
    res.render('play/create', { title: 'Create a play' });
});