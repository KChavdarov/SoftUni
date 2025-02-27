import { html, render } from "../../node_modules/lit-html/lit-html.js";

const modalTemplate = (message, resolve) => html`
    <div class="modal">
        <p>${message}</p>
        <a href="javascript:void(0)" class="action" @click=${() => resolve(true)}>Yes</a>
        <a href="javascript:void(0)" class="action" @click=${() => resolve(false)}>No</a>
    </div>
`

export async function openModal(message) {
    const container = document.createElement('div');
    container.className = 'overlay';
    return new Promise((resolve) => {
        document.body.appendChild(container);
        render(modalTemplate(message, (choice) => {
            container.remove();
            resolve(choice);
        }
        ), container);
    })
}