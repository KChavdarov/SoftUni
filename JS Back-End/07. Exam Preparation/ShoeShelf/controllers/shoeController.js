const { isUser } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');

const router = require('express').Router();

router.get('/create', isUser(), async (req, res) => {
    res.render('shoes/create', { title: 'Create Shoe' });
});

router.post('/create', isUser(), async (req, res) => {
    const shoe = {
        name: req.body.name.trim(),
        price: Number(req.body.price),
        imageUrl: req.body.imageUrl.trim(),
        description: req.body.description.trim(),
        brand: req.body.brand.trim(),
        creator: req.user._id,
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


router.get('/details/:id', isUser(), async (req, res) => {
    try {
        const shoe = await req.storage.getShoeById(req.params.id);
        shoe.isOwner = req.user._id == shoe.creator;
        shoe.isBought = Boolean(shoe.buyers.find(b => b == req.user._id));
        shoe.purchases = shoe.buyers.length;
        shoe.price = shoe.price.toFixed(2);
        res.render('shoes/details', { title: `${shoe.brand} ${shoe.name}`, shoe });
    } catch (error) {
        res.redirect('/');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const shoe = await req.storage.getShoeById(req.params.id);
        if (req.user._id == shoe.creator) {
            res.render('shoes/edit', { title: 'Edit Shoe', shoe });
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/shoes/details/' + req.params.id);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const shoeData = {
        _id: req.params.id,
        name: req.body.name.trim(),
        price: Number(req.body.price),
        imageUrl: req.body.imageUrl.trim(),
        description: req.body.description.trim(),
        brand: req.body.brand.trim(),
        creator: req.user._id,
    };

    try {
        const shoe = await req.storage.getShoeById(req.params.id);
        if (req.user._id == shoe.creator) {
            await req.storage.editShoe(req.params.id, shoeData);
            res.redirect('/shoes/details/' + req.params.id);
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        const errors = parseErrorMessage(error);
        const context = {
            title: 'Edit Shoe',
            errors,
            shoe: shoeData,
        };
        console.log(errors);
        res.render('shoes/edit', context);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const shoe = await req.storage.getShoeById(req.params.id);
        if (req.user._id == shoe.creator) {
            res.render('shoes/delete', { title: 'Delete Shoe', shoe });
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/shoes/details/' + req.params.id);
    }

});

router.post('/delete/:id', isUser(), async (req, res) => {
    try {
        const shoe = await req.storage.getShoeById(req.params.id);
        if (req.user._id == shoe.creator) {
            await req.storage.deleteShoe(req.params.id);
            res.redirect('/');

        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/shoes/details/' + req.params.id);
    }
});

router.get('/buy/:id', isUser(), async (req, res) => {
    try {
        const shoe = await req.storage.getShoeById(req.params.id);
        if (req.user._id == shoe.creator) {
            throw new Error('Cannot buy shoes you have created');
        } else {
            await Promise.all([
                req.auth.buyShoe(req.params.id, req.user._id),
                req.storage.sellShoe(req.params.id, req.user._id)
            ]);
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
    }
    res.redirect('/shoes/details/' + req.params.id);
});

module.exports = router;