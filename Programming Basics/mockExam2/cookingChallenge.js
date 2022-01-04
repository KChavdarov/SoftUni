function cookingChallenge(input) {
    let index = 0;
    let contestants = Number(input[index]);
    index++;
    let totalProducts = 0;
    let donation = 0;

    for (let i = 0; i < contestants; i++) {
        let name = input[index];
        index++;
        let cookiesCount = 0;
        let cakesCount = 0;
        let wafflesCount = 0;
        let product = input[index];
        index++;
        while (product != "Stop baking!") {
            let quantity = Number(input[index]);
            index++;
            switch (product) {
                case "cookies":
                    cookiesCount += quantity;
                    break;
                case "cakes":
                    cakesCount += quantity;
                    break;
                case "waffles":
                    wafflesCount += quantity;
                    break;
            }
            product = input[index];
            index++;
        }
        totalProducts += (cookiesCount + cakesCount + wafflesCount);
        donation += ((cookiesCount * 1.5) + (cakesCount * 7.8) + (wafflesCount * 2.3));
        console.log(`${name} baked ${cookiesCount} cookies, ${cakesCount} cakes and ${wafflesCount} waffles.`);
    }
    console.log(`All bakery sold: ${totalProducts}`);
    console.log(`Total sum for charity: ${donation.toFixed(2)} lv.`);
}
cookingChallenge([
    '3', 'Iva',
    'cookies', '5',
    'cakes', '3',
    'Stop baking!', 'George',
    'cakes', '7',
    'waffles', '2',
    'Stop baking!', 'Ivan',
    'cookies', '6',
    'Stop baking!'
]);