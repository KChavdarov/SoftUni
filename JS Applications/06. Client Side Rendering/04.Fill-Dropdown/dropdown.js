import { html, render } from './node_modules/lit-html/lit-html.js';

let list = [];
initialize();


async function createTown(text) {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ text })
    });
    return await response.json();
}

async function getTowns() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await response.json();
    return data;
}

const optionTemplate = (unit) => html `
<option .value=${unit._id}>${unit.text}</option>`;

const articleTemplate = (data) => html `
    <h1>Dropdown Menu</h1>
    <article>
        <div>
            <select id="menu">
                ${data.map(optionTemplate)}
            </select>
        </div>
        <form @submit=${onSubmit}>
            <label for="itemText">
                Text:
            </label>
            <input type="text" id="itemText" />
            <input type="submit" value="Add">
        </form>
    </article>`;

async function onSubmit(event) {
    event.preventDefault();
    const text = event.target.querySelector('#itemText').value;
    if (text == '') {
        return alert('Please enter text');
    }
    event.target.reset();
    const data = await createTown(text);
    list.push(data);
    await loadOptions(list);
}

async function loadOptions(data) {
    render(articleTemplate(data), document.body);
}

async function initialize() {
    list = Object.values(await getTowns());
    loadOptions(list);
}