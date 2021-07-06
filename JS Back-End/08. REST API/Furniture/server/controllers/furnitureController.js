const router = require('express').Router();
const { parseErrorMessage } = require('../util/parser.js');

router.get('/', async (req, res) => {
    const data = await req.storage.getAll();
    res.json(data);
});

router.get('/:id', async (req, res) => {
    try {
        const item = await req.storage.getById(req.params.id);
        res.json(item);
    } catch (error) {
        res.status(406).json({
            message: parseErrorMessage(error).join('\n'),
        });
    }
});

router.post('/', async (req, res) => {
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
        const furniture = await req.storage.create(data);
        res.status(201).json(furniture);
    } catch (error) {
        res.status(406).json({
            message: parseErrorMessage(error).join('\n'),
        });
    }
});

// TODO: EDIT, DELETE, and fix Error Handling

module.exports = router;