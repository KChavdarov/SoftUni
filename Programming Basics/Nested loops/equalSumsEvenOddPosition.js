function equalSumsEvenOddPosition(input) {
    let minNumber = Number(input[0]);
    let maxNumber = Number(input[1]);
    let printLine = "";
    for (number = minNumber; number <= maxNumber; number++) {
        let sumEven = 0;
        let sumOdd = 0;
        number += "";
        for (index = 0; index < 6; index++) {
            if (index % 2 == 0) {
                sumEven += Number(number[index]);
            } else {
                sumOdd += Number(number[index]);
            }
        }
        if (sumEven == sumOdd) {
            printLine += number + " ";
        }
    }
    console.log(printLine);
}
equalSumsEvenOddPosition([100000, 100050]);