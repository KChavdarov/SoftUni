function trainTheTrainers(input) {
    let index = 0;
    let evaluators = Number(input[index]);
    index++;
    let presentationName = input[index];
    index++;
    let gradeSum = 0;
    let finalGradeSum = 0;
    let gradeCount = 0;
    while (presentationName != "Finish") {
        for (let i = 1; i <= evaluators; i++) {
            let grade = Number(input[index]);
            index++;
            gradeSum += grade;
            gradeCount++;
        }
        let presentationAverage = (gradeSum / evaluators).toFixed(2);
        console.log(`${presentationName} - ${presentationAverage}.`);
        finalGradeSum += gradeSum;
        gradeSum = 0;
        presentationName = input[index];
        index++;
    }
    let finalGrade = (finalGradeSum / gradeCount).toFixed(2);
    console.log(`Student's final assessment is ${finalGrade}.`);
}
trainTheTrainers([
    '2', 'While-Loop',
    '6.00', '5.50',
    'For-Loop', '5.84',
    '5.66', 'Finish'
]);