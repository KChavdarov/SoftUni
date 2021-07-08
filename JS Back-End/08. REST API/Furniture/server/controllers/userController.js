const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest, isAuth } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');


router.post('/register', isGuest(),
    body('email', 'Please enter a valid email').trim().isEmail().notEmpty().normalizeEmail(),
    body('password', 'Password must be at least 3 characters long').trim().isLength({ min: 3 }),
    async (req, res) => {
        try {
            const errors = Object.values(validationResult(req).mapped());
            if (errors.length > 0) {
                throw new Error(errors.map(e => e.msg).join('\n'));
            } else {
                const { email, password } = req.body;
                const credentials = await req.auth.register(email, password);
                res.status(201).json(credentials);
            }
        } catch (error) {
            const errors = parseErrorMessage(error);
            res.status(406).json({ message: errors });
        }
    });

router.post('/login', isGuest(), async (req, res) => {
    try {
        const { email, password } = req.body;
        const credentials = await req.auth.login(email, password);
        res.status(201).json(credentials);
    } catch (error) {
        const errors = parseErrorMessage(error);
        res.status(406).json({ message: errors });
    }
});

router.get('/logout', isAuth(), (req, res) => {
    res.status(200).end();
});

module.exports = router;