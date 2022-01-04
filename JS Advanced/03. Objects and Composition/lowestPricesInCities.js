function lowestPrices(input) {
    let result = [];
    let pricelist = {};
    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (pricelist[product] == undefined) {
            pricelist[product] = {
                [town]: price,
            };
        }
        pricelist[product][town] = price;
    }

    for (const [product, prices] of Object.entries(pricelist)) {
        let sorted = Object.entries(prices).sort(([townA, priceA], [townB, priceB]) => priceA - priceB);
        let [[town, lowestPrice]] = sorted;
        result.push(`${product} -> ${lowestPrice} (${town})`);
    }
    return result.join('\n');
}
console.log(lowestPrices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
));