const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest, isUser } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');

//CHANGE PATH TO TEMPLATES IN RENDER CALLS IF NECESSARY

/*  ***  LOGIN ACTIONS  ***  */
router.get('/login', isGuest(), (req, res) => {
    res.render('user/login', { title: 'SoftUni Tutorials - Login' });
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        await req.auth.login(req.body);
        res.redirect('/');
    } catch (error) {
        const errors = parseErrorMessage(error);
        const context = {
            title: 'SoftUni Tutorials - Login',
            errors,
            data: { username: req.body.username }
        };
        console.log(errors);
        res.render('user/login', context);
    }
});

/*  ***  REGISTER ACTIONS  ***  */
router.get('/register', isGuest(), (req, res) => {
    res.render('user/register', { title: 'SoftUni Tutorials - Register' });
});

router.post('/register',
    isGuest(),
    body('username', 'Invalid username').trim().notEmpty(), // Change message and validation according to project requirements
    body('password', 'Invalid password').trim().notEmpty(), // Change message and validation according to project requirements
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
                title: 'SoftUni Tutorials - Register',
                errors,
                data: { username: req.body.username }
            };
            console.log(errors);
            res.render('user/register', context);
        }
    });

router.get('/logout', isUser(), (req, res) => {
    req.auth.logout();
    res.redirect('/auth/login');
});

module.exports = router;