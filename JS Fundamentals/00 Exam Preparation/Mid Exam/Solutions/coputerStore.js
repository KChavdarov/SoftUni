function computerStore(input) {
    let customer = input.pop();
    input = input.map(Number);
    let order = 0;

    for (const element of input) {
        if (element > 0) {
            order += element;
        } else {
            console.log('Invalid price!');
        }
    }

    if (total(order, customer) == 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${order.toFixed(2)}$`);
        console.log(`Taxes: ${VAT(order).toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${total(order,customer).toFixed(2)}$`);
    }

    function VAT(order) {
        return order * 0.2;
    }

    function total(order, customer) {
        if (customer == 'regular') {
            return order + VAT(order);
        } else if (customer == 'special') {
            return (order + VAT(order)) * 0.9;
        }
    }
}

computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]);