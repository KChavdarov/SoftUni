import { html, render } from './node_modules/lit-html/lit-html.js';
import { classMap } from './node_modules/lit-html/directives/class-map.js';
import { towns } from './towns.js';

const townTemplate = (town, search) => {
    let isActive = search && town.toLowerCase().includes(search.toLowerCase());
    return html `<li class="${classMap({active:isActive})}">${town}</li>`;
};

const resultTemplate = (towns, search) => {
    const matches = search ? towns.filter(town => town.toLowerCase().includes(search.toLowerCase())).length : 0;
    return html `<div id="result">${matches ? (matches==1? '1 match found':`${matches} matches found`) : ''}</div>`;
};

const articleTemplate = (towns, search) => html `
    <article>
        <div id="towns">
            <ul>${towns.map(town=> townTemplate(town,search))}</ul>
        </div>
        <input type="text" id="searchText" .value=${search ? search:''} />
        <button @click=${onSearch}>Search</button>
        ${resultTemplate(towns,search)}
    </article>`;

render(articleTemplate(towns), document.body);

function onSearch() {
    const search = document.getElementById('searchText').value;
    render(articleTemplate(towns, search), document.body);
}