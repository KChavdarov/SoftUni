import {html, render} from '../node_modules/lit-html/lit-html.js'

import{towns} from './towns.js'

const searchTemplate = (towns,match) => html`
   <article>
        <div id="towns">
            <ul>
               ${towns.map(t => itemTemplate(t, match))}
            </ul>
        </div>
        <input type="text" id="searchText" />
        <button @click=${search}>Search</button>
        <div id="result">${countTemplate(towns, match)}</div>
   </article>
`
const countTemplate = (towns, match)=> {
   const matches = towns.filter(t=> match && t.toLowerCase().includes(match.toLowerCase())).length;
   return matches? `${matches} matches found ` : ''
}

const itemTemplate = (name, match) => html`<li class=${(match && name.toLowerCase().includes(match.toLowerCase()))? 'active' : ''}>${name}</li>`

const main = document.body;
const result = searchTemplate(towns, '');
render(result, main)
update();

function update(match=''){
   const result = searchTemplate(towns, match)
   render(result,main)
}

function search(event) {
   const match = event.target.parentNode.querySelector('input').value
   update(match);

}
