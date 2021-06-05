const path = require('path');
const fs = require('fs/promises');
let filepath = path.normalize(path.join(__dirname, '../data/books.json'));
let database = '';

async function init() {
    const data = await (fs.readFile(filepath));
    database = JSON.parse(data.toString());

    return (req, res, next) => {
        req.database = {
            getAllItems,
            getItemById,
            createItem,
        };
        next();
    };
}

function getAllItems() {
    return database;
}

function getItemById(id) {
    return database[id];
}

function createItem(data) {
    const id = generateId();
    console.log(data);
    data.id = id;
    database[id] = data;
    fs.writeFile(filepath, JSON.stringify(database), (err) => {
        if (err) {
            console.error(err);
        }
    });
    return database;
}


function generateId() {
    let id = '';
    do {
        id = (Math.random() * 999999 | 0).toString(16).padStart(6, '0');
    } while (database[id] !== undefined);
    return id;
}

module.exports = init;