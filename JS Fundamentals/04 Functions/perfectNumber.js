function perfectNumber(number) {
    let aliquotSum = 1;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            aliquotSum += i;
        }
    }
    if (number == aliquotSum) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}

perfectNumber(6);