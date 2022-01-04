import { html, render } from '../../node_modules/lit-html/lit-html.js';

const modalTemplate = (message, onChoice) => html `
<div id="modal">
    <p>${message}</p>
    <button @click=${() => onChoice(true)} >OK</button>
    <button @click=${() => onChoice(false)} >Cancel</button>
</div>
`;

const overlay = document.createElement('div');
overlay.id = 'overlay';

export function createModal(message) {
    return new Promise((resolve) => {
        render(modalTemplate(message, onChoice), overlay);
        document.body.appendChild(overlay);

        function onChoice(choice) {
            clearModal();
            resolve(choice);
        }
    });
}

function clearModal() {
    overlay.remove();
}