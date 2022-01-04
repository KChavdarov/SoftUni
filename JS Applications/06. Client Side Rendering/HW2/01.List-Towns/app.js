import {
    html,
    render
} from 'https://unpkg.com/lit-html?module';

const template = (data) => html `
<ul>
${data.map(t => html `<li>${t}</li>`)}
</ul>
`
document.getElementById('btnLoadTowns').addEventListener('click', updateList)



function updateList(event) {
    event.preventDefault();

    const townsAsString = document.getElementById('towns').value
    const root = document.getElementById('root');

    const towns = townsAsString.split(',').map(x => x.trim());

    const result = template(towns);

    render(result, root)
}