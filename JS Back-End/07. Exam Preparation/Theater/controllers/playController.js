const { isUser } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
    res.render('play/create', { title: 'Create a play' });
});

router.post('/create', isUser(), async (req, res) => {
    const playData = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        isPublic: Boolean(req.body.isPublic),
        author: req.user._id
    };

    try {
        const play = await req.storage.createPlay(playData);
        res.redirect('/plays/details/' + play._id);
    } catch (error) {
        const errors = parseErrorMessage(error);
        res.render('play/create', { title: 'Create a play', playData, errors });
    }
});

router.get('/details/:id', async (req, res) => {
    const play = await req.storage.getPlayById(req.params.id);
    play.isOwner = play.author == req.user._id;
    play.isLiked = play.usersLiked.find(u => u == req.user._id);
    res.render('play/details', { title: play.title, play });
});

module.exports = router;