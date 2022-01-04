import { html, render } from '../node_modules/lit-html/lit-html.js';
import { classMap } from '../node_modules/lit-html/directives/class-map.js'


const ulTemplate = (isOpen, onClick) => html `
<style>
    ul {
        list-style-type: none;
    }

    li::before {
        display:inline-block;
        width: 1rem;
        height: 1rem;
        margin-right: 0.25rem;
        content:"";
    }

    .open::before,
    .closed::before {
        background-size: 1rem 1rem;
        position: relative;
        top: 0.25rem;
        opacity: 0.3;
    }

    .open::before {
        background-image: url(img/down.png);
    }

    .closed::before {
        background-image: url(img/right.png);
    }

    .closed .closed::before,
    .closed .open::before {
        display: none;
    }
</style>

<ul class=${classMap({open: isOpen, closed: !isOpen,})}>
    <slot></slot>
</ul>`;

class myUl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isOpen = false;
    }

    toggle(event) {}

    update() {
        render(ulTemplate(this.isOpen), this.shadowRoot, { eventContext: this });
    }

    connectedCallback() {
        this.update();
    }
}

customElements.define('my-ul', myUl);