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
    try {
        const play = await req.storage.getPlayById(req.params.id);
        if (req.user) {
            play.isOwner = play.author == req.user._id;
            play.isLiked = play.usersLiked.find(u => u == req.user._id);
        }
        res.render('play/details', { title: play.title, play });
    } catch {
        res.redirect('/');
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);
        if (play.author == req.user._id) {
            res.render('play/delete', { title: 'Delete Play', play });
        } else {
            throw new Error('Only the author can edit or delete a play');
        }
    } catch (error) {
        console.log(error);
        res.redirect('/plays/details/' + req.params.id);
    }
});

router.post('/delete/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);
        if (play.author == req.user._id) {
            await req.storage.deletePlay(req.params.id);
            res.redirect('/');
        } else {
            throw new Error('Only the author can edit or delete a play');
        }
    } catch (error) {
        console.log(error);
        res.redirect('/plays/details/' + req.params.id);
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);
        if (play.author == req.user._id) {
            res.render('play/edit', { title: 'Edit Play', play });
        } else {
            throw new Error('Only the author can edit or delete a play');
        }
    } catch (error) {
        console.log(error);
        res.redirect('/plays/details/' + req.params.id);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const playData = {
        _id: req.params.id, // Don't forget to add _id manually, to render the form correctly in case of error!
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        isPublic: Boolean(req.body.isPublic),
    };

    try {
        const play = await req.storage.getPlayById(req.params.id);
        if (play.author == req.user._id) {
            await req.storage.editPlay(req.params.id, playData);
            res.redirect('/plays/details/' + play._id);
        } else {
            throw new Error('Only the author can edit or delete a play');
        }
    } catch (error) {
        const errors = parseErrorMessage(error);
        res.render('play/edit', { title: 'Edit Play', play: playData, errors });
    }
});

router.get('/like/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);
        if (play.author == req.user._id) {
            throw new Error('Author not allowed to like own play');
        } else {
            await req.storage.likePlay(req.params.id, req.user._id);
            res.redirect('/plays/details/' + play._id);
        }
    } catch (error) {
        console.log(error);
        res.redirect('/plays/details/' + req.params.id);
    }
});

module.exports = router;