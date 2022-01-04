function printAndSum(arg1, arg2) {
    let start = Number(arg1);
    let end = Number(arg2);
    let printLine = "";
    let numberSum = 0;

    for (let i = start; i <= end; i++) {
        printLine += i + " ";
        numberSum +=i;
    }
    console.log(printLine);
    console.log(`Sum: ${numberSum}`);
}

printAndSum(5,10);