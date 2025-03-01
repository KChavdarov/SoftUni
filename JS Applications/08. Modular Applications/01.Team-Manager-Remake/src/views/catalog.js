import { html } from "../../node_modules/lit-html/lit-html.js";
import { cardTemplate } from "./card.js";

const catalogTemplate = (isUser, teams) => html`
    <section id="browse">
        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>
        ${isUser ? html`
        <article class="layout narrow">
            <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
        </article>` : ''}
        ${teams.map(team => cardTemplate(team))}
    </section>
`

export async function catalogPage(context) {
    const isUser = context.user != null;
    const teams = await getTeamsData(context);
    context.renderView(catalogTemplate(isUser, teams));
}

async function getTeamsData(context) {
    const [teams, members] = await Promise.all([context.api.data.getAllTeams(), context.api.data.getAllTeamMembers()]);
    members.forEach(member => {
        const team = teams.find(team => team._id == member.teamId);
        if (team) {
            if (!team.members) {
                team.members = []
            }
            team.members.push(member);
        }
    });

    return teams;
}