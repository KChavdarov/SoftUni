const { isGuest, isAuth } = require('../middleware/guards.js');

const router = require('express').Router();

router.get('/register', isGuest, (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post('/register', isGuest, async (req, res) => {
    try {
        await req.auth.register(req.body);
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