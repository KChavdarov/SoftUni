module.exports = {
    create: (req, res) => {
        res.render('create', { title: 'Add New Cube' });
    },
    post: (req, res) => {
        req.storage.addItem(req.body);
        res.redirect('/');
    }
};