function furniture(input) {
    let results = 'Bought furniture:\n';
    let total = 0;

    for (const line of input) {
        let pattern = /^>>(?<item>[a-zA-Z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)$/;
        let match = pattern.exec(line);
        if (match) {
            results += match.groups.item + '\n';
            total += Number(match.groups.price) * Number(match.groups.quantity);
        }
    }
    results += `Total money spend: ${total.toFixed(2)}`;
    console.log(results);

    // let command = input.shift();
    // let items = [];
    // let total = 0;
    // while (command != 'Purchase') {
    //     let pattern = />>(?<item>[a-zA-Z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;
    //     let isValid = pattern.test(command);
    //     if (isValid) {
    //         pattern = />>(?<item>[a-zA-Z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;
    //         let match = pattern.exec(command);
    //         items.push(match.groups.item);
    //         total += Number(match.groups.price) * Number(match.groups.quantity);
    //     }
    //     command = input.shift();
    // }
    // console.log('Bought furniture:');
    // if (items.length > 0) {
    //     console.log(items.join('\n'));
    // }
    // console.log(`Total money spend: ${total.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);