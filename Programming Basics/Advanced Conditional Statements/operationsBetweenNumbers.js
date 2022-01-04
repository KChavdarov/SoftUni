function operationBetweenNumbers(n1, n2, operationInput) {
    let numberA = Number(n1);
    let numberB = Number(n2);
    let operation = operationInput;
    let result;
    if (numberB === 0) {
        console.log(`Cannot divide ${numberA} by zero`);
    } else if (operation === "+" || operation === "-" || operation === "*") {
        switch (operation) {
            case "+":
                result = numberA + numberB;
                break;
            case "-":
                result = numberA - numberB;
                break;
            case "*":
                result = numberA * numberB;
                break;
        }
        let resultType;
        if (result % 2 === 0) {
            resultType = "even";
        } else {
            resultType = "odd";
        }
        console.log(`${numberA} ${operation} ${numberB} = ${result} - ${resultType}`);
    } else if (operation === "/"){
        result = numberA / numberB;
        console.log(`${numberA} / ${numberB} = ${result.toFixed(2)}`);
    } else if (operation === "%"){
        result = numberA % numberB;
        console.log(`${numberA} % ${numberB} = ${result}`);
    }
}
operationBetweenNumbers (123,12,"/");