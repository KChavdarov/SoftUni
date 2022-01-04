function lotaryStatistics(input) {
    let number = Number(input);
    let oddSingleDigitNumber = 0;
    let evenNumbers = 0;
    let oddNumbersEndingIn7 = 0;
    let dividersOf100 = 0;

    for (i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            evenNumbers++;
        } else {
            if (i <= 9) {
                oddSingleDigitNumber++;
            }
            if (i % 10 === 7) {
                oddNumbersEndingIn7++;
            }
        }
        if (100 % i === 0) {
            dividersOf100++;
        }
    }
    oddSingleDigitNumber = oddSingleDigitNumber / number * 100;
    evenNumbers = evenNumbers / number * 100;
    oddNumbersEndingIn7 = oddNumbersEndingIn7 / number * 100;
    dividersOf100 = dividersOf100 / number * 100;

    console.log(oddSingleDigitNumber.toFixed(2) + "%");
    console.log(evenNumbers.toFixed(2) + "%");
    console.log(oddNumbersEndingIn7.toFixed(2) + "%");
    console.log(dividersOf100.toFixed(2) + "%");
}
lotaryStatistics(49);