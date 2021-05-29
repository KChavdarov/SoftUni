const database = {};

function nextId() {
    let id;
    do {
        id = (Math.random() * 99999999 | 0).toString(16).padStart(8, '0');
    }
    while (database[id] != undefined);

    return id;
}

function addItem(item) {
    database[nextId()] = item;
}

function removeItem(id) {
    delete database[id];
}

module.exports = { database, addItem, removeItem };