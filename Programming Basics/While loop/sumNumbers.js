function sumNumbers(input) {
    let index = 0;
    let number = input[index];
    index++;
    let sum = 0;
    while (number != "Stop") {
        sum += (Number(number));
        number = input[index];
        index++;
    }
    console.log(sum);
}
sumNumbers(['10', '20', '30', '45', 'Stop']);