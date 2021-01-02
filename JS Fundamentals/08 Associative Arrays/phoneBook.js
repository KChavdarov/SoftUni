function phonebook(input) {
    let phonebook = {};
    for (const element of input) {
        let [name, phone] = element.split(' ');
        phonebook[name] = phone;
    }
    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
}
phonebook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);