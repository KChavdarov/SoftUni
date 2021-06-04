const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).send('Catalog page');
});

router.post('/', (req, res) => {
    res.status(201).send('Article Created');
});

router.get('/:id', (req, res) => {
    res.status(200).send('Article ' + req.params.id);
});

router.get('/:id/details', (req, res) => {
    res.status(200).send('Article ' + req.params.id + ' details');
});

module.exports = router;