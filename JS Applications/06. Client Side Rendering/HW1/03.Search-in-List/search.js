import {html, render} from '../node_modules/lit-html/lit-html.js';
import {towns} from './towns.js';

function search() {
    let listItems = document.querySelectorAll('#towns>ul>li');
    let result = document.querySelector('#result');
    const input = document.querySelector('#searchText').value;

    for (const li of listItems) {
        li.style.fontWeight = 'normal';
        li.style.textDecoration = 'none';
    }

    let count = 0;

    for (const li of listItems) {
        if (li.textContent.includes(input)) {
            li.style.fontWeight = 'bold';
            li.style.textDecoration = 'underline';
            count++;
        }
    }

    result.textContent = count + ' matches found';
}

function renderData(data) {
    const template = html`
    <ul>
        ${data.map(town => html`<li>${town}</li>`)}
    </ul>`;

    render(template, document.getElementById('towns'));
}

function solve() {
    renderData(towns);
    document.querySelector('button').addEventListener('click', search);
}

solve();