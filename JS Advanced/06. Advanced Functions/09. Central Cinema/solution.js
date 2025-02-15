// function solve() {
//     const onScreenBtn = document.querySelector('#container button');
//     const inputs = Array.from(document.querySelectorAll('#container input'));
//     const movieList = document.querySelector('#movies ul');
//     const archiveList = document.querySelector('#archive ul');
//     const clearBtn = document.querySelector('#archive>button');

//     onScreenBtn.addEventListener('click', listMovie);
//     clearBtn.addEventListener('click', () => archiveList.textContent = '');

//     function listMovie(event) {
//         event.preventDefault();
//         let isValidInput = true;
//         const [nameInp, hallInp, priceInp] = inputs;
//         const name = nameInp.value;
//         const hall = hallInp.value;
//         const price = priceInp.value;
//         if (name.length == 0) {
//             isValidInput = false;
//         }
//         if (hall.length == 0) {
//             isValidInput = false;
//         }
//         if (price.length == 0 || isNaN(Number(price))) {
//             isValidInput = false;
//         }

//         if (isValidInput) {
//             const onScreenLi = createElement('li',
//                 createElement('span', name),
//                 createElement('strong', `Hall: ${hall}`),
//                 createElement('div',
//                     createElement('strong', Number(price).toFixed(2)),
//                     createElement('input', ''),
//                     createElement('button', 'Archive'))
//             );
//             const salesInp = onScreenLi.querySelector('div input');
//             salesInp.placeholder = 'Tickets Sold';
//             const archiveBtn = onScreenLi.querySelector('div button');
//             inputs.forEach(i => i.value = '');
//             movieList.appendChild(onScreenLi);
//             archiveBtn.addEventListener('click', archiveMovie);

//             function archiveMovie() {
//                 const sales = salesInp.value;
//                 if (sales.length > 0 && !isNaN(Number(sales))) {
//                     const archiveLi = createElement('li',
//                         createElement('span', name),
//                         createElement('strong', `Total amount: ${(Number(sales) * Number(price)).toFixed(2)}`),
//                         createElement('button', 'Delete')
//                     );
//                     onScreenLi.remove();
//                     const deleteBtn = archiveLi.querySelector('button');
//                     deleteBtn.addEventListener('click', () => archiveLi.remove());
//                     archiveList.appendChild(archiveLi);
//                 }
//             }
//         }
//     }
//     function createElement(type, ...content) {
//         const result = document.createElement(type);
//         content.forEach(e => {
//             if (typeof e == 'string') {
//                 let node = document.createTextNode(e);
//                 result.appendChild(node);
//             } else {
//                 result.appendChild(e);
//             }
//         });
//         return result;
//     }
// }


function solve() {
    let [nameInput, hallInput, priceInput, addBtn] = document.getElementById('container').children;
    let movies = document.getElementById('movies').querySelector('ul');
    let archive = document.getElementById('archive').querySelector('ul');
    let clearBtn = archive.parentElement.querySelector('button');

    addBtn.addEventListener('click', listMovie);
    clearBtn.addEventListener('click', () => archive.innerHTML = '');

    function listMovie(event) {
        event.preventDefault();
        let [name, hall, price] = [nameInput, hallInput, priceInput].map(a => a.value);
        price = Number(price);
        if ([name, hall, price].every(a => a)) {
            createMovieItem({ name, hall, price })
        }
        [nameInput, hallInput, priceInput].forEach(a => a.value = '');
    }

    function createMovieItem(movie) {
        let movieItem = createElement('li');
        let title = createElement('span', movie.name, ['name']);
        let hall = createElement('strong', `Hall: ${movie.hall}`, ['hall']);
        let div = createElement('div');
        let price = createElement('strong', movie.price.toFixed(2), ['price']);
        let sales = createElement('input', null, ['sales']);
        sales.addEventListener('change', () => { archiveBtn.disabled = !Number(sales.value) });
        sales.placeholder = 'Tickets sold'
        let archiveBtn = createElement('button', 'Archive');
        archiveBtn.disabled = true;
        archiveBtn.addEventListener('click', archiveMovie);
        movieItem.appendChild(title);
        movieItem.appendChild(hall);
        movieItem.appendChild(div);
        div.appendChild(price);
        div.appendChild(sales);
        div.appendChild(archiveBtn);
        movies.appendChild(movieItem);

        function archiveMovie() {
            movieItem.remove();
            let archiveItem = createElement('li');
            let total = createElement('strong', `Total Amount: ${(Number(sales.value) * movie.price).toFixed(2)}`);
            let deleteBtn = createElement('button', 'Delete');
            deleteBtn.addEventListener('click', () => archiveItem.remove());
            archiveItem.appendChild(title);
            archiveItem.appendChild(total);
            archiveItem.appendChild(deleteBtn);
            archive.appendChild(archiveItem);
        }
    }

    function createElement(type, text, classes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        classes.forEach(className => {
            element.classList.add(className)
        });
        return element;
    }
}