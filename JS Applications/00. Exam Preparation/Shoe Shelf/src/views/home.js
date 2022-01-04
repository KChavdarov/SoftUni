import { html } from '../../node_modules/lit-html/lit-html.js';
import {} from '../api/data.js';

const homeTemplate = () => html `
<div class="container">
    <div class="about-us">
        <div>
            <img src="../public/shoes.jpg" alt="">
            <img src="../public/shoes2.jpg" alt="">
        </div>
        <p>
            <a href="/register">Register Now</a> and Try it!
        </p>
    </div>
</div>`;

export async function homePage(context) {
    if (context.user) {
        return context.page.redirect('/catalog');
    }
    context.render(homeTemplate());
}