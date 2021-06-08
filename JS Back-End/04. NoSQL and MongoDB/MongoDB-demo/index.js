// const { MongoClient } = require('mongodb');

const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/testdb';

const Cat = require('./models/Cat.js');
const Person = require('./models/Person.js');
const Comment = require('./models/Comment.js');
const Post = require('./models/Post.js');

start();
async function start() {
    const client = await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Database connected!');

    // const post = new Post({
    //     title: 'Test post',
    //     author: await Person.findOne({}),
    //     content: 'This is just a test post',
    // });

    // await post.save();

    const post = await Post.findOne({}).populate('author').populate({
        path: 'comments',
        populate: 'author'
    });

    // // post.comments = await Comment.find({post: post._id});
    // await post.save();

    console.log(post);

    // const comment = await Comment.findOne({});
    // comment.author = await Person.findOne({firstName : 'Ivan'});

    // comment.save();

    // const comment = new Comment({
    //     author: await Person.findOne({}).where('Name').equals('Ivan'),
    //     content: 'This is just a test comment',
    //     post,
    // });
    // await comment.save();


    // const data = await Person.find({ firstName: 'Kiril' });
    // console.log(data);

    // const test = await Person.findOne({firstName: 'Kiril'});
    // console.log(test);

    // const test2 = await Person.findById('60bdfb451cd47f182c893358');
    // console.log(test2);

    // const test3 = await Person.find({ age: { $gt: 30 } });
    // console.log(test3);

    // const test4 = await Person.findByIdAndUpdate('60bdfb451cd47f182c893358', { $set: { age: 30 } });
    // console.log(test4);

    // const count = await Person.countDocuments({});
    // console.log(count);

    // const test5 = await Person.find({}).sort({ age: 1 }).skip(1).limit(1);
    // console.log(test5);

    /*
    const cat = new Cat({
        name: 'Leya',
        color: 'mixed'
    });

    try {
        await cat.save();
    } catch (err) {
        console.error(err.message);
    }

    let data = await Cat.find({});
    console.log(data);

    // const myCat = new Cat({
    //     name: 'Garry',
    //     age: 21
    // });
    // await myCat.save();

    // data = await Cat.find({});
    // console.log(data);



    const testGuy = new Person({
        firstName: 'Kiril',
        lastName: 'Ivanov',
        age: -2
    });

    // const testGuy2 = new Person({
    //     firstName: 'Ivan',
    //     lastName: 'Kirilov',
    //     age: 35
    // });

    try {
        await testGuy.save();
        // await testGuy2.save();

    } catch (err) {
        console.error(err.message);
    }

    const people = await Person.find({});
    console.log(people.map(a => a.sayHi()));
    */
}


// const client = new MongoClient(connectionString, { useUnifiedTopology: true });

// client.connect((err) => {
//     if (err) {
//         return console.error('Something unexpected ocurred!');
//     }
//     console.log('Database connected!');
// });

// const db = client.db('testdb');
// const collection = db.collection('cats');

// const cat = collection.find({});
// cat.toArray((err, data) => { console.log(data); });