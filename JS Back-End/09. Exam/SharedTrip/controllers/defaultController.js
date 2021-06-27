const router = require('express').Router();

router.all('*', (req, res) => {
    res.render('404', { title: 'Shared Trip - Not Found' });
});

module.exports = router;