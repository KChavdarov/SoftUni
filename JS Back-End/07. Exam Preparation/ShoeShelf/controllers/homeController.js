
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const shoes = await req.storage.getAllShoes();
        res.render('home/home', { title: 'Shoe Shelf', shoes });
    } catch (error) {
        res.render('home/home', { title: 'Shoe Shelf' });

    }
});

module.exports = router;