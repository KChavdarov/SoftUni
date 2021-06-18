const { isAuth } = require('../middleware/guards.js');

const router = require('express').Router();

router.post('/:cubeId', isAuth, async (req, res) => {
    if (req.body.content) {
        const comment = {
            author: req.user._id,
            content: req.body.content,
            cubeId: req.params.cubeId,
        };
        await req.storage.createComment(comment);
    }
    return res.redirect('/products/details/' + req.params.cubeId);
});

module.exports = router;