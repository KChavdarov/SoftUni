function inventory(input) {
    let inventory = input.shift();
    inventory = inventory.split(', ');
    let turn = input.shift();

    while (turn != 'Craft!') {
        let action = turn.split(' - ');
        let command = action[0];
        switch (command) {
            case 'Collect': {
                let item = action[1];
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
            }
            break;
        case 'Drop': {
            let item = action[1];
            inventory = inventory.filter(a => a != item);
            break;
        }
        case 'Combine Items': {
            let items = action[1].split(':');
            let [oldItem, newItem] = items;
            if (inventory.includes(oldItem)) {
                inventory.splice(inventory.indexOf(oldItem), 1, oldItem,newItem);
            }
        }
        break;
        case 'Renew': {
            let item = action[1];
            if (inventory.includes(item)) {
                inventory = inventory.filter(a => a != item);
                inventory.push(item);
            }
        }
        break;
        }
        turn = input.shift();
    }
    console.log(inventory.join(', '));
}

inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);