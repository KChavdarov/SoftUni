const fs = require('fs');
const path = require('path');

const filePath = path.normalize(path.join(__dirname, '../data/cats.json'));
let database = '';

fs.readFile(filePath, (err, data) => {
    database += data;
    database = JSON.parse(database.toString());
});

function generateId() {
    let id;
    do {
        id = (Math.random() * 99999999 | 0).toString(16).padStart(8, '0');
    } while (database[id] != undefined);

    return id;
}

function getItems() {
    return database;
}

function getItemById(id) {
    return database[id];
}

function addItem(item) {
    const id = generateId();
    database[id] = item;
    item.id = id;
    fs.writeFile(filePath, JSON.stringify(database), (err) => {
        if (err) {
            console.error(err);
        }
    });
}

function deleteItem(id) {
    // TODO: REMOVE OLD IMAGE FILE
    fs.unlink(path.normalize(path.join(__dirname, '../content/images/' + database[id]['image'])), () => console.log('image deleted'));

    delete database[id];
    fs.writeFile(filePath, JSON.stringify(database), (err) => {
        if (err) {
            console.error(err);
        }
    });
}

function updateItem(id, item) {
    // TODO: REMOVE OLD IMAGE FILE
    if (database[id]['image'] != item.image) {
        fs.unlink(path.normalize(path.join(__dirname, '../content/images/' + database[id]['image'])), () => console.log('image deleted'));
    }
    database[id] = item;
    fs.writeFile(filePath, JSON.stringify(database), (err) => {
        if (err) {
            console.error(err);
        }
    });
}

module.exports = { getItems, getItemById, addItem, updateItem, deleteItem };