const { isUser } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');

const router = require('express').Router();


/* *** CREATE *** */
router.get('/create', isUser(), async (req, res) => {
    res.render('hotel/create', { title: 'Create hotel' });
});

router.post('/create', isUser(), async (req, res) => {
    const hotelData = {
        name: req.body.name,
        city: req.body.city,
        rooms: Number(req.body.rooms),
        imageUrl: req.body.imageUrl,
        owner: req.user._id,
    };
    try {
        const hotel = await req.storage.createHotel(hotelData);
        res.redirect('/hotels/details/' + hotel._id);

    } catch (error) {
        const errors = parseErrorMessage(error);
        console.log(errors);
        res.render('hotel/create', { title: 'Create hotel', hotel: { ...hotelData }, errors });
    }
});

/* *** DETAILS *** */

router.get('/details/:id', isUser(), async (req, res) => {
    try {
        const hotel = await req.storage.getHotelById(req.params.id);
        if (hotel) {
            hotel.isBooked = hotel.reservations.find(r => r == req.user._id); // _id property is an ObjectId, not String. When using equality operator, type coercion occurs forcing both operands to String, resulting in True.
            hotel.isOwner = hotel.owner == req.user._id; // isBooked continued: two way reference in DB is needed, because we store the user data in the token and it is not refreshed unless the user re-logs. 
            res.render('hotel/details', { title: hotel.name, hotel, });
        } else {
            throw new Error('Hotel not found');
        }
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

/* *** EDIT *** */

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const hotel = await req.storage.getHotelById(req.params.id);
        if (hotel) {
            if (hotel.owner != req.user._id) {
                throw new Error('Only the owner may edit hotel data');
            }
            res.render('hotel/edit', { title: 'Edit ' + hotel.name, hotel });
        } else {
            throw new Error('Hotel not found');
        }
    } catch (error) {
        res.redirect('/hotels/details/' + req.params.id);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const hotelId = req.params.id;
    const hotelData = {
        _id: req.params.id, // Add ID, otherwise the template will be loaded without it in case of error
        name: req.body.name,
        city: req.body.city,
        rooms: Number(req.body.rooms),
        imageUrl: req.body.imageUrl,
    };
    try {
        const hotel = await req.storage.getHotelById(req.params.id);
        if (hotel.owner == req.user._id) {
            await req.storage.updateHotel(hotelId, hotelData);
        }
        res.redirect('/hotels/details/' + hotelId);
    } catch (error) {
        const errors = parseErrorMessage(error);
        res.render('hotel/edit', { title: 'Create hotel', hotel: { ...hotelData }, errors });
    }
});

/* *** DELETE *** */

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const hotel = await req.storage.getHotelById(req.params.id);
        if (hotel) {
            if (hotel.owner != req.user._id) {
                throw new Error('Only the owner may edit hotel data');
            } else {
                res.render('hotel/delete', { title: 'Delete ' + hotel.name, hotel });
            }
        } else {
            throw new Error('Hotel not found');
        }
    } catch (error) {
        res.redirect('/hotels/details/' + req.params.id);
    }
});

router.post('/delete/:id', isUser(), async (req, res) => {
    try {
        const hotel = await req.storage.getHotelById(req.params.id);
        if (hotel) {
            if (hotel.owner != req.user._id) {
                throw new Error('Only the owner may edit hotel data');
            } else {
                await req.storage.deleteHotelById(req.params.id);
                res.redirect('/');
            }
        } else {
            throw new Error('Hotel not found');
        }
    } catch (error) {
        res.redirect('/hotels/details/' + req.params.id);
    }
});



/* *** BOOKING *** */

router.get('/book/:id', isUser(), async (req, res) => {
    try {
        const hotel = await req.storage.getHotelById(req.params.id);
        if (hotel.owner == req.user._id) {
            throw new Error('You can\'t book your own hotel');
        }
        await Promise.all([
            await req.storage.addReservation(req.params.id, req.user._id),
            await req.auth.bookHotel(req.params.id, req.user._id)
        ]);
    } catch (error) {
        const errors = parseErrorMessage(error);
        console.log(errors);
    }
    res.redirect('/hotels/details/' + req.params.id);
});
module.exports = router;