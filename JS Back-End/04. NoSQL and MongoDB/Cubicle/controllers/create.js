module.exports = {
    create: (req, res) => {
        res.render('create', { title: 'Add New Cube' });
    },
    post: async (req, res) => {
        const item = {};

        item.name = req.body.name;
        item.description = req.body.description;
        item.imageUrl = req.body.imageUrl;
        item.difficulty = Number(req.body.difficulty);

        await req.storage.addItem(item);
        res.redirect('/');
    }
};