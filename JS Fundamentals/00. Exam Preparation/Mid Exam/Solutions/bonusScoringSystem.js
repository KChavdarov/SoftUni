function bonusScoring(input) {
    input = input.map(Number);
    let studentCount = input.shift();
    let lectures = input.shift();
    let additionalBonus = input.shift();
    let maxBonus = 0;
    let maxAttendances = 0;

    for (const studentAttendance of input) {
        let bonus = studentAttendance / lectures * (5 + additionalBonus);
        if(bonus > maxBonus){
            maxBonus = bonus;
            maxAttendances = studentAttendance;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}

bonusScoring([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);