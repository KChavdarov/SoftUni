function scholarship(incomeAsString, gradeAsString, minimumWageAsString) {
    let income = Number(incomeAsString);
    let grade = Number(gradeAsString);
    let minimumWage = Number(minimumWageAsString);
    let SocialGrant = 0;
    let StudentScholarship = 0;
    if (grade >= 4.5) {
        if (income <= minimumWage) {
            SocialGrant += minimumWage * 0.35;
        }
        if (grade >= 5.5) {
            StudentScholarship += grade * 25;
        }
    }
    if (SocialGrant > StudentScholarship) {
        SocialGrant = Math.floor(SocialGrant);
        console.log(`You get a Social scholarship ${SocialGrant} BGN`);
    } else if (StudentScholarship > SocialGrant) {
        StudentScholarship = Math.floor(StudentScholarship);
        console.log(`You get a scholarship for excellent results ${StudentScholarship} BGN`);
    } else {
        console.log("You cannot get a scholarship!");
    }
}
scholarship(300, 5.65, 420);