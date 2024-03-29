import {
    html,
    render
} from './node_modules/lit-html/lit-html.js'

const selectTemplate = (list) => html `
 <select id="menu">
        ${list.map(x => html `<option value=${x._id}>${x.text}</option>`)} 
 </select>`;

const main = document.querySelector('div');
const input = document.getElementById('itemText');
initialize()


async function initialize() {
    document.querySelector('form').addEventListener('submit', (event) => addItem(event, list))

    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await response.json();
    const list = Object.values(data);

    update(list);
}


function update(list) {
    const result = selectTemplate(list);
    render(result, main)
}

async function addItem(event, list) {
    event.preventDefault();

    const item = {
        'text': input.value
    }
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });

    const result = await response.json();
    list.push(result);

    update(list);
    input.value = '';
}
