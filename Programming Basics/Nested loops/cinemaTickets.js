function cinemaTickets(input) {
    let index = 0;
    let movie = input[index];
    index++;
    let totalCount = 0;
    let movieCount = 0;
    let kidCount = 0;
    let studentCount = 0;
    let standardCount = 0;
    while (movie != 'Finish') {
        let capacity = Number(input[index]);
        index++;
        for (let i = 0; i < capacity; i++) {
            let ticket = input[index];
            index++;
            if (ticket == 'End') {
                break;
            }
            switch (ticket) {
                case "student":
                    studentCount++;
                    totalCount++;
                    break;
                case "standard":
                    standardCount++;
                    totalCount++;
                    break;
                case "kid":
                    kidCount++;
                    totalCount++;
                    break;
            }
            movieCount++;
        }
        console.log(`${movie} - ${((movieCount / capacity) * 100).toFixed(2)} %`);
        movieCount = 0;
        movie = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalCount}`);
    console.log(`${(studentCount / totalCount * 100).toFixed(2)}% student tickets`);
    console.log(`${(standardCount / totalCount * 100).toFixed(2)}% standard tickets`);
    console.log(`${(kidCount / totalCount * 100).toFixed(2)}% kid tickets`);
}

cinemaTickets([
    'Taxi',
    '10',
    'standard',
    'kid',
    'student',
    'student',
    'standard',
    'standard',
    'End',
    'Scary Movie',
    '6',
    'student',
    'student',
    'student',
    'student',
    'student',
    'student',
    'Finish'
]);

cinemaTickets([
'The Matrix',
'20',
'student',
'standard',
'kid',
'kid',
'student',
'student',
'standard',
'student',
'End',
'The Green Mile',
'17',
'student',
'standard',
'standard',
'student',
'standard',
'student',
'End',
'Amadeus',
'3',
'standard',
'standard',
'standard',
'Finish'
]);