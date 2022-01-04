import {html, render} from './node_modules/lit-html/lit-html.js';

function onClick() {
    const input = getInput();
    const listTemplate = (data) => html`
    <ul>
        ${data.map(t => html`<li>${t}</li>`)}
    </ul>`;
    render(listTemplate(input), document.getElementById('root'));
}

function getInput() {
    return  document.querySelector('input').value.split(', ');
}

function solve() {
    document.getElementById('btnLoadTowns').addEventListener('click', onClick);
}

solve();