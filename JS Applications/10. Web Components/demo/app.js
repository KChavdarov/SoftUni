import { html, render } from '../node_modules/lit-html/lit-html.js';

const elementTemplate = (title, description) => html `
<style>
    h1 {
        color: red;
    }
</style>
<article> 
    <h1>${title}</h1>
    <p>${description}</p>
</article>`;

class myLitElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        render(elementTemplate('Peter', 'some description'), this.shadowRoot, { eventContext: this });
    }
}

window.customElements.define('my-element', myLitElement);
const main = document.getElementById('main');