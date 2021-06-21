const { body, validationResult } = require('express-validator');
const { isGuest, isAuth } = require('../middleware/guards.js');

const router = require('express').Router();

router.get('/register', isGuest, (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post('/register',
    isGuest,
    body('username', 'Invalid username!').trim().isLength({ min: 5 }).isAlphanumeric(),
    body('password', 'Password must be at least 8 characters long!').trim().isLength({ min: 8 }).isAlphanumeric(),
    body('repeatPassword', 'Passwords don\'t match!').custom((value, { req }) => {
        return req.body.password === value;
    }),
    async (req, res) => {
        try {
            const errors = Object.values(validationResult(req).mapped());
            if (errors.length > 0) {
                throw new Error(errors.map(e => e.msg).join('/n'));
            } else {
                await req.auth.register(req.body);
                res.redirect('/products');
            }
        } catch (errors) {
            const context = {
                title: 'Register',
                errors: errors.message.split('/n'),
                data: { username: req.body.username }
            };
            res.render('register', context);
        }
    });

router.get('/login', isGuest, (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/login', isGuest, async (req, res) => {
    try {
        await req.auth.login(req.body.username, req.body.password);
        res.redirect('/products');
    } catch (error) {
        const context = {
            title: 'Login',
            error: error.message,
            data: { username: req.body.username }
        };
        res.render('login', context);
    }
});

router.get('/logout', isAuth, (req, res) => {
    req.auth.logout();
    res.redirect('/auth/login');
});

module.exports = router;