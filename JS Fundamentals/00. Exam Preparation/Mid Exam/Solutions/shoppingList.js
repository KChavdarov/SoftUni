function shoppingList(input) {
    let list = input.shift().split('!');
    let action = input.shift();

    while (action != 'Go Shopping!') {
        let [command, product1, product2] = action.split(' ');
        switch (command) {
            case 'Urgent':
                if (!list.includes(product1))
                    list.unshift(product1);
                break;
            case 'Unnecessary':
                list = list.filter(a => a != product1);
                break;
            case 'Correct':
                if (list.includes(product1)) {
                    let index = list.indexOf(product1);
                    list.splice(index, 1, product2);
                }
                break;
            case 'Rearrange':
                if (list.includes(product1)) {
                    list = list.filter(a => a != product1);
                    list.push(product1);
                }
        }
        action = input.shift();
    }
    console.log(list.join(', '));
}
shoppingList([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
]);