import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('root');
const form = document.querySelector('form');
const input = document.getElementById('towns');

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();
    const ul = listTemplate(input.value
        .split(',')
        .filter(a => a)
        .map(a => a.trim()));

    form.reset()
    render(ul, root);
}

const listTemplate = (data) => html`
<ul>${data.map(a => html`<li>${a}</li>`)}</ul>`;


// import { render, html } from './node_modules/lit-html/lit-html.js';

// const root = document.getElementById('root');

// const listTemplate = (data) => html `
// <ul>${data.map(a=> html`<li>${a}</li>`)}</ul>`;

// document.querySelector('form').addEventListener('submit', event => {
//     event.preventDefault();
//     const towns = document.getElementById('towns').value.split(',').filter(a => a != '').map(a => a.trim());
//     const ul = listTemplate(towns);
//     render(ul, root);
// });