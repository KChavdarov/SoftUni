function library(input) {
    let books = input.shift().split('&');
    let action = input.shift();

    while (action != 'Done') {
        let [command, book1, book2] = action.split(' | ');
        if (command == 'Add Book') {
            if (!books.includes(book1)) {
                books.unshift(book1);
            }
        } else if (command == 'Take Book') {
            books = books.filter(a => a != book1);
        } else if (command == 'Swap Books') {
            if (books.includes(book1) && books.includes(book2)) {
                let index1 = books.indexOf(book1);
                let index2 = books.indexOf(book2);
                temp1 = book1;
                temp2 = book2;
                books[index1] = temp2;
                books[index2] = temp1;
            }
        } else if (command == 'Insert Book') {
            books.push(book1);
        } else if (command == 'Check Book'){
            let index = book1;
            if (index > 0 && index < books.length) {
                console.log(books[index]);
            }
        }
        action = input.shift();
    }
    console.log(books.join(', '));
}
library([
    "Don Quixote&The Great Gatsby&Moby Dick&Hamlet",
    "Add Book | The Odyssey",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Check Book | 3",
    "Done"
]);