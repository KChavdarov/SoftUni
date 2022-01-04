function letterSum(inputText, inputNumber, inputBudget) {
    let product = inputText;
    let controlNumber = Number(inputNumber);
    let budget = Number(inputBudget);
    let letterValue = 0;
    for (i = 0; i < product.length; i++) {
        let letter = product[i];
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
            letterValue += 3;
        } else {
            letterValue += 1;
        }
    }
    letterValue *= controlNumber;

    if (budget < letterValue) {
        console.log(`Cannot buy ${product}. Product Value: ${letterValue.toFixed(2)}`);
    } else {
        console.log(`${product} bought. Money left: ${(budget - letterValue).toFixed(2)}`);
    }
}
letterSum("apple", 2, 20);
letterSum("milk", 1.4, 8);
