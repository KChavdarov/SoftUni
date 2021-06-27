const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home', { title: 'Shared Trip - Welcome' });
});

router.get('/catalog', async (req, res) => {
    try {
        const trips = await req.storage.getAll();
        res.render('catalog', { title: 'Shared Trip - Catalog', trips });
    } catch (error) {
        res.render('catalog', { title: 'Shared Trip - Catalog' });
    }
});

module.exports = router;