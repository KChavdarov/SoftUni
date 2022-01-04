function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let grade = input[index];
    index++;
    let schoolyear = 1;
    let greadeSum = 0;
    let failcount = 0;
    while (schoolyear <= 12) {
        if (failcount > 1) {
            console.log(`${name} has been excluded at ${schoolyear} grade`);
            break;
        }
        if (grade < 4.00) {
            grade = input[index];
            index++;
            failcount++;
            continue;
        }
        greadeSum += Number(grade);
        schoolyear++;
        grade = input[index];
        index++;
    }
    if (failcount <= 1) {
        console.log(`${name} graduated. Average grade: ${(greadeSum / 12).toFixed(2)}`);
    }
}

graduation([
    'Pesho', '3', '5.5',
    '6', '5.43', '4.5',
    '6', '5.55', '5',
    '6', '6', '2', '5.43',
    '5', '6', '5'
]);