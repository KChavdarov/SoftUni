function passwordGenerator(input) {
    let wordOne = input.shift().toLowerCase();
    let wordTwo = input.shift().toLowerCase();
    let wordThree = input.shift().toUpperCase();
    let vowels = ['a', 'o', 'i', 'u', 'e'];
    let password = wordOne + wordTwo;
    password = password.split('');
    let count = 0;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (vowels.includes(char)) {
            password[i] = wordThree[count % wordThree.length];
            count++;
        }
    }
    password = password.reverse().join('');
    console.log(`Your generated password is ${password}`);
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);