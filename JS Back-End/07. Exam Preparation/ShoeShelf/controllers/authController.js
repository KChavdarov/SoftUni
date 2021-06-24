const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest, isUser } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');

router.get('/login', isGuest(), (req, res) => {
    res.render('user/login', { title: 'Login Page' });
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        await req.auth.login(req.body);
        res.redirect('/'); // Redirect according to project requirements
    } catch (errors) {
        const context = {
            title: 'Login Page',
            errors: parseErrorMessage(errors),
            data: { email: req.body.email }
        };
        console.log(errors.message);
        res.render('user/login', context);
    }
});

router.get('/register', isGuest(), (req, res) => {
    res.render('user/register', { title: 'Register Page' });
});

router.post('/register',
    isGuest(),
    body('email', 'Please enter a valid email').trim().isEmail().isLength({ min: 3 }), // Change message and validation according to project requirements
    body('password', 'Invalid password').trim().isAlphanumeric().isLength({ min: 3 }), // Change message and validation according to project requirements
    body('repeatPassword', 'Passwords don\'t match').custom((value, { req }) => value.trim() == req.body.password.trim()),
    async (req, res) => {
        try {
            const errors = Object.values(validationResult(req).mapped());
            if (errors.length > 0) {
                console.log(errors.map(e => e.msg).join('/n'));
                throw new Error(errors.map(e => e.msg).join('/n'));
            } else {
                await req.auth.register(req.body);
                res.redirect('/'); // Redirect according to project requirements
            }
        } catch (errors) {
            const context = {
                title: 'Register Page',
                errors: parseErrorMessage(errors),
                data: { username: req.body.username, email: req.body.email }
            };
            console.log(errors.message);
            res.render('user/register', context);
        }
    });

router.get('/logout', isUser(), (req, res) => {
    req.auth.logout();
    res.redirect('/auth/login');
});

router.get('/profile', isUser(), async (req, res) => {
    try {
        const user = await req.auth.getUserById(req.user._id);
        user.total = user.shoes.reduce((a, c) => {
            a += Number(c.price);
            return a;
        }, 0).toFixed(2);
        console.log(user.total);
        const offers = await req.storage.getUserShoeCount(req.user._id);
        console.log(offers);
        user.offers = offers;
        res.render('user/profile', { title: 'User Profile', user });
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/');
    }
});

module.exports = router;