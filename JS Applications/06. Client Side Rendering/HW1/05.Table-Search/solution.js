import {html, render} from '../node_modules/lit-html/lit-html.js';
import {styleMap} from '../node_modules/lit-html/directives/style-map.js';

const endpoint = 'http://localhost:3030/jsonstore/advanced/table';
const tbodyTemplate = (list) => html`
   ${list.map(row => html`
       <tr>
          <td>${row.firstName} ${row.lastName}</td>
          <td>${row.email}</td>
          <td>${row.course}</td>
       </tr>`)}`;

function solve() {
   loadData();
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const input = document.querySelector('#searchField').value;
      const button = document.querySelector('#searchBtn');
      const result = document.querySelector('#result');

      const data = document.querySelector('tbody').children;

      for (const row of data) {
         if (row.textContent.includes(input)) {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class')
         }
      }

      document.querySelector('#searchField').value = '';
   }
}

async function loadData(){
   const response = await fetch(endpoint);
   const data = await response.json();

   renderData(Object.values(data));
}

function renderData(data) {
   const main = document.querySelector('tbody');
   const result = tbodyTemplate(data);
   render(result, main);
}

solve();