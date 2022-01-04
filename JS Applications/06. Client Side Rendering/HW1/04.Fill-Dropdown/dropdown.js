import {html, render} from '../node_modules/lit-html/lit-html.js';
import {styleMap} from '../node_modules/lit-html/directives/style-map.js';

const selectTemplate = (list) => html`
    <select id="menu">
        ${list.map(x => html`<option value="${x._id}">${x.text}</option>`)}
    </select>`;
let list = [];

async function solve() {
    initialize();
    document.querySelector('form').addEventListener('submit', onSubmit);
}

function onSubmit(event) {
    event.preventDefault();
    const town = document.getElementById('itemText').value;

    if (town === '') {
        return alert('Pls fill :/');
    }

    addItem(town);

    document.getElementById('itemText').value = '';
}

function update(data) {
    const div = document.querySelector('article div');
    const result = selectTemplate(data);
    render(result, div);
}

async function initialize() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await response.json();
    list = Object.values(data);
    update(list);
}

async function addItem(town) {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({text: town})
    });

    const data = await response.json();
    list.push(data);
    update(list);
}

solve();