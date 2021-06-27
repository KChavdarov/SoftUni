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
router.get('/details/:id', async (req, res) => {
    try {
        const trip = await req.storage.getById(req.params.id);

        trip.isUser = Boolean(req.user);
        if(trip.isUser){
            trip.isCreator = req.user._id == trip.creator._id;
            trip.isJoined = Boolean(trip.buddies.find(b => b._id == req.user._id));
        }   
        trip.isAvailable = trip.seats > 0;
        const buddies = trip.buddies.map(b => b.email);
        trip.buddies = buddies.join(', ');

        res.render('details', { title: 'Shared Trips - Trip Details', trip });
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/404');
    }
});

/*  ***  EDIT ACTIONS  ***  */
router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const trip = await req.storage.getById(req.params.id);
        if (req.user._id == trip.creator._id) {
            res.render('edit', { title: 'Shared Trips - Edit Trip', trip });
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/trips/details/' + req.params.id);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const tripData = {
        _id: req.params.id,

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
        const trip = await req.storage.getById(req.params.id);
        if (req.user._id == trip.creator._id) {
            await req.storage.edit(req.params.id, tripData);
            res.redirect('/trips/details/' + req.params.id);
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        const errors = parseErrorMessage(error);
        const context = {
            title: 'Shared Trips - Edit Trip',
            errors,
            trip: tripData,
        };
        console.log(errors);
        res.render('edit', context);
    }
});

/*  ***  DELETE ACTIONS  ***  */
router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const trip = await req.storage.getById(req.params.id);
        if (req.user._id == trip.creator._id) {
            await req.storage.deleteById(req.params.id);
            res.redirect('/catalog');
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/trips/details/' + req.params.id);
    }
});


router.get('/join/:id', isUser(), async (req, res) => {
    try {
        const trip = await req.storage.getById(req.params.id);

        if (req.user._id == trip.creator) {
            throw new Error('Cannot join a trip you have created');

        } else if (trip.buddies.find(b => b._id == req.user._id)) {
            throw new Error('Trip already joined');

        } else if (trip.seats <= trip.buddies.length) {
            throw new Error('There are no seats left for this trip');

        } else {
            await req.storage.joinTrip(req.params.id, req.user._id);
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
    }
    res.redirect('/trips/details/' + req.params.id);
});

module.exports = router;