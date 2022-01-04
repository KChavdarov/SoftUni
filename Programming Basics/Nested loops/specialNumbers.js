function specialNumbers(input) {
    let number = input[0];
    let printLine = "";
    for (a = 1; a <= 9; a++) {
        if (number % a == 0) {
            for (b = 1; b <= 9; b++) {
                if (number % b == 0) {
                    for (c = 1; c <= 9; c++) {
                        if (number % c == 0){
                            for(d = 1; d <= 9; d++){
                                if(number % d == 0){
                                    printLine += a + "" + b + c + d + " ";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(printLine);
}
specialNumbers([7]);