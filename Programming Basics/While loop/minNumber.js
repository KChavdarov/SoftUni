function minNumber(input) {
    let index = 0;
    let maxCount = input[index];
    index++;
    let number = input[index];
    index++;
    let count = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (count < Number(maxCount)) {
        if (Number(number) < minNumber) {
            minNumber = number;
        }
        count++;
        number = input[index];
        index++;
    }
    console.log(minNumber);
}
minNumber(['2', '100', '99']);