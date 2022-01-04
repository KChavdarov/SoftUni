function beehivePopulation(arg1, arg2) {
    let population = Number(arg1);
    let years = Number(arg2);

    for (let i = 1; i <= years; i++) {
        population += parseInt(population / 10) * 2;
        if (i % 5 == 0) {
            population -= parseInt(population / 50) * 5;
        }
        population -= parseInt(population / 20) * 2;
    }
    console.log(`Beehive population: ${population}`);
}
beehivePopulation(100, 6);