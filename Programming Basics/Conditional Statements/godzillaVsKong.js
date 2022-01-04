function godzillaVsKong(budgetAsString, walkerCountAsString, outfitPriceAsString) {
    let budget = Number(budgetAsString);
    let walkers = Number(walkerCountAsString);
    let outfitPrice = Number(outfitPriceAsString);
    let decoration = budget * 0.1;
    let outfit;
    if (walkers > 150) {
        outfit = (walkers * outfitPrice) * 0.9;
    } else {
        outfit = walkers * outfitPrice;
    }
    let costs = decoration + outfit;
    let difference = Math.abs(budget - costs);
    if (costs <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
    }
}
godzillaVsKong(20000, 120, 55.5);