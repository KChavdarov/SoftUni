function storage(input) {
    let inventory = new Map();
    for (let element of input) {
        let [item, quantity] = element.split(' ');
        quantity = Number(quantity);
        if (!inventory.has(item)) {
            inventory.set(item, quantity);
        } else {
            quantity += inventory.get(item);
            inventory.set(item, quantity);
        }
    }
    for (const [item, quantity] of inventory) {
        console.log(`${item} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);