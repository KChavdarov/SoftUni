const router = require('express').Router();

router.get('/create', async (req, res) => {
    res.render('createAccessory', { title: 'Create New Accessory' });
});

router.post('/create', async (req, res) => {
    const data = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
    };

    await req.storage.createAccessory(data);
    res.redirect('/products');
});

module.exports = router;