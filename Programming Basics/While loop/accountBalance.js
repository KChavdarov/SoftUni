function accountBalance(input) {
    let index = 0;
    let maxCount = input[index];
    index++;
    let deposit = input[index];
    index++;
    let total = 0;
    let count = 0;
    while (count < maxCount) {
        if (Number(deposit) < 0) {
            console.log("Invalid operation!");
            break;
        }
        count++;
        total += Number(deposit);
        console.log(`Increase: ${(Number(deposit)).toFixed(2)}`);
        deposit = input[index];
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}