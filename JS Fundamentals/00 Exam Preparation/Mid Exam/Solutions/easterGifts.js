function gifts(input) {
    let giftPlan = input.shift().split(' ');
    let action = input.shift();
    while (action != 'No Money') {
        let [command, item, index] = action.split(' ');
        if (command == 'OutOfStock') {
            giftPlan.forEach((gift, index) => {
                if (gift == item) {
                    giftPlan[index] = 'None';
                }
            });
        } else if (command == 'Required') {
            if (index >= 0 && index < giftPlan.length) {
                giftPlan[index] = item;
            }
        } else if (command == 'JustInCase') {
            giftPlan.pop();
            giftPlan.push(item);
        }
        action = input.shift();
    }
    giftPlan = giftPlan.filter(a => a != 'None');
    console.log(giftPlan.join(' '));
}
gifts([
    'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
]);