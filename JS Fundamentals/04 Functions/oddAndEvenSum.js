function oddAndEvenSum(num) {
    let isEven = int => int % 2 == 0;
    let evenSum = 0;
    let oddSum = 0;
    let numAsStr = num + '';
    for (let index = 0; index < numAsStr.length; index++) {
        const element = Number(numAsStr[index]);
        if (isEven(element)) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);