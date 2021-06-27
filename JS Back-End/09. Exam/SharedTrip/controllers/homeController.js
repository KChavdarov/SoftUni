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

router.get('/profile', async (req, res) => {
    try {
        const user = await req.storage.getUserTrips(req.user._id);
        user.tripCount = user.trips.length;
        console.log(user);
        res.render('profile', { title: 'Shared Trip - My Profile', user });
    } catch (error) {
        res.render('catalog', { title: 'Shared Trip - Catalog' });
    }
});

module.exports = router;