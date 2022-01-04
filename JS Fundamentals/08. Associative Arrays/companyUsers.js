function companyUsers(input) {
    let companies = {};

    for (const element of input) {
        let [company, user] = element.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }
        companies[company].add(user);
    }

    let sorted = Object.entries(companies).sort(([companyA, userA], [companyB, userB]) => companyA.localeCompare(companyB));

    for (const [company, users] of sorted) {
        console.log(company);
        for (const user of users) {
            console.log(`-- ${user}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);