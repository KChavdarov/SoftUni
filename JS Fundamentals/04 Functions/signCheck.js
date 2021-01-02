function signCheck(num1, num2, num3) {
    let isNegative = a => a < 0;
    let negativeCount = 0;

    if (isNegative(num1)) {
        negativeCount++;
    }
    if (isNegative(num2)) {
        negativeCount++;
    }
    if (isNegative(num3)) {
        negativeCount++;
    }

    if (num1 == 0 || num2 == 0 || num3 == 0 || negativeCount % 2 == 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

signCheck(0, 12, -15);