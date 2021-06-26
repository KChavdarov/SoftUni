const { parseErrorMessage } = require('../util/parser.js');

const router = require('express').Router();

router.get('/', async (req, res) => {
    let courses;
    try {
        if (req.user) {
            const query = req.query.search;
            courses = await req.storage.getAll(query);
            courses.forEach(c => {
                c.isUser = true;
            });
        } else {
            courses = await req.storage.getTop();
            courses.forEach(c => c.enrolled = c.users.length);
            courses.reverse();
        }
        res.render('home/home', { title: 'SoftUni Tutorials - Welcome', courses });
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.render('home/home', { title: 'SoftUni Tutorials - Welcome' });
    }
});

module.exports = router;