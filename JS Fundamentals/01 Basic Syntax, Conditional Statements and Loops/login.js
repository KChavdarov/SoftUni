function login(input) {
    let index = 0;
    let user = input[index];
    index++;
    let correctPassword = '';

    for (let i = user.length - 1; i >= 0; i--) {
        correctPassword += user[i];
    }

    let attempt = 0;
    let password = input[index];
    index++;

    while (password !== correctPassword) {
        console.log('Incorrect password. Try again.');
        attempt++;
        if (attempt > 4) {
            console.log(`User ${user} blocked!`);
        }
        password = input[index];
        index++;
    }

    if (password == correctPassword) {
        console.log(`User ${user} logged in.`);
    }
}

// login([
//     'Acer',
//     'logingo',
//     'let me in',
//     'recA'
// ]);

function login2(input) {
    let index = 0;
    let user = input[index];
    index++;
    let correctPassword = user.split("").reverse().join("");
    let attempt = 1;

    for (index; index < input.length; index++){
        let password = input[index];
        if (attempt == 4) {
            console.log(`User ${user} blocked!`);
        } else if (password == correctPassword){
            console.log(`User ${user} logged in.`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
            attempt++;
        }
    }
}

login2([
'sunny',
'rainy',
'cloudy',
'sunny',
'not sunny'
]);