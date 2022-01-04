function storeProvision(stock, order) {
    let inventory = {};
    inventory = loadInventory(stock, inventory);
    inventory = loadDelivery(order, inventory);
    for (const item of Object.keys(inventory)) {
        console.log(`${item} -> ${inventory[item]}`);
    }

    function loadInventory(arr, obj) {
        for (let i = 1; i < arr.length; i += 2) {
            let key = arr[i - 1];
            let value = Number(arr[i]);
            obj[key] = value;
        }
        return obj;
    }

    function loadDelivery(arr, obj) {
        for (let i = 1; i < arr.length; i += 2) {
            let key = arr[i - 1];
            let value = Number(arr[i]);
            if (Object.keys(obj).includes(key)) {
                obj[key] += value;
            } else {
                obj[key] = value;
            }
        }
        return obj;
    }
}
storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);