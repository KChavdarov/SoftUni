function binaryConverter(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let multiplier = Number(num[i]);
        let exponent = num.length - 1 - i;
        sum += multiplier * Math.pow(2, exponent);
    }
    console.log(sum);
}

binaryConverter('11110000');