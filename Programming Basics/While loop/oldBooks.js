function oldBooks(input) {
    let index = 0;
    let favoriteBook = input[index];
    index++;
    let library = Number(input[index]);
    index++;
    let book = input[index];
    index++;
    let count = 0;
    let isFound = false;

    while (count < library) {
        if (book == favoriteBook) {
            console.log(`You checked ${count} books and found it.`);
            isFound = true;
            break;
        }
        count++;
        book = input[index];
        index++;
    }
    if (!isFound) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count} books.`);
    }
}
oldBooks([
    'Bourne', '32',
    'True Story', 'Forever',
    'More Space', 'The Girl',
    'Spaceship', 'Strongest',
    'Profit', 'Tripple',
    'Stella', 'The Matrix',
    'Bourne'
]);