const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest, isUser } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');

//CHANGE PATH TO TEMPLATES IN RENDER CALLS IF NECESSARY

/*  ***  LOGIN ACTIONS  ***  */
router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login Page' });
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        await req.auth.login(req.body);
        res.redirect('/'); // Redirect according to project requirements
    } catch (error) {
        const errors = parseErrorMessage(error);
        const context = {
            title: 'Login Page',
            errors,
            data: { username: req.body.username, email: req.body.email } // ADD OR CHANGE LOGIN METHOD IF NECESSARY (EMAIL/USERNAME)
        };
        console.log(errors);
        res.render('login', context);
    }
});

/*  ***  REGISTER ACTIONS  ***  */
router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register Page' });
});

router.post('/register',
    isGuest(),
    body('email', 'Please enter a valid email').trim().isEmail().isLength({ min: 3 }), // Change message and validation according to project requirements
    body('username', 'Invalid username').trim().isLength({ min: 3 }), // Change message and validation according to project requirements
    body('password', 'Invalid password').trim().isLength({ min: 3 }), // Change message and validation according to project requirements
    body('repeatPassword', 'Passwords don\'t match').custom((value, { req }) => value.trim() == req.body.password.trim()),
    async (req, res) => {
        try {
            const errors = Object.values(validationResult(req).mapped());
            if (errors.length > 0) {
                throw new Error(errors.map(e => e.msg).join('\n'));
            } else {
                await req.auth.register(req.body);
                res.redirect('/'); // Redirect according to project requirements
            }
        } catch (error) {
            const errors = parseErrorMessage(error);
            const context = {
                title: 'Register Page',
                errors,
                data: { username: req.body.username, email: req.body.email } // ADD OR CHANGE LOGIN METHOD IF NECESSARY (EMAIL/USERNAME)
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