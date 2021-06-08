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
        try {
            await req.storage.addItem(item);
            return res.redirect('/');
        } catch (err) {
            if (err.name == 'ValidationError') {
                return res.render('create', { title: 'Add New Cube', error: 'ValidationError' });
            } else {
                return res.redirect('404');
            }
        }
    }
};