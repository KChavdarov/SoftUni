import { html, render } from '../../node_modules/lit-html/lit-html.js';

const modalTemplate = (message, onChoice) => html `
<style>
    .overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        background-color: rgba(0,0,0, 0.4);
        backdrop-filter: blur(5px);
    }

    .modal-box {
        font-size:1.2rem;
        background-color: white;
        box-shadow: 0px 0px 56px 5px rgba(0,0,0,0.8);
        width:300px;
        text-align: center;
        padding: 1rem 2rem;
        margin: auto;
        margin-top: 20vh;
        z-index: 1;
    }

    .buttons{
        margin: 1rem auto;
    }
</style>

<section class="modal-box">
    <p>${message}</p>
    <div class="buttons">
        <button @click=${() => onChoice(true)} class="button">Yes</button>
        <button @click=${() => onChoice(false)} class="button">Cancel</button>
    </div>
</section>`;

const overlay = document.createElement('div');
overlay.className = 'overlay';

export function showModal(message) {
    return new Promise(resolve => {
        render(modalTemplate(message, onChoice), overlay);
        document.body.appendChild(overlay);

        function onChoice(choice) {
            clear();
            resolve(choice);
        }
    });
}

function clear() {
    overlay.remove();
}