function specialSumOfNumbers(inputStart, inputEnd, inputDivider) {
    let start = Number(inputStart);
    let end = Number(inputEnd);
    let divider = Number(inputDivider);
    let result = 0;

    for (i = start; i <= end; i++) {
        if (i % divider === 0) {
            result += i;
        }
    }
    console.log(result);
}
specialSumOfNumbers(10, 30, 7);