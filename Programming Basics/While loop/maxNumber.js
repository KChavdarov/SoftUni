function maxNumber(input) {
    let index = 0;
    let maxCount = input[index];
    index++;
    let number = input[index];
    index++;
    let count = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (count < Number(maxCount)) {
        if (Number(number) > maxNumber) {
            maxNumber = number;
        }
        count++;
        number = input[index];
        index++;
    }
    console.log(maxNumber);
}
maxNumber(['2', '100', '99']);