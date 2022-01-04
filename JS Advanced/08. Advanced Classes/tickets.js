function tickets(data, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static sortTickets(tickets, criteria) {
            const sorting = {
                price() {
                    return tickets.sort((ticketA, ticketB) => ticketA[criteria] - ticketB[criteria]);
                },
                destination() {
                    return tickets.sort((ticketA, ticketB) => ticketA[criteria].localeCompare(ticketB[criteria]));
                },
                status() {
                    return tickets.sort((ticketA, ticketB) => ticketA[criteria].localeCompare(ticketB[criteria]));
                }
            };
            return sorting[criteria]();
        }
    }
    return Ticket.sortTickets(data.map(a => new Ticket(...(a.split('|')))), criteria);
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
));