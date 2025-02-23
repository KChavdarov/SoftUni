import { render, html } from './node_modules/lit-html/lit-html.js';
import { styleMap } from './node_modules/lit-html/directives/style-map.js';
import { cats } from './catSeeder.js';


const listTemplate = (cats) => html`
<ul @click =${toggleInfo}>${cats.map(cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">${cat.isVisible ? 'Hide' : 'Show'} status code</button>
            <div class="status" style=${styleMap({ display: cat.isVisible ? 'block' : 'none' })} id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`)}
</ul>`;

function toggleInfo(event) {
    if (event.target.tagName == 'BUTTON') {
        const statusDiv = event.target.parentElement.querySelector('div.status');
        const catId = statusDiv.id;
        const cat = cats.find(cat => cat.id == catId);
        cat.isVisible = !cat.isVisible;
        render(listTemplate(cats), root);
    }
}

const root = document.getElementById('allCats');
cats.forEach(cat => cat.isVisible = false);
render(listTemplate(cats), root);



// import { render, html } from './node_modules/lit-html/lit-html.js';
// import { styleMap } from './node_modules/lit-html/directives/style-map.js';
// import { cats } from './catSeeder.js';


// const listTemplate = (cats) => html`
// <ul @click=${toggleInfo}>${cats.map(c => html`
//     <li>
//         <img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
//         <div class="info">
//             <button class="showBtn">${c.show ? 'Hide' : 'Show'} status code</button>
//             <div class="status" style=${styleMap(c.show ? { display: 'block' } : { display: 'none' })} id="${c.id}">
//                 <h4>Status Code: ${c.statusCode}</h4>
//                 <p>${c.statusMessage}</p>
//             </div>
//         </div>
//     </li>`)}
// </ul>`;

// const main = document.getElementById('allCats');
// cats.forEach(c => c.show = false);
// render(listTemplate(cats), main);

// function toggleInfo(event) {
//     if (event.target.tagName == 'BUTTON') {
//         const button = event.target;
//         const statusDiv = button.parentNode.querySelector('.status');
//         const id = statusDiv.id;

//         const cat = cats.find(a => a.id == id);
//         cat.show = !cat.show;
//         render(listTemplate(cats), main);
//     }

//     // if (event.target.tagName == 'BUTTON') {
//     //     const button = event.target;
//     //     const statusDiv = button.parentNode.querySelector('.status');
//     //     if (statusDiv.style.display == 'none') {
//     //         event.target.textContent = 'Hide status code';
//     //         statusDiv.style.display = 'block';
//     //     } else {
//     //         event.target.textContent = 'Show status code';
//     //         statusDiv.style.display = 'none';
//     //     }
//     // }
// }