const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest, isUser } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');

router.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        await req.auth.login(req.body);
        res.redirect('/'); // Redirect according to project requirements
    } catch (errors) {
        const context = {
            title: 'Login',
            errors: errors.message.split('/n'),
            data: { username: req.body.username }
        };
        console.log(errors.message);
        res.render('login', context);
    }
});

router.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

router.post('/register',
    isGuest(),
    body('username', 'Invalid username').trim().isLength({ min: 3 }).isAlphanumeric(), // Change message and validation according to project requirements
    body('password', 'Invalid password').trim().isLength({ min: 3 }).isAlphanumeric(), // Change message and validation according to project requirements
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
        } catch (error) {
            const errMsg = parseErrorMessage(error);
            const context = {
                title: 'Register',
                errors: errMsg,
                data: { username: req.body.username }
            };
            // console.log(errors.message);
            res.render('register', context);
        }
    });

router.get('/logout', isUser(), (req, res) => {
    req.auth.logout();
    res.redirect('/auth/login');
});

module.exports = router;