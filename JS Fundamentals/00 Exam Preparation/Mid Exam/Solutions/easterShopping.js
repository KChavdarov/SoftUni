function shopping(input) {
    let shopList = input.shift().split(' ');
    let count = Number(input.shift());
    let action = input.shift();

    for (let i = 0; i < count; i++) {
        let [command, arg1, arg2] = action.split(' ');
        if (command == 'Include') {
            let shop = arg1;
            shopList.push(shop);
        } else if (command == 'Visit') {
            let order = arg1;
            let number = Number(arg2);
            if (shopList.length >= number) {
                if (order == 'first') {
                    shopList = shopList.slice(number);
                } else if (order == 'last') {
                    shopList = shopList.slice(0, -number);
                }
            }
        } else if (command == 'Prefer') {
            let index1 = Number(arg1);
            let index2 = Number(arg2);
            if ((index1 >= 0 && index1 < shopList.length) &&
                (index2 >= 0 && index2 < shopList.length)) {
                let temp = shopList[index1];
                shopList[index1] = shopList[index2];
                shopList[index2] = temp;
            }
        } else if (command == 'Place') {
            let shop = arg1;
            let index = Number(arg2);
            if (index >= 0 && index < shopList.length) {
                shopList.splice(index + 1, 0, shop);
            }
        }
        action = input.shift();
    }
    console.log(`Shops left:\n${shopList.join(' ')}`);
}

shopping([
    'Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    '6',
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store 7',
    'Place ShoeAquarium 2'
  ]);