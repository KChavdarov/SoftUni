const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const articles = await req.storage.getAll();
        // Add correct title
        res.render('home', { title: 'SoftUni Wiki', articles });
    } catch (error) {
        console.log(error.message);
        res.render('home', { title: 'SoftUni Wiki' });
    }
});

router.get('/catalog', async (req, res) => {
    try {
        const articles = await req.storage.getAll();
        // Add correct title
        res.render('catalog', { title: 'SoftUni Wiki - Catalog', articles });
    } catch (error) {
        console.log(error.message);
        res.render('catalog', { title: 'SoftUni Wiki - Catalog' });
    }
});

module.exports = router;