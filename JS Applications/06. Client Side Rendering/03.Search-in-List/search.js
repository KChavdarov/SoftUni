import { html, render } from './node_modules/lit-html/lit-html.js';
import { classMap } from './node_modules/lit-html/directives/class-map.js';
import { towns } from './towns.js';

const listTemplate = (towns, search) => html`
    <article>
        <div id="towns">
            <ul>
                ${towns.map(town => html`<li class=${classMap({ active: isMatch(town, search) })}>${town}</li>`)}
            </ul>
        </div>
        <input type="text" id="searchText" @input=${onSearch}/>
        <!-- <button @click=${onSearch}>Search</button> -->
        <div id="result">${countMatches(towns, search)}</div>
    </article>
`
render(listTemplate(towns), document.body);

function isMatch(item, search) {
    return search && item.toLowerCase().includes(search.toLowerCase());
}

function countMatches(towns, search) {
    let matches = towns.map(town => isMatch(town, search));
    let count = matches.filter(town => town).length;
    if (search) {
        return count == 1 ? '1 match found' : `${count} matches found`;
    }
}

function onSearch() {
    const search = document.getElementById('searchText').value;
    render(listTemplate(towns, search), document.body);
}


// import { html, render } from './node_modules/lit-html/lit-html.js';
// import { classMap } from './node_modules/lit-html/directives/class-map.js';
// import { towns } from './towns.js';

// const townTemplate = (town, search) => {
//     let isActive = search && town.toLowerCase().includes(search.toLowerCase());
//     return html `<li class="${classMap({active:isActive})}">${town}</li>`;
// };

// const resultTemplate = (towns, search) => {
//     const matches = search ? towns.filter(town => town.toLowerCase().includes(search.toLowerCase())).length : 0;
//     return html `<div id="result">${matches ? (matches==1? '1 match found':`${matches} matches found`) : ''}</div>`;
// };

// const articleTemplate = (towns, search) => html `
//     <article>
//         <div id="towns">
//             <ul>${towns.map(town=> townTemplate(town,search))}</ul>
//         </div>
//         <input type="text" id="searchText" .value=${search ? search:''} />
//         <button @click=${onSearch}>Search</button>
//         ${resultTemplate(towns,search)}
//     </article>`;

// render(articleTemplate(towns), document.body);

// function onSearch() {
//     const search = document.getElementById('searchText').value;
//     render(articleTemplate(towns, search), document.body);
// }