module.exports = {
    async postComment(req, res) {
        const comment = {
            author: req.body.author,
            content: req.body.content,
            cubeId: req.params.cubeId,
        };

        await req.storage.createComment(comment);
        return res.redirect('/details/' + req.params.cubeId);
    }
};