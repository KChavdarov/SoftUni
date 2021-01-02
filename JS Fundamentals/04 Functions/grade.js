function grade(mark) {
    let description = '';
    let grade = 0;
    if (mark < 3){
        grade = 2.00;
        description = 'Fail';
    } else if (mark <3.5){
        grade = mark.toFixed(2);
        description = 'Poor';
    } else if (mark <4.5){
        grade = mark.toFixed(2);
        description = 'Good';
    } else if (mark <5.5){
        grade = mark.toFixed(2);
        description = 'Very good';
    } else {
        grade = mark.toFixed(2);
        description = 'Excellent';
    }
    console.log(`${description} (${grade})`);
}