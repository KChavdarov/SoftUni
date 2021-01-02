function softUniBar(input) {
    let command = input.shift();
    let total = 0;
    while (command != 'end of shift') {
        let pattern = /(%(?<name>[A-Z][a-z]+)%)[^\|\$\%\.]*(<(?<product>\w+)>)[^\|\$\%\.]*(\|(?<quantity>\d+)\|)[^\|\$\%\.]*?((?<price>\d+(?:\.\d+)?)\$)/gm;
        let match = pattern.exec(command);
        if (match) {
            let customer = match.groups.name;
            let product = match.groups.product;
            let quantity = Number(match.groups.quantity);
            let price = Number(match.groups.price);
            let totalPrice = price * quantity;
            total += totalPrice;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
        command = input.shift();
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
softUniBar(['asdagkjhadfgaull',
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);