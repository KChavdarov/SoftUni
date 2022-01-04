function addressBook(input) {
    let addressBook = {};
    for (const element of input) {
        let [name, address] = element.split(':');
        addressBook[name] = address;
    }

    let sorted = Object.keys(addressBook);
    sorted = sorted.sort((a, b) => a.localeCompare(b));

    for (const name of sorted) {
        console.log(`${name} -> ${addressBook[name]}`);
    }
    //     let sorted = Object.entries(addressBook);
    //     sorted = sorted.sort(([nameA,addressA],[nameB,addressB]) => nameA.localeCompare(nameB));

    //     for (const [name,address] of sorted) {
    //         console.log(`${name} -> ${address}`);
    //     }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);