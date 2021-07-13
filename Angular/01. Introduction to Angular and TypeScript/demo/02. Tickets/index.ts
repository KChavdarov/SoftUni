class Ticket {
    destination: string
    price: number
    status: string

    constructor(destination: string, price: number, status: string) {
        this.destination = destination
        this.price = price
        this.status = status
    }
}

function ticket(summaries: string[], sort: 'destination' | 'price' | 'status') {
    const tickets = summaries.map(s => {
        const [destination, price, status] = s.split('|');

        return new Ticket(destination, +price, status);
    })

    return tickets.sort((a, b) => {
        if (sort !== 'price') {
            return a[sort].localeCompare(b[sort])
        } else {
            return a[sort] - b[sort];
        }
    });
}

// console.log(ticket([
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'
// ],
//     'destination'
// ));

console.log(ticket([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status'
));


