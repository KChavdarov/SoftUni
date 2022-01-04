function solve() {
    const [nameInp, hallInp, ticketPriceInp] = document.querySelectorAll('#container input');
    const moviesSection = document.getElementById('movies');
    const archiveSection = document.getElementById('archive');

    document.querySelector('#container button').addEventListener('click', addMovie);
    document.querySelector('#archive > button').addEventListener('click', clear);

    function addMovie(event) {
        event.preventDefault();
        let [name, hall, ticketPrice] = [nameInp, hallInp, ticketPriceInp].map(a => a.value);
        if ([name, hall, ticketPrice].every(a => a != '') && !isNaN(Number(ticketPrice))) {
            const newMovie = createElement('li', [],
                createElement('span', [], name),
                createElement('strong', [], `Hall: ${hall}`),
                createElement('div', [],
                    createElement('strong', [], Number(ticketPrice).toFixed(2)),
                    createElement('input', ['placeholder=Tickets Sold'], ''),
                    createElement('button', [], 'Archive')
                )
            );

            const ticketsSold = newMovie.querySelector('input');
            newMovie.addEventListener('click', buttonActions);
            moviesSection.querySelector('ul').appendChild(newMovie);
            [nameInp, hallInp, ticketPriceInp].forEach(a => a.value = '');


            function buttonActions(event) {
                if (event.target.tagName = 'BUTTON') {
                    const button = event.target;
                    if (button.textContent == 'Archive' && ticketsSold.value != '' && typeof Number(ticketsSold.value) == 'number' && !isNaN(Number(ticketsSold.value))) {
                        let totalPrice = ticketPrice * ticketsSold.value;
                        newMovie.querySelector('strong').textContent = `Total amount: ${totalPrice.toFixed(2)}`;
                        newMovie.querySelector('div').remove();
                        newMovie.appendChild(createElement('button', [], 'Delete'));
                        archiveSection.querySelector('ul').appendChild(newMovie);
                    }
                    if (event.target.textContent == 'Delete') {
                        newMovie.remove();
                    }
                }
            }
        }
    }

    function clear() {
        archiveSection.querySelector('ul').textContent = '';
    }

    function createElement(type, attributes = [], ...content) {
        const result = document.createElement(type);
        if (attributes.length > 0) {
            attributes.forEach(attr => {
                let [attribute, value] = attr.split('=');
                result.setAttribute(attribute, value);
            });
        } content.forEach(e => {
            if (typeof e == 'string') {
                let text = document.createTextNode(e);
                result.appendChild(text);
            } else {
                result.appendChild(e);
            }
        });
        return result;
    }
}