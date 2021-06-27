const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest, isUser } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');

/*  ***  LOGIN ACTIONS  ***  */
router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Shared Trip - Login' });
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        await req.auth.login(req.body);
        res.redirect('/');
    } catch (error) {
        const errors = parseErrorMessage(error);
        const context = {
            title: 'Shared Trip - Login',
            errors,
            data: { email: req.body.email, gender: req.body.gender }
        };
        console.log(errors);
        res.render('login', context);
    }
});

/*  ***  REGISTER ACTIONS  ***  */
router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Shared Trip - Register' });
});

router.post('/register',
    isGuest(),
    body('email', 'Please enter a valid email').trim().isEmail().notEmpty(),
    body('gender', 'Please select a valid gender').trim().isIn(['male', 'female']),
    body('password', 'Password must be at least 4 characters long').trim().isLength({ min: 4 }),
    body('repeatPassword', 'Passwords don\'t match').custom((value, { req }) => value.trim() == req.body.password.trim()),
    async (req, res) => {
        try {
            const errors = Object.values(validationResult(req).mapped());
            if (errors.length > 0) {
                throw new Error(errors.map(e => e.msg).join('\n'));
            } else {
                await req.auth.register(req.body);
                res.redirect('/');
            }
        } catch (error) {
            const errors = parseErrorMessage(error);
            const context = {
                title: 'Shared Trip - Register',
                errors,
                data: {
                    email: req.body.email,
                    gender: req.body.gender
                }
            };
            console.log(errors);
            res.render('register', context);
        }
    });

router.get('/logout', isUser(), (req, res) => {
    req.auth.logout();
    res.redirect('/auth/login');
});

module.exports = router;