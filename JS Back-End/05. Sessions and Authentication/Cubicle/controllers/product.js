const { Router } = require('express');
const { isAuth, isOwner } = require('../middleware/guards.js');
const { preloadCube } = require('../services/preload.js');

const router = Router();

router.get('/', async (req, res) => {
    const query = req.query;
    const cubicles = await req.storage.getAllItems(query);

    const context = {
        title: 'Cubicle',
        cubicles,
        search: query.search || '',
        from: query.from || '',
        to: query.to || ''
    };
    res.render('index', context);
});

router.get('/create', isAuth, (req, res) => {
    res.render('create', { title: 'Add New Cube' });
});

router.post('/create', isAuth, async (req, res) => {
    const item = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficulty: Number(req.body.difficulty),
        author: req.user._id,
    };
    try {
        await req.storage.addItem(item);
        return res.redirect('/');
    } catch (err) {
        if (err.name == 'ValidationError') {
            return res.render('create', { title: 'Add New Cube', error: 'ValidationError' });
        } else {
            return res.redirect('/404');
        }
    }
});

router.get('/details/:id', preloadCube, async (req, res) => {
    const cubicle = await req.data.cubicle;
    if (cubicle === undefined) {
        return res.redirect('/404');
    } else {
        cubicle.isAuth = req.user;
        cubicle.isOwner = req.user && (req.data.cubicle.author._id == req.user._id);
        res.render('details', { title: 'Cubicle', cubicle });
    }
});

router.get('/edit/:id', preloadCube, isOwner, async (req, res) => {
    const cubicle = await req.data.cubicle;
    if (cubicle) {
        cubicle[`dif${cubicle.difficulty}`] = true;
        res.render('edit', { title: 'Edit Cubicle', cubicle });
    } else {
        res.redirect('/404');
    }
});

router.post('/edit/:id', preloadCube, isOwner, async (req, res) => {
    const id = req.params.id;
    const item = {};

    item.name = req.body.name;
    item.description = req.body.description;
    item.imageUrl = req.body.imageUrl;
    item.difficulty = Number(req.body.difficulty);
    try {
        await req.storage.updateItem(id, item);
        res.redirect('/products/details/' + id);
    } catch {
        res.redirect('/404');
    }
});

router.get('/delete/:id', preloadCube, isOwner, async (req, res) => {
    const cubicle = await req.data.cubicle;
    if (cubicle) {
        cubicle[`dif${cubicle.difficulty}`] = true;
        res.render('delete', { title: 'Delete Cube', cubicle });
    } else {
        res.redirect('/404');
    }
});

router.post('/delete/:id', preloadCube, isOwner, async (req, res) => {
    try {
        await req.storage.deleteItem(req.params.id);
        res.redirect('/products');
    } catch {
        res.redirect('/404');
    }
});

router.get('/attach/:cubeId', async (req, res) => {
    const id = req.params.cubeId;
    const cubicle = await req.storage.getItemById(id);
    const accessories = await req.storage.getAccessories(cubicle.accessories.map(a => a._id));

    res.render('attach', { title: 'Attach Accessories', cubicle, accessories });
});

router.post('/attach/:cubeId', async (req, res) => {
    await req.storage.attachAccessory(req.params.cubeId, req.body.accessory);
    res.redirect(`/products/details/${req.params.cubeId}`);
});

module.exports = router;