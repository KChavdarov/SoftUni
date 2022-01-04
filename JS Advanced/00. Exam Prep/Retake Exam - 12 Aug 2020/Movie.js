class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.soldTickets = 0;
        this.profit = 0;
    }

    newScreening(date, hall, description) {
        if (this.screenings.some(a => a.date == date && a.hall == hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        this.screenings.push({ date, hall, description });
        return `New screening of ${this.movieName} is added.`;
    };

    endScreening(date, hall, soldTickets) {
        const screening = this.screenings.find(a => a.date == date && a.hall == hall);
        if (screening == undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }
        let profit = this.ticketPrice * soldTickets;
        this.profit += profit;
        this.soldTickets += soldTickets;
        this.screenings = this.screenings.filter(a => a !== screening);
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${profit}`;
    };

    toString() {
        const output = [`${this.movieName} full information:`, `Total profit: ${this.profit.toFixed(0)}$`, `Sold Tickets: ${this.soldTickets}`];
        if (this.screenings.length > 0) {
            output.push('Remaining film screenings:');
            let sorted = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
            sorted.forEach((a) => {
                output.push(`${a.hall} - ${a.date} - ${a.description}`);
            });
        } else {
            output.push('No more screenings!');
        }
        return output.join('\n');
    };
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', '3D'));
console.log(m.newScreening('October 3, 2020', 'Main', 'regular'));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', '3D'));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 10, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

// m.newScreening('October 4, 2020', '235', 'regular');
// m.newScreening('October 5, 2020', 'Main', 'regular');
// m.newScreening('October 3, 2020', '235', 'regular');
// m.newScreening('October 4, 2020', 'Main', 'regular');
// console.log(m.toString());
