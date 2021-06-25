const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const articles = await req.storage.getLatest();
        articles.forEach(a => {
            let extract = a.description.split(' ');
            if (extract.length > 50) {
                extract = extract.slice(0, 50);
                extract[49] += '...';
                a.description = extract.join(' ');
            }
        });
        res.render('home', { title: 'SoftUni Wiki', articles });
    } catch (error) {
        console.log(error.message);
        res.render('home', { title: 'SoftUni Wiki' });
    }
});

router.get('/catalog', async (req, res) => {
    const query = req.query.search || '';
    try {
        const articles = await req.storage.getAllTitles(query);
        res.render('catalog', { title: 'SoftUni Wiki - Catalog', articles, query });
    } catch (error) {
        console.log(error.message);
        res.render('catalog', { title: 'SoftUni Wiki - Catalog' });
    }
});

module.exports = router;