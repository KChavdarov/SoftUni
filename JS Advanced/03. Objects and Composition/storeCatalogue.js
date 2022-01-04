function storeCatalogue(input) {
    let catalogue = {};
    let sorted = input.sort((a, b) => a.localeCompare(b));
    for (const item of sorted) {
        let [product, price] = item.split(' : ');
        price = Number(price);
        let key = product[0];
        if (catalogue[key] == undefined) {
            catalogue[key] = {
                [product]: price
            };
        } else {
            catalogue[key][product] = price;
        }
    }
    let print = [];

    for (const [key, products] of Object.entries(catalogue)) {
        let group = [key];
        for (const [product, price] of Object.entries(products)) {
            group.push(`  ${product}: ${price}`);
        }
        print.push(group.join('\n'));
    }
    return print.join('\n');
}
console.log(storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));