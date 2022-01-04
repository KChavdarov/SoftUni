function vacation(input) {
    let index = 0;
    let vacationCost = input[index];
    index++;
    let balance = Number(input[index]);
    index++;
    let action = input[index];
    index++;
    let amount = Number(input[index]);
    index++;
    let daycount = 0;
    let spendStreak = 0;
    while (vacationCost > balance && spendStreak < 5) {
        daycount++;
        switch (action) {
            case "spend":
                balance = Math.max(0, balance - amount);
                spendStreak++;
                break;
            case "save":
                balance += amount;
                spendStreak = 0;
                break;
        }
        action = input[index];
        index++;
        amount = Number(input[index]);
        index++;
    }

    if (spendStreak >= 5) {
        console.log("You can't save the money.");
        console.log(daycount);
    } else if (vacationCost <= balance) {
        console.log(`You saved the money for ${daycount} days.`);
    }
}
vacation([
    '250', '150',
    'spend', '50',
    'spend', '50',
    'save', '100',
    'save', '100'
]);