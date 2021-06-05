const router = require('express').Router();

router.get('/', (req, res) => {
    const books = Object.values(req.database.getAllItems());
    res.render('catalog', { books });
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const books = Object.values(req.database.createItem(req.body));
    res.render('catalog', { books });
});

module.exports = router;