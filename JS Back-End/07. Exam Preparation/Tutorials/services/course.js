const Course = require('../models/Course.js');

module.exports = {
    //EXPORT ALL FUNCTIONS!
    create,
    getById,
    getAll,
    getTop,
    edit,
    deleteById,
    enroll,
};

async function create(data) {
    const pattern = new RegExp(`^${data.title}$`, 'i');
    const existing = await Course.findOne({ title: pattern });
    if (existing) {
        throw new Error('Course with this title already exists');
    } else {
        const course = new Course(data);
        await course.save();
        return course;
    }
};

async function getById(id) {
    const course = await Course.findById(id).lean();
    return course;
};

async function getAll(query = '') {
    const pattern = new RegExp(`${query}`, 'i');
    return await Course.find({ title: pattern }).sort('-createdAt').lean();
};

async function getTop() {
    return await Course.find({}).sort('users').limit(3).lean();
};

async function edit(id, data) {
    const course = await Course.findById(id);

    if (course.title.toLocaleLowerCase() != data.title.toLocaleLowerCase()) {
        const pattern = new RegExp(`^${data.title}$`, 'i');
        const existing = await Course.findOne({ title: pattern });
        if (existing) {
            throw new Error('Course with this title already exists');
        }
    }

    Object.assign(course, data);
    await course.save();
    return course;
};

async function deleteById(id) {
    return await Course.findByIdAndDelete(id);
};

async function enroll(courseId, userId) {
    const course = await Course.findById(courseId);
    if (course) {
        const isEnrolled = Boolean(course.users.find(b => b == userId));
        if (isEnrolled) {
            throw new Error('User is already enrolled in the course');
        } else {
            course.users.push(userId);
            await course.save();
            return course;
        }
    } else {
        throw new Error('Course not found');
    }
}