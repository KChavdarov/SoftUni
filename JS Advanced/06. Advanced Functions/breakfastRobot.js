function robot() {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let recipes = {
        apple: [
            ['carbohydrate', 1],
            ['flavour', 2]
        ],
        lemonade: [
            ['carbohydrate', 10],
            ['flavour', 20]
        ],
        burger: [
            ['carbohydrate', 5],
            ['fat', 7],
            ['flavour', 3]
        ],
        eggs: [
            ['protein', 5],
            ['fat', 1],
            ['flavour', 1]
        ],
        turkey: [
            ['protein', 10],
            ['carbohydrate', 10],
            ['fat', 10],
            ['flavour', 10]
        ],
    };

    function prepare([recipe, qty]) {
        for (const [element, req] of recipes[recipe]) {
            let macro = storage[element];
            if (macro < Number(req) * qty) {
                return `Error: not enough ${element} in stock`;
            }
        }
        for (const [element, req] of recipes[recipe]) {
            storage[element] -= (Number(req) * qty);
        }
        return 'Success';
    }

    function restock([element, qty]) {
        storage[element] += Number(qty);
        return 'Success';
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }

    let actions = {
        prepare,
        restock,
        report
    };

    function output(input) {
        let [action, ...params] = input.split(' ');
        return actions[action](params);
    }
    return output;
}

let manager = robot();
console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));

console.log('-----------');

let manager1 = robot();
manager1('restock carbohydrate 10');
manager1('restock flavour 10');
manager1('prepare apple 1');
manager1('restock fat 10');
manager1('prepare burger 1');
manager1('report');

console.log('-----------');

let manager2 = robot();
console.log(manager2('prepare turkey 1'));
console.log(manager2('restock protein 10'));
console.log(manager2('prepare turkey 1'));
console.log(manager2('restock carbohydrate 10'));
console.log(manager2('prepare turkey 1'));
console.log(manager2('restock fat 10'));
console.log(manager2('prepare turkey 1'));
console.log(manager2('restock flavour 10'));
console.log(manager2('prepare turkey 1'));
console.log(manager2('report'));