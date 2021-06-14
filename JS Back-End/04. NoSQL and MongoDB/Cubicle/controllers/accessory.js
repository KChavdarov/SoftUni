module.exports = {
    async createAccessory(req, res) {
        res.render('createAccessory', { title: 'Create New Accessory' });
    },
    async accessoryPost(req, res) {
        const data = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
        };

        await req.storage.createAccessory(data);
        res.redirect('/');
    },
};