import {
   html,
   render
} from 'https://unpkg.com/lit-html?module';
import {
   towns as dataTowns
} from './towns.js'

const towns = document.getElementById('towns');


const searchTemplate = (dataTowns, match) => html `
 <article> 
  <div id="towns"> 
  <ul>
${dataTowns.map(t => itemTemplate(t, match))}
  </ul>
 </div>
 <input type="text" id="searchText" .value=${match}>
 <button @click=${search}>Search</button>
 <div id="result">${countMatches(dataTowns, match)}</div>
</article>`;

const itemTemplate = (name, match) => html `
<li class = ${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${name}</li>`;

const main = document.body;
update();

function update(match = '') {
   const result = searchTemplate(dataTowns, match);
   render(result, main)

}

function search(event) {
 // const match = event.target.parentNode.querySelector('input').value;
 const match = document.getElementById('searchText').value;
   update(match);
}
function countMatches(dataTowns, match) {
   const matches = dataTowns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())).length;
   if(matches) {
      return `${matches} matches found`;
   }
}