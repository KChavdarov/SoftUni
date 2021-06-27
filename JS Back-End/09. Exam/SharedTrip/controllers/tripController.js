const { isUser } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');

const router = require('express').Router();

//CHANGE REDIRECT PATHS TO CORRECT ROUTES
//CHANGE ALL TEMPLATE PATHS IN RENDER CALLS

/*  ***  CREATE ACTIONS  ***  */
router.get('/create', isUser(), async (req, res) => {
    res.render('create', { title: 'Shared Trips - Create Trip' });
});

router.post('/create', isUser(), async (req, res) => {
    const trip = {
        start: req.body.start.trim(),
        end: req.body.end.trim(),
        date: req.body.date.trim(),
        time: req.body.time.trim(),
        imageUrl: req.body.imageUrl.trim(),
        car: req.body.car.trim(),
        seats: Number(req.body.seats),
        price: Number(req.body.price),
        description: req.body.description.trim(),

        creator: req.user._id,
    };
    try {
        await req.storage.create(trip);
        res.redirect('/catalog');
    } catch (error) {
        const errors = parseErrorMessage(error);
        console.log(errors);
        const context = {
            title: 'Shared Trips - Create Trip',
            errors,
            trip,
        };
        res.render('create', context);
    }
});

/*  ***  DETAILS  ***  */
router.get('/details/:id', isUser(), async (req, res) => {
    try {
        const PRODUCT = await req.storage.getById(req.params.id);

        //CHANGE DATA LOAD BASED ON PROJECT REQUIREMENTS
        PRODUCT.isOwner = req.user._id == PRODUCT.creator;
        PRODUCT.isBought = Boolean(PRODUCT.buyers.find(b => b == req.user._id));
        PRODUCT.purchases = PRODUCT.buyers.length;
        PRODUCT.price = PRODUCT.price.toFixed(2);

        res.render('PRODUCT/details', { title: 'Details Page', PRODUCT });
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/');
    }
});

/*  ***  EDIT ACTIONS  ***  */
router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const PRODUCT = await req.storage.getById(req.params.id);
        if (req.user._id == PRODUCT.creator) {
            res.render('PRODUCT/edit', { title: 'Edit Page', PRODUCT });
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/PRODUCT/details/' + req.params.id);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const PRODUCT_DATA = {
        _id: req.params.id,

        //CHANGE BASED ON PROJECT REQUIREMENTS
        name: req.body.name.trim(),
        description: req.body.description.trim(),
        imageUrl: req.body.imageUrl.trim(),
        price: Number(req.body.price),
        brand: req.body.brand.trim(),

        creator: req.user._id,
    };

    try {
        const PRODUCT = await req.storage.getById(req.params.id);
        if (req.user._id == PRODUCT.creator) {
            await req.storage.edit(req.params.id, PRODUCT_DATA);
            res.redirect('/PRODUCT/details/' + req.params.id);
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        const errors = parseErrorMessage(error);
        const context = {
            title: 'Edit Page',
            errors,
            PRODUCT: PRODUCT_DATA,
        };
        console.log(errors);
        res.render('PRODUCT/edit', context);
    }
});

/*  ***  DELETE ACTIONS  ***  */
router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const PRODUCT = await req.storage.getById(req.params.id);
        if (req.user._id == PRODUCT.creator) {
            res.render('PRODUCT/delete', { title: 'Delete Page', PRODUCT });
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/PRODUCT/details/' + req.params.id);
    }

});

router.post('/delete/:id', isUser(), async (req, res) => {
    try {
        const PRODUCT = await req.storage.getById(req.params.id);
        if (req.user._id == PRODUCT.creator) {
            await req.storage.deleteById(req.params.id);
            res.redirect('/');
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/PRODUCT/details/' + req.params.id);
    }
});


/*  ***  BUY / LIKE / COMMENT / ETC. ACTIONS ***  */
router.get('/ACTION/:id', isUser(), async (req, res) => {
    try {
        const PRODUCT = await req.storage.getById(req.params.id);
        if (req.user._id == PRODUCT.creator) {
            throw new Error('Cannot ACTION PRODUCT you have created');
        } else {
            await Promise.all([
                req.auth.PRODUCT_ACTION(req.params.id, req.user._id),
                req.storage.USER_ACTION(req.params.id, req.user._id)
            ]);
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
    }
    res.redirect('/PRODUCT/details/' + req.params.id);
});

module.exports = router;