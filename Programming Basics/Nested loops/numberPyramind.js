function numberPyramid(input) {
    let number = Number(input[0]);
    let printLine = "";
    let currentNumber = 1;
    let isBigger = false;

    for (let rows = 1; rows <= number; rows++) {
        for (columns = 1; columns <= rows; columns++) {
            if (currentNumber > number) {
                isBigger = true;
                break;
            }
            printLine += currentNumber + " ";
            currentNumber++;
        }
        console.log(printLine);
        printLine = "";
        if (isBigger) {
            break;
        }
    }
}
numberPyramid([7]);