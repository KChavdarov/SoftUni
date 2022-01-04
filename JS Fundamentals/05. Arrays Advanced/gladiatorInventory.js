function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    for (const instruction of arr) {
        let commands = instruction.split(' ');
        let command = commands[0];
        let item = commands[1];
        switch (command) {
            case 'Buy':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case 'Trash':
                if (inventory.includes(item)) {
                    inventory = inventory.filter(a => a !== item);
                }
                break;
            case 'Repair':
                if (inventory.includes(item)) {
                    inventory = inventory.filter(a => a !== item);
                    inventory.push(item);
                }
                break;
            case 'Upgrade':
                if (inventory.includes(item.split('-')[0])) {
                    let upgrade = item.split('-')[1];
                    item = item.split('-').shift();
                    let index = inventory.indexOf(item) + 1;
                    inventory.splice(index, 0, `${item}:${upgrade}`);
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
]);
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]);