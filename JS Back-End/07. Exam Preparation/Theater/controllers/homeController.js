const router = require('express').Router();

router.get('/', async (req, res) => {
    const sort = req.query.sort;
    try {
        let plays = await req.storage.getAllPlays(sort);
        plays.forEach(p => p.likes = p.usersLiked.length);
        res.render('home', { title: 'Theater', plays });
    } catch {
        res.render('home', { title: 'Theater' });
    }
});

module.exports = router;