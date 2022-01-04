function password(input) {
    let index = 0;
    let userName = input[index];
    index++;
    let correctPassword = input[index];
    index++;
    let userPassword = input[index];
    index++;

    while (userPassword != correctPassword) {
        userPassword = input[index];
        index++;
    }
    console.log(`Welcome ${userName}!`);
}
password(['Nakov', 1234, 'pass', 1324, 1234]);