function steps(input) {
    let index = 0;
    let steps = input[index];
    index++;
    let totalSteps = 0;

    while (totalSteps < 10000) {
        totalSteps += steps;
        steps = input[index];
        index++;
        if (steps == "Going home") {
            steps = input[index];
            index++;
            totalSteps += steps;
            break;
        }
    }
    if (totalSteps < 10000) {
        console.log(`${10000-totalSteps} more steps to reack goal.`);
    } else {
        console.log(`Goal reached! Good job!`);
    }
}

steps([1000, 1500, 2000, 6500]);