const fs = require('fs');
const path = require('path');

const filePath = path.normalize(path.join(__dirname, '../data/breeds.json'));
let database = '';

fs.readFile(filePath, (err, data) => {
    database += data;
    database = JSON.parse(database.toString());
});

function getBreeds() {
    return database;
}

function addBreed(breed) {
    if (!database.includes(breed)) {
        database.push(breed);
        fs.writeFile(filePath, JSON.stringify(database), (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
}

module.exports = { getBreeds, addBreed };