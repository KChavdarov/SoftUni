const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        let plays = await req.storage.getAllPlays();
        plays.forEach(p => p.likes = p.usersLiked.length);
        console.log(plays[0]);
        res.render('home', { title: 'Theater', plays });
    } catch {
        res.render('home', { title: 'Theater' });
    }
});

module.exports = router;