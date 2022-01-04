class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }

    get shelfCapacity() {
        return this._shelfCapacity;
    }
    set shelfCapacity(value) {
        if (!['livingRoom', 'bedRoom', 'closet'].includes(this.room)) {
            throw new Error(`Cannot have book shelf in ${this.room}`);
        }
        this._shelfCapacity = value;
    }

    addBook(bookName, bookAuthor, genre) {
        const book = { bookName, bookAuthor, genre };
        if (this.shelf.length >= this.shelfCapacity) {
            this.shelf.shift();
        }
        this.shelf.push(book);
        this.shelf = this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
    }
    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(a => a.bookName != bookName);
    }
    showBooks(genre) {
        let filtered = this.shelf.filter(a => a.genre == genre);
        filtered = filtered.map(a => `\uD83D\uDCD6 ${a.bookAuthor} - "${a.bookName}"`);
        return [`Results for search "${genre}":`, ...filtered].join('\n');
    }
    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }
    toString() {
        if (this.shelf.length == 0) {
            return 'It\'s an empty shelf';
        }
        let summary = this.shelf.map(a => `\uD83D\uDCD6 "${a.bookName}" - ${a.bookAuthor}`);
        return [`"${this.shelfGenre}" shelf in ${this.room} contains:`, ...summary].join('\n');
    }
}

let livingRoom = new BookCollection('Programming', 'livingRoom', 5);
livingRoom.addBook('Introduction to Programming with C#', 'Svetlin Nakov');
livingRoom.addBook('Introduction to Programming with Java', 'Svetlin Nakov');
livingRoom.addBook('Programming for .NET Framework', 'Svetlin Nakov');
livingRoom.addBook('John Adams', 'David McCullough', 'history');
livingRoom.addBook('The Guns of August', 'Cuentos para pensar', 'history');
livingRoom.addBook('Paddle-to-the-Sea', 'Holling Clancy Holling');
livingRoom.throwAwayBook('Paddle-to-the-Sea');
console.log(livingRoom.toString());

// let garden = new BookCollection('Programming', 'garden');

// let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
// bedRoom.addBook('John Adams', 'David McCullough', 'history');
// bedRoom.addBook('The Guns of August', 'Cuentos para pensar', 'history');
// bedRoom.addBook('Atlas of Remote Islands', 'Judith Schalansky');
// bedRoom.addBook('Paddle-to-the-Sea', 'Holling Clancy Holling');
// console.log('Shelf\'s capacity: ' + bedRoom.shelfCondition);
// console.log(bedRoom.showBooks('history'));