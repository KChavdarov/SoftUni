function fishingBoat(budgetInput, seasonInput, fishermenInput) {
    let budget = Number(budgetInput);
    let fishermen = Number(fishermenInput);
    let season = seasonInput;
    let cost = 0;
    switch (season) {
        case "Spring":
            cost = 3000;
            if (fishermen >= 12) {
                cost *= 0.75;
            } else if (fishermen > 6) {
                cost *= 0.85;
            } else {
                cost *= 0.90;
            }
            break;
        case "Summer":
        case "Autumn":
            cost = 4200;
            if (fishermen >= 12) {
                cost *= 0.75;
            } else if (fishermen > 6) {
                cost *= 0.85;
            } else {
                cost *= 0.90;
            }
            break;
        case "Winter":
            cost = 2600;
            if (fishermen >= 12) {
                cost *= 0.75;
            } else if (fishermen > 6) {
                cost *= 0.85;
            } else {
                cost *= 0.90;
            }
            break;
    }
    if (season != "Autumn" && (fishermen % 2 === 0)) {
        cost *= 0.95;
    }
    let difference = Math.abs(budget - cost);
    if (cost > budget){
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    }
}
fishingBoat(3600,"Autumn",6);