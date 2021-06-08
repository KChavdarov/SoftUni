const fs = require('fs/promises');
const uniqid = require('uniqid');

const filepath = './models/data.json';
let database = {};

async function init() {
    const data = await fs.readFile(filepath);
    database = JSON.parse(data.toString());

    return (req, res, next) => {
        req.storage = {
            getAllItems,
            getItemById,
            addItem,
            updateItem
        };
        next();
    };
}

function getAllItems(query) {
    let data = Object.entries(database).map(([k, v]) => Object.assign({}, { id: k }, v));

    if (query.search) {
        data = data.filter(a => a.name.toLowerCase().includes(query.search.toLowerCase()) || a.description.toLowerCase().includes(query.search.toLowerCase()));
    }
    if (query.from) {
        data = data.filter(a => a.difficulty >= query.from);
    }
    if (query.to) {
        data = data.filter(a => a.difficulty <= query.to);
    }

    return data;
}

function getItemById(id) {
    let item = database[id];

    if (item) {
        return Object.assign({}, item, { id });
    } else {
        return undefined;
    }
}

function addItem(data) {
    const id = uniqid();
    const item = {};

    item.name = data.name;
    item.description = data.description;
    item.imageUrl = data.imageUrl;
    item.difficulty = Number(data.difficulty);

    database[id] = item;

    fs.writeFile(filepath, JSON.stringify(database, null, 2), (err) => {
        console.log(err);
    });
}

function updateItem(id, data) {
    const item = database[id];

    if (!item) {
        throw new ReferenceError('Item not found');
    }

    item.name = data.name;
    item.description = data.description;
    item.imageUrl = data.imageUrl;
    item.difficulty = Number(data.difficulty);

    fs.writeFile(filepath, JSON.stringify(database, null, 2), (err) => {
        console.log(err);
    });
}

module.exports = { init };