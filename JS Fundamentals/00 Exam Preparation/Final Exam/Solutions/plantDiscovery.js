function plantDiscovery(input) {
    let count = input.shift();
    let plants = {};

    for (let i = 0; i < count; i++) {
        let command = input.shift();
        let [plant, rarity] = command.split("<->");
        plants[plant] = {
            rarity: Number(rarity),
            rating: []
        };
    }
    let command = input.shift();
    while (command != "Exhibition") {
        let isValid = false;
        let [action, data] = command.split(": ");
        if (action == "Rate") {
            let [name, rating] = data.split(" - ");
            if (plants.hasOwnProperty(name)) {
                let plant = plants[name];
                plant.rating.push(Number(rating));
                isValid = true;
            }
        } else if (action == "Update") {
            let [name, newRarity] = data.split(" - ");
            if (plants.hasOwnProperty(name)) {
                let plant = plants[name];
                plant.rarity = Number(newRarity);
                isValid = true;
            }
        } else if (action == "Reset") {
            let name = data;
            if (plants.hasOwnProperty(name)) {
                let plant = plants[name];
                plant.rating = [];
                isValid = true;
            }
        }
        if (!isValid) {
            console.log("error");
        }
        command = input.shift();
    }

    let sorted = Object.entries(plants).sort((a, b) => sortPlants(a, b));

    console.log("Plants for the exhibition:");
    for (const [plant, data] of sorted) {
        let rarity = data.rarity;
        let averageRating = 0;
        if (data.rating.length > 0) {
            averageRating = data.rating.reduce((a, b) => a + b) / data.rating.length;
        }
        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

    function sortPlants([nameA, dataA], [nameB, dataB]) {
        let averageA = 0;
        if (dataA.rating.length > 0) {
            averageA = dataA.rating.reduce((a, b) => a + b) / dataA.rating.length;
        }
        let averageB = 0;
        if (dataB.rating.length > 0) {
            averageB = dataB.rating.reduce((a, b) => a + b) / dataB.rating.length;
        }
        return dataB.rarity - dataA.rarity || averageB - averageA;
    }
}
// plantDiscovery([
//     '3',
//     'Arnoldii<->4',
//     'Woodii<->7',
//     'Welwitschia<->2',
//     'Rate: Woodii - 10',
//     'Rate: Welwitschia - 7',
//     'Rate: Arnoldii - 3',
//     'Rate: Woodii - 5',
//     'Update: Woodii - 5',
//     'Reset: Arnoldii',
//     'Exhibition'
// ]);
plantDiscovery([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'asdjasdasdasd',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
]);