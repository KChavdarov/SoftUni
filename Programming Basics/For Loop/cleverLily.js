function cleverLily(inputAge, inputWashingMachine, inputToyPrice) {
    let maxAge = Number(inputAge);
    let washingMachine = Number(inputWashingMachine);
    let toyPrice = Number(inputToyPrice);
    let toyCount = 0;
    let moneySaved = 0;
    let lastMoneyPresent = 0;

    for (let age = 1; age <= maxAge; age++) {
        if (age % 2 !== 0) {
            toyCount++;
        } else {
            moneySaved += lastMoneyPresent + 9;
            lastMoneyPresent += 10;
        }
    }
    moneySaved += toyCount * toyPrice;
    let difference = (Math.abs(moneySaved - washingMachine)).toFixed(2);
    if (moneySaved < washingMachine) {
        console.log(`No! ${difference}`);
    } else {
        console.log(`Yes! ${difference}`);
    }
}
cleverLily(10, 170, 6);