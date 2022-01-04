function pirates(input) {
    let command = input.shift();
    let cities = {};

    while (command != 'Sail') {
        let [name, population, gold] = command.split('||');
        if (!cities.hasOwnProperty(name)) {
            cities[name] = {};
            cities[name].population = 0;
            cities[name].gold = 0;
        }
        cities[name].population += Number(population);
        cities[name].gold += Number(gold);
        command = input.shift();
    }

    while (command != 'End') {
        let parameters = command.split('=>');
        let action = parameters.shift();
        if (action == 'Plunder') {
            let [town, people, gold] = parameters;
            let targetTown = cities[town];
            let kills = Math.min(Number(people), targetTown.population);
            targetTown.population -= kills;
            let goldStolen = Math.min(Number(gold), targetTown.gold);
            targetTown.gold -= goldStolen;
            console.log(`${town} plundered! ${goldStolen} gold stolen, ${kills} citizens killed.`);

            if (targetTown.gold == 0 || targetTown.population == 0) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else if (action == 'Prosper') {
            let [town, gold] = parameters;
            let targetTown = cities[town];
            gold = Number(gold);
            if (gold > 0) {
                targetTown.gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${targetTown.gold} gold.`);
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }
        command = input.shift();
    }

    let count = Object.entries(cities).length;
    if (count > 0) {
        let sorted = Object.entries(cities).sort((a, b) => sortTowns(a, b));
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
        for (const [town, data] of sorted) {
            console.log(`${town} -> Population: ${data.population} citizens, Gold: ${data.gold} kg`);
        }
    }

    function sortTowns(cityA, cityB) {
        let [nameA, dataA] = cityA;
        let [nameB, dataB] = cityB;
        return dataB.gold - dataA.gold || nameA.localeCompare(nameB);
    }
}

pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]);