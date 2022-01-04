import { html, render } from '../node_modules/lit-html/lit-html.js';
import { classMap } from '../node_modules/lit-html/directives/class-map.js';

const buttonTemplate = (text, type) => html `
<style>
    .btn {
        padding: 0.5em 1em;
        border-radius: 0.5em;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 1.2em;
        outline: none;
        cursor: pointer;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
        border: none;
    }

    .basic {
        color: rgb(0, 0, 0);
        background-color: rgb(255, 255, 255);
    }

    .primary {
        color: rgb(255, 255, 255);
        background-color: rgb(63, 81, 181);
    }

    .accent {
        color: rgb(255, 255, 255);
        background-color: rgb(255, 64, 129);
    }

    .warn {
        color: rgb(255, 255, 255);
        background-color: rgb(244, 67, 54);
    }
</style>
<button @click=${onClick} class=${classMap({
    btn: true,
    basic: type == 'basic',
    primary: type == 'primary',
    accent: type == 'accent',
    warn: type == 'warn',
})} >${text}</button>`;

class myButton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return ['type'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const text = this.getAttribute('text');
        const type = this.getAttribute('type');
        render(buttonTemplate(text, type), this.shadowRoot, { eventContext: this });
    }
}

customElements.define('my-button', myButton);

let i = 0;
const classes = ['basic', 'warn', 'accent', 'primary'];

function onClick() {
    if (i > 3) { i = 0; }
    document.querySelector('my-button').setAttribute('type', classes[i]);
    i++;
}