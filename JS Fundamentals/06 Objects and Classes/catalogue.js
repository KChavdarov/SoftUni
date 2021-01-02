function catalogue(input) {
    input = input.sort((a, b) => a.localeCompare(b));
    let catalogue = {};

    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    input.forEach(element => {
        let [name, price] = element.split(' : ');
        let index = name[0];
        let product = new Product(name, price);
        if (catalogue[index] == undefined) {
            catalogue[index] = [];
        }
        catalogue[index].push(product);
    });

    for (const key of Object.keys(catalogue)) {
        console.log(key);
        catalogue[key].forEach(group => {
            console.log(`  ${group.name}: ${group.price}`);
        });
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

function storeCatalogue(arr) {
    let products = new Map();
    for (let line of arr) {
        let data = line.split(/\b\s:\s\b/);
        let letter = line[0][0];
        if (!products.has(letter)) {
            products.set(letter, data);
        }
        else {
            products.set(letter,products.get(letter)+","+data);
        }
    }
    let myProducts = new Map([...products.entries()].sort());
    for (let [letter, items] of myProducts) {
        console.log(letter);
        if(items.constructor !== Array){
            items=items.split(',');
        }
        let products = [];
        for (let i = 0; i < items.length; i+=2) {
            let product =items[i];
            let price =items[i+1];
            let line = product+": "+price;
            products.push(line);
            products.sort();
        }
        for (let product of products) {
            console.log(`  ${product}`);
        }
    }
}
 
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);