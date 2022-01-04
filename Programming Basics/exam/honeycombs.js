function honeycombsCalculator(arg1, arg2) {
    let bees = Number(arg1);
    let flowers = Number(arg2);
    let honey = bees * flowers * 0.21;
    let honeycombs = Math.floor(honey / 100);
    let remainder = honey % 100;
    console.log(`${honeycombs} honeycombs filled.`);
    console.log(`${remainder.toFixed(2)} grams of honey left.`);
}
honeycombsCalculator(25, 6400);