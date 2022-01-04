function townPopulation(arr) {
    let result = [];
    let towns = arr.reduce(townReducer, {});
    for (const [town, population] of Object.entries(towns)) {
        result.push(`${town} : ${population}`);
    }
    return result.join('\n');

    function townReducer(acc, c) {
        let [town, population] = c.split(' <-> ');
        population = Number(population);
        if (acc[town] === undefined) {
            acc[town] = 0;
        }
        acc[town] += population;
        return acc;
    }
}

console.log(townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]));