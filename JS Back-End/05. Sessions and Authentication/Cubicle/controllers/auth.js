const router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post('/register', async (req, res) => {
    try {
        await req.auth.register(req.body);
        res.redirect('/auth/login');
    } catch (error) {
        const context = {
            title: 'Register',
            error: error.message,
            data: { username: req.body.username }
        };
        res.render('register', context);
    }
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/login', async (req, res) => {
    try {
        await req.auth.login(req.body.username, req.body.password);
        res.redirect('/auth/login');
    } catch (error) {
        const context = {
            title: 'Login',
            error: error.message,
            data: { username: req.body.username }
        };
        res.render('login', context);
    }
});


module.exports = router;