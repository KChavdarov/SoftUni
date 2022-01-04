class PaymentManager {
    constructor(title) {
        this.title = title;
    }

    render(target) {
        const targetElement = document.getElementById(target);

        const table = createElement('table', [], createElement('caption', [], `${this.title} Payment Manager`));

        const thead = createElement('thead', [],
            createElement('tr', [],
                createElement('th', ['class=name'], 'Name'),
                createElement('th', ['class=category'], 'Category'),
                createElement('th', ['class=price'], 'Price'),
                createElement('th', [], 'Actions')
            )
        );

        const tbody = createElement('tbody', ['class=payments']);

        const tfoot = createElement('tfoot', ['class=input-data'],
            createElement('tr', [],
                createElement('td', [], createElement('input', ['name=name', 'type=text'], '')),
                createElement('td', [], createElement('input', ['name=category', 'type=text'], '')),
                createElement('td', [], createElement('input', ['name=price', 'type=number'], '')),
                createElement('td', [], createElement('button', [], 'Add'))
            )
        );
        const inputs = Array.from(tfoot.getElementsByTagName('input'));
        tfoot.querySelector('button').addEventListener('click', createEntry);

        table.appendChild(thead);
        table.appendChild(tbody);
        table.appendChild(tfoot);
        targetElement.appendChild(table);

        function createEntry(event) {
            const [name, category, price] = inputs;
            if (inputs.every(a => a.value != '')) {
                const newRow = createElement('tr', [],
                    createElement('td', [], name.value),
                    createElement('td', [], category.value),
                    createElement('td', [], `${Number(price.value)}`),
                    createElement('td', [], createElement('button', [], 'Delete'))
                );
                newRow.querySelector('button').addEventListener('click', () => { newRow.remove(); });

                tbody.appendChild(newRow);
                inputs.forEach(a => a.value = '');
            }
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
}