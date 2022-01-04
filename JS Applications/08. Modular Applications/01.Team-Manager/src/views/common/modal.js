import { html, render } from '../../../node_modules/lit-html/lit-html.js';

const modalTemplate = (message, onChoice) => html `
<div class="modal">
    <p>${message}</p>
    <a href="javascript:void(0)" @click="${event => onChoice(event, true)}" id="ConfirmBtn" class="action">OK</a>
    <a href="javascript:void(0)" @click="${event => onChoice(event, false)}" id="CancelBtn" class="action">Cancel</a>
</div>`;

const overlay = document.createElement('div');
overlay.classList.add('overlay');

export function modalPopup(message) {

    return new Promise(resolve => {
        render(modalTemplate(message, onChoice), overlay);
        document.body.appendChild(overlay);

        function onChoice(event, choice) {
            event.preventDefault();
            clearModal();
            resolve(choice);
        }
    });

    function clearModal() {
        overlay.remove();
    }
}

/* CSS Styles
.overlay {
    background-color: rgba(100, 100, 100, 0.5);
    backdrop-filter: blur(5px);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
}

.modal {
    background-color: white;
    color: black;
    width: 500px;
    text-align: center;
    margin: auto;
    margin-top: 15vh;
    padding: 32px;
}

.modal p {
    margin-bottom: 32px;
}
*/