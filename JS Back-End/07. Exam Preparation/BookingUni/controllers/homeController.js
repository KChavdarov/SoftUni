const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home/home', { title: 'Hotel Catalog' /* add user data */ });
});

module.exports = router;