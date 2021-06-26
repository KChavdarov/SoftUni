const { isUser } = require('../middleware/guards.js');
const { parseErrorMessage } = require('../util/parser.js');

const router = require('express').Router();

/*  ***  CREATE ACTIONS  ***  */
router.get('/create', isUser(), async (req, res) => {
    res.render('course/create', { title: 'SoftUni Tutorials - Create Course' });
});

router.post('/create', isUser(), async (req, res) => {
    const course = {
        title: req.body.title.trim(),
        description: req.body.description.trim(),
        imageUrl: req.body.imageUrl.trim(),
        duration: req.body.duration.trim(),

        creator: req.user._id,
    };
    try {
        await req.storage.create(course);
        res.redirect('/');
    } catch (error) {
        const errors = parseErrorMessage(error);
        console.log(errors);
        const context = {
            title: 'SoftUni Tutorials - Create Course',
            errors,
            course,
        };
        res.render('course/create', context);
    }
});

/*  ***  DETAILS  ***  */
router.get('/details/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getById(req.params.id);

        course.isUser = Boolean(req.user);
        if (course.isUser) {
            course.isOwner = req.user._id == course.creator;
            course.isEnrolled = Boolean(course.users.find(b => b == req.user._id));
        }

        res.render('course/details', { title: 'SoftUni Tutorials - ' + course.title, course });
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/');
    }
});

/*  ***  EDIT ACTIONS  ***  */
router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getById(req.params.id);
        if (req.user._id == course.creator) {
            res.render('course/edit', { title: 'SoftUni Tutorials - Edit Course', course });
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/courses/details/' + req.params.id);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const courseData = {
        _id: req.params.id,

        title: req.body.title.trim(),
        description: req.body.description.trim(),
        imageUrl: req.body.imageUrl.trim(),
        duration: req.body.duration.trim(),

        creator: req.user._id,
    };

    try {
        const course = await req.storage.getById(req.params.id);
        if (req.user._id == course.creator) {
            await req.storage.edit(req.params.id, courseData);
            res.redirect('/courses/details/' + req.params.id);
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        const errors = parseErrorMessage(error);
        const context = {
            title: 'SoftUni Tutorials - Edit Course',
            errors,
            course: courseData,
        };
        console.log(errors);
        res.render('course/edit', context);
    }
});

/*  ***  DELETE ACTIONS  ***  */
router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getById(req.params.id);
        if (req.user._id == course.creator) {
            res.render('course/delete', { title: 'SoftUni Tutorials - Delete Course', course });
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/courses/details/' + req.params.id);
    }

});

router.post('/delete/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getById(req.params.id);
        if (req.user._id == course.creator) {
            await req.storage.deleteById(req.params.id);
            res.redirect('/');
        } else {
            throw new Error('Only creator can edit or delete');
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
        res.redirect('/courses/details/' + req.params.id);
    }
});


/*  ***  BUY / LIKE / COMMENT / ETC. ACTIONS ***  */
router.get('/enroll/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getById(req.params.id);
        if (req.user._id == course.creator) {
            throw new Error('Cannot enroll in a course you have created');
        } else {
            await Promise.all([
                req.auth.enroll(req.params.id, req.user._id),
                req.storage.enroll(req.params.id, req.user._id)
            ]);
        }
    } catch (error) {
        console.log(parseErrorMessage(error));
    }
    res.redirect('/courses/details/' + req.params.id);
});

module.exports = router;