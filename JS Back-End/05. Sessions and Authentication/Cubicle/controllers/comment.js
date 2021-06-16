const router = require('express').Router();

router.post('/:cubeId', async (req, res) => {
    const comment = {
        author: req.body.author,
        content: req.body.content,
        cubeId: req.params.cubeId,
    };
    await req.storage.createComment(comment);
    return res.redirect('/products/details/' + req.params.cubeId);
});

module.exports = router;