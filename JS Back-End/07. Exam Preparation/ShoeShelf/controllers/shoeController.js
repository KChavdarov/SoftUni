const { isUser } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');

const router = require('express').Router();

router.get('/create', isUser(), async (req, res) => {
    res.render('shoes/create', { title: 'Create Shoe' });
});

router.post('/create', isUser(), async (req, res) => {
    const shoe = {
        name: req.body.name,
        price: Number(req.body.price),
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        brand: req.body.brand,
    };
    try {
        await req.storage.createShoe(shoe);
        res.redirect('/');
    } catch (error) {
        const errors = parseErrorMessage(error);
        console.log(errors);
        const context = {
            title: 'Create Shoe',
            errors,
            shoe,
        };
        res.render('shoes/create', context);
    }
});

module.exports = router;