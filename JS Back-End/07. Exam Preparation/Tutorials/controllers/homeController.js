const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const products = await req.storage.getAll();
        // Add correct title
        res.render('home/home', { title: 'Home Page', products });
    } catch (error) {
        res.render('home/home', { title: 'Home Page' });
    }
});

module.exports = router;