import { html } from "../../node_modules/lit-html/lit-html.js";
import { until } from "../../node_modules/lit-html/directives/until.js"
import { loader } from "./loader.js";

const detailsTemplate = (team, members = [], requests = []) => html`
    <section id="team-home">
        <article class="layout">
            <img src=${team.logoUrl} class="team-logo left-col">
            <div class="tm-preview">
                <h2>${team.name}</h2>
                <p>${team.description}</p>
                <span class="details">${members?.length || '???'}</span>
                <div>
                    <a href="/edit/${team._id}" class="action">Edit team</a>
                    <a href="javascript:void(0)" class="action">Join team</a>
                    <a href="javascript:void(0)" class="action invert">Leave team</a>
                    Membership pending. <a href="javascript:void(0)">Cancel request</a>
                </div>
            </div>
            <div class="pad-large">
                <h3>Members</h3>
                <ul class="tm-members">
                    <li>My Username</li>
                    ${members.map(m => html``)}
                    <li>James<a href="#" class="tm-control action">Remove from team</a></li>
                    <li>Meowth<a href="#" class="tm-control action">Remove from team</a></li>
                </ul>
            </div>
            <div class="pad-large">
                <h3>Membership Requests</h3>
                <ul class="tm-members">
                    <li>John<a href="#" class="tm-control action">Approve</a><a href="#"
                            class="tm-control action">Decline</a></li>
                    <li>Preya<a href="#" class="tm-control action">Approve</a><a href="#"
                            class="tm-control action">Decline</a></li>
                </ul>
            </div>
        </article>
    </section>
`

export async function detailsPage(context) {
    context.renderView(until(populateTemplate(context), loader()));
}

async function populateTemplate(context) {
    const team = await context.api.data.getTeamById(context.params.id);
    return detailsTemplate(team);
}