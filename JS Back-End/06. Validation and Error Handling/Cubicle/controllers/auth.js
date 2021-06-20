const { body, validationResult } = require('express-validator');
const { isGuest, isAuth } = require('../middleware/guards.js');

const router = require('express').Router();

router.get('/register', isGuest, (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post('/register',
    isGuest,
    body('username', 'Username cannot be empty').trim().notEmpty().custom(async (value, { req }) => {
        const user = req.auth.getUserByUsername(value);
        if (user) {
            throw new Error('User already exists');
        }
        return true;
    }),
    body('email', 'Please enter a valid email').isEmail().normalizeEmail(),
    body('password', 'Password must be at least 5 characters long').trim().isLength({ min: 5 }),
    async (req, res) => {
        try {
            // await req.auth.register(req.body);
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw new Error(errors.map(e => e.msg).join());
            }

            res.redirect('/products');
        } catch (error) {
            const context = {
                title: 'Register',
                error: error.message,
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