const { isUser } = require('../middleware/guards.js');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const hotels = await req.storage.getAllHotels();
    const context = {
        title: 'Hotel Catalog',
        hotels
    };

    res.render('home/home', context);
});

router.get('/user/profile/', isUser(), async (req, res) => {
    const user = await req.data.getUserById(req.user._id);
    user.bookedHotels = user.bookedHotels.map(b => b.name + ',');
    res.render('user/profile', { title: 'My Bookings', user });
});

module.exports = router;