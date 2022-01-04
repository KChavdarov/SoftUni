function summerShopping(input) {
    let budget = Number(input[0]);
    let towel = Number(input[1]);
    let discount = Number(input[2]);
    let umbrella = towel * 2 / 3;
    let flipFlops = umbrella * 0.75;
    let beachBag = (towel + flipFlops) / 3;
    let shopping = (towel + umbrella + flipFlops + beachBag) * (1 - discount / 100);
    let difference = Math.abs(budget - shopping);

    if (budget < shopping) {
        console.log(`Annie's sum is ${shopping.toFixed(2)} lv. She needs ${difference.toFixed(2)} lv. more.`);
    } else {
        console.log(`Annie's sum is ${shopping.toFixed(2)} lv. She has ${difference.toFixed(2)} lv. left.`);
    }
}
summerShopping([40, 15, 5]);