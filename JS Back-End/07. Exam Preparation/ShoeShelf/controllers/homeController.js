const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home/home', { title: 'Shoe Shelf' });
});

module.exports = router;