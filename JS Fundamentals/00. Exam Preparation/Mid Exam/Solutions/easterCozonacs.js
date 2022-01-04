function easterCozonac(input) {
    input = input.map(Number);
    let budget = input.shift();
    let flourPrice = input.shift();
    let eggPrice = flourPrice * 0.75;
    let milkPrice = flourPrice * 1.25;
    let cozonac = flourPrice + eggPrice + milkPrice / 4;
    let count = 0;
    let coloredEggs = 0;

    while (budget - cozonac > 0) {
        budget -= cozonac;
        count++;
        coloredEggs += 3;
        if (count % 3 == 0) {
            coloredEggs -= (count - 2);
        }
    }
    console.log(`You made ${count} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(2)}BGN left.`);
}
easterCozonac(['20.50', '1.25']);
easterCozonac(['15.75', '1.4']);