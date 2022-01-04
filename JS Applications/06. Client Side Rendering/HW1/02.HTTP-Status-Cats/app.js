import {cats} from './catSeeder.js';
import {html, render} from '../node_modules/lit-html/lit-html.js';
import {styleMap} from '../node_modules/lit-html/directives/style-map.js';

const liTemplate = (cat) => html`
        <li>
            <img src="./images/${cat.imageLocation}.jpg" alt="Card image cap" width="250" height="250">
            <div class="info">
                <button class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
                <div id="${cat.id}" class="status" style=${styleMap(cat.info ? {} : {display: 'none'})}>
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
            </div>
        </li>`;

function renderData() {
    cats.forEach(cat => cat.info = false);
    update();
}

function update() {
    const template = html`
    <ul @click=${onClick}>
        ${cats.map(liTemplate)};
    </ul>`;

    render(template, document.getElementById('allCats'));
}

function onClick(event) {
    if (event.target.classList.contains('showBtn')) {
        const elementId = event.target.parentNode.querySelector('.status').id;
        const cat = cats.find(c => c.id === elementId);
        cat.info = !cat.info;
        update(cats);
    }
}

renderData();