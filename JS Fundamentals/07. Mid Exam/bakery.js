function bakery(workerRate, workers, competition) {
    let dailyProduction = workerRate * workers;
    let production = 0;

    for (let i = 1; i <= 30; i++) {
        if (i % 3 == 0) {
            production += Math.floor(dailyProduction * 0.75);
        } else {
            production += dailyProduction;
        }
    }
    let delta = Math.abs(production - competition);
    let percentage = (delta / competition * 100).toFixed(2);

    console.log(`You have produced ${production} biscuits for the past month.`);
    if(production > competition){
        console.log(`You produce ${percentage} percent more biscuits.`);
    } else {
        console.log(`You produce ${percentage} percent less biscuits.`);
    }
}
bakery(78, 8, 16000);
bakery(65, 12, 26000);