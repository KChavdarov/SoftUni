const database = require('../util/database.js');

module.exports = {
    create: (serial, name) => {
        database[serial] = name;
    },
    get: (serial) => database[serial],
    getAll: () => Object.entries(database),
}