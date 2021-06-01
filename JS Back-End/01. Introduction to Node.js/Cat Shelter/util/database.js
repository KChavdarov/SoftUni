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

function addItem(item) {
    database[generateId()] = item;
    fs.writeFile(filePath, JSON.stringify(database), (err) => {
        if (err) {
            console.error(err);
        }
    });
}

function deleteItem(id) {
    // TODO: REMOVE IMAGE FILE
    delete database[id];
    fs.writeFile(filePath, JSON.stringify(database));
}

function updateItem(id, item) {
    database[id] = item;
    fs.writeFile(filePath, JSON.stringify(database));
}

module.exports = { addItem, updateItem, deleteItem };