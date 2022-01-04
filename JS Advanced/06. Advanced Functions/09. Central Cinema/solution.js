function solve() {
    const onScreenBtn = document.querySelector('#container button');
    const inputs = Array.from(document.querySelectorAll('#container input'));
    const movieList = document.querySelector('#movies ul');
    const archiveList = document.querySelector('#archive ul');
    const clearBtn = document.querySelector('#archive>button');
    
    onScreenBtn.addEventListener('click', listMovie);
    clearBtn.addEventListener('click', () => archiveList.textContent = '');

    function listMovie(event) {
        event.preventDefault();
        let isValidInput = true;
        const [nameInp, hallInp, priceInp] = inputs;
        const name = nameInp.value;
        const hall = hallInp.value;
        const price = priceInp.value;
        if (name.length == 0) {
            isValidInput = false;
        }
        if (hall.length == 0) {
            isValidInput = false;
        }
        if (price.length == 0 || isNaN(Number(price))) {
            isValidInput = false;
        }

        if (isValidInput) {
            const onScreenLi = createElement('li',
                createElement('span', name),
                createElement('strong', `Hall: ${hall}`),
                createElement('div',
                    createElement('strong', Number(price).toFixed(2)),
                    createElement('input', ''),
                    createElement('button', 'Archive'))
            );
            const salesInp = onScreenLi.querySelector('div input');
            salesInp.placeholder = 'Tickets Sold';
            const archiveBtn = onScreenLi.querySelector('div button');
            inputs.forEach(i => i.value = '');
            movieList.appendChild(onScreenLi);
            archiveBtn.addEventListener('click', archiveMovie);

            function archiveMovie() {
                const sales = salesInp.value;
                if (sales.length > 0 && !isNaN(Number(sales))) {
                    const archiveLi = createElement('li',
                        createElement('span', name),
                        createElement('strong', `Total amount: ${(Number(sales) * Number(price)).toFixed(2)}`),
                        createElement('button', 'Delete')
                    );
                    onScreenLi.remove();
                    const deleteBtn = archiveLi.querySelector('button');
                    deleteBtn.addEventListener('click', () => archiveLi.remove());
                    archiveList.appendChild(archiveLi);
                }
            }
        }
    }
    function createElement(type, ...content) {
        const result = document.createElement(type);
        content.forEach(e => {
            if (typeof e == 'string') {
                let node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });
        return result;
    }
}
