import { html } from './node_modules/lit-html/lit-html.js';
import { styleMap } from './node_modules/lit-html/directives/style-map.js';

export function contactTemplate(contact, link) {
    const styles = {
        display: contact.isVisible ? 'block' : 'none',
    };
    return html `<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${contact.name}</h2>
        ${contact.isVisible ? html`<a href=${link}>Send Message</a>` : html`<a>Send Message</a>`}
        <button class="detailsBtn">Details</button>
        <div class="details" id=${contact.id} style=${styleMap(styles)}>
            <p>Phone number: ${contact.phoneNumber}</p>
            <p>Email: ${contact.email}</p>
        </div>
    </div>
</div>`;
}