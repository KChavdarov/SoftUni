function savings(input) {
    let income = Number(input[0]);
    let months = Number(input[1]);
    let expenditure = Number(input[2]);
    let monthlySavings = ((income * 0.7 - expenditure) / income) * 100;
    let totalSavings = (income * 0.7 - expenditure) * months;
    console.log(`She can save ${monthlySavings.toFixed(2)}%`);
    console.log(totalSavings.toFixed(2));
}
savings([1500, 3, 800]);