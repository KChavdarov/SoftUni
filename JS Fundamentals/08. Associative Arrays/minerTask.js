function minerTask(input) {
    let inventory = {};
    for (let i = 0; i < input.length; i += 2) {
        const resource = input[i];
        const amount = Number(input[i + 1]);
        if (!inventory.hasOwnProperty(resource)) {
            inventory[resource] = 0;
        }
        inventory[resource] += amount;
    }
    for (const [resource, amount] of Object.entries(inventory)) {
        console.log(`${resource} -> ${amount}`);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);