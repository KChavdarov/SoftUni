function examPreparation(input) {
    let index = 0;
    let maxFails = Number(input[index]);
    index++;
    let exam = input[index];
    index++;
    let result = Number(input[index]);
    index++;
    let totalExams = 0;
    let passedExams = 0;
    let failedExams = 0;
    let resultSum = 0;
    let lastExam;
    let isFail = false;
    while (exam != "Enough" && (failedExams <= maxFails)) {
        if (result <= 4.00) {
            failedExams++;
            resultSum += result;
        } else {
            passedExams++;
            resultSum += result;
            lastExam = exam;
        }
        totalExams++;
        if (failedExams >= maxFails) {
            isFail = true;
            break;
        }
        exam = input[index];
        index++;
        result = Number(input[index]);
        index++;
    }
    if (isFail) {
        console.log(`You need a break, ${failedExams} poor grades.`);
    } else {
        console.log(`Average score: ${(resultSum / totalExams).toFixed(2)}`);
        console.log(`Number of problems: ${totalExams}`);
        console.log(`Last problem: ${lastExam}`);
    }
}
examPreparation(['4', 'Stone Age', '5', 'Freedom', '5', 'Storage', '3', 'Enough']);

function examPreparation2(input) {
    let index = 0;
    let maxFails = Number(input[index]);
    index++;
    let exam = input[index];
    index++;
    let result = Number(input[index]);
    index++;
    let totalExams = 0;
    let failedExams = 0;
    let resultSum = 0;
    let lastExam;
    let isFail = false;
    while (exam != "Enough") {
        totalExams++;
        resultSum += result;
        lastExam = exam;
        if (result <= 4){
            failedExams++;
        }
        if (failedExams >= maxFails){
            isFail = true;
            break;
        }
        exam = input[index];
        index++;
        result = Number(input[index]);
        index++;
    }
    if (isFail) {
        console.log(`You need a break, ${failedExams} poor grades.`);
    } else {
        console.log(`Average score: ${(resultSum / totalExams).toFixed(2)}`);
        console.log(`Number of problems: ${totalExams}`);
        console.log(`Last problem: ${lastExam}`);
    }
}
examPreparation2(['4', 'Stone Age', '5', 'Freedom', '5', 'Storage', '3', 'Enough']);