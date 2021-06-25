const { isUser } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');

const router = require('express').Router();

//CHANGE REDIRECT PATHS TO CORRECT ROUTES
//CHANGE ALL TEMPLATE PATHS IN RENDER CALLS

/*  ***  CREATE ACTIONS  ***  */
router.get('/create', isUser(), async (req, res) => {
    res.render('create', { title: 'SoftUni Wiki - Create Article' });
});

router.post('/create', isUser(), async (req, res) => {
    const article = {
        title: req.body.title.trim(),
        description: req.body.description.trim(),
        author: req.user._id,
    };
    try {
        await req.storage.create(article);
        res.redirect('/');
    } catch (error) {
        const errors = parseErrorMessage(error);
        console.log(errors);
        const context = {
            title: 'SoftUni Wiki - Create Article',
            errors,
            article,
        };
        res.render('create', context);
    }
});

/*  ***  DETAILS  ***  */
router.get('/details/:id', async (req, res) => {
    try {
        const article = await req.storage.getById(req.params.id);
        article.description = article.description.split('\r\n').filter(a => a);

        article.isUser = Boolean(req.user);
        if (article.isUser) {
            article.isOwner = req.user._id == article.author;
        }

        res.render('details', { title: 'SoftUni Wiki - ' + article.title, article });
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/');
    }
});

/*  ***  EDIT ACTIONS  ***  */
router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const article = await req.storage.getById(req.params.id);
        res.render('edit', { title: 'SoftUni Wiki - ' + article.title, article });
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/articles/details/' + req.params.id);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const articleData = {
        _id: req.params.id,
        description: req.body.description.trim(),
    };

    try {
        const article = await req.storage.getById(req.params.id);
        articleData.title = article.title;
        await req.storage.edit(req.params.id, articleData);
        res.redirect('/articles/details/' + req.params.id);
    } catch (error) {
        const errors = parseErrorMessage(error);
        const context = {
            title: 'SoftUni Wiki - ' + articleData.title,
            errors,
            article: articleData,
        };
        console.log(errors);
        res.render('edit', context);
    }
});

/*  ***  DELETE ACTIONS  ***  */
router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const article = await req.storage.getById(req.params.id);
        if (req.user._id == article.author) {
            res.render('delete', { title: 'SoftUni Wiki - ' + article.title, article });
        } else {
            throw new Error('Only the author can delete their article');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/articles/details/' + req.params.id);
    }

});

router.post('/delete/:id', isUser(), async (req, res) => {
    try {
        const article = await req.storage.getById(req.params.id);
        if (req.user._id == article.author) {
            await req.storage.deleteById(req.params.id);
            res.redirect('/');
        } else {
            throw new Error('Only the author can delete their article');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/articles/details/' + req.params.id);
    }
});

module.exports = router;