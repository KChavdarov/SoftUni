function triangleOfNumbers (arg1) {
    let n = Number(arg1);
    let printLine = "";
    for (let i = 1; i <= n; i++){
        for (j = 1; j <= i; j++){
            printLine += i + " ";
        }
        console.log(printLine);
        printLine = "";
    }
}

triangleOfNumbers (6);