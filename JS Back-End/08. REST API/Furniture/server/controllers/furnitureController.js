const router = require('express').Router();
const { isAuth, isOwner } = require('../middleware/guards.js');
const preload = require('../middleware/preload.js');
const { parseErrorMessage } = require('../util/parser.js');

router.get('/', async (req, res) => {
    const data = await req.storage.getAll();
    data.forEach(i => {
        i._ownerId = i.owner;
    });
    res.json(data);
});

router.get('/:id', preload(), async (req, res) => {
    const item = req.data;
    res.json(item);
});

router.post('/', isAuth(), async (req, res) => {
    const data = {
        make: req.body.make,
        model: req.body.model,
        img: req.body.img,
        description: req.body.description,
        material: req.body.material,
        price: Number(req.body.price),
        year: Number(req.body.year),
        owner: req.user._id,
    };

    try {
        const furniture = await req.storage.create(data);
        res.status(201).json(furniture);
    } catch (error) {
        res.status(406).json({
            message: parseErrorMessage(error).join('\n'),
        });
    }
});

router.put('/:id', preload(), isOwner(), async (req, res) => {
    const data = {
        make: req.body.make,
        model: req.body.model,
        img: req.body.img,
        description: req.body.description,
        material: req.body.material,
        price: Number(req.body.price),
        year: Number(req.body.year),
    };

    try {
        const item = await req.storage.updateById(req.params.id, data);
        res.status(202).json(item);
    } catch (error) {
        res.status(406).json({
            message: parseErrorMessage(error).join('\n'),
        });
    }
});

router.delete('/:id', preload(), isOwner(), async (req, res) => {
    try {
        await req.storage.deleteById(req.params.id);
        res.status(200).json({ deletedAt: Date.now });
    } catch (error) {
        res.status(406).json({
            message: parseErrorMessage(error).join('\n'),
        });
    }
});

// TODO: EDIT, DELETE, and fix Error Handling

module.exports = router;