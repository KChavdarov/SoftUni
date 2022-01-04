import {
    html,
    render
} from 'https://unpkg.com/lit-html?module';
import {
    cats
} from './catSeeder.js'


const catTemplate = (cat) => html `
 <li>
     <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
      <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
    </div>
 </li>`

const main = document.getElementById('allCats')
const catsCards = html ` 
 <ul @click =${toggleInfo}>
    ${cats.map(catTemplate)}
 </ul>`;
render(catsCards, main);

function toggleInfo(event) {
    const element = event.target.parentNode.querySelector('.status');
    if (element.style.display == 'none') {
        element.style.display = 'block'
    } else {
        element.style.display = 'none';
    }
}