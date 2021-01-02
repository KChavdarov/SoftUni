function deltaEvenOdd(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (const number of arr) {
        if (number % 2 == 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }
    console.log(sumEven - sumOdd);
}

deltaEvenOdd([1, 2, 3, 4, 5, 6]);