import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { getMyTeams, getMembersByTeamIds } from '../api/data.js';
import { loader } from './common/loader.js';
import cardTemplate from '.././views/common/teamCardTemplate.js';

const myTeamsTemplate = (teams) => html `
<section id="browse">
    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>
    ${teams.length === 0 ? html`
    <article class="layout narrow">
        <div class="pad-med">
            <p>You are not a member of any team yet.</p>
            <p><a href="/browse">Browse all teams</a> to join one, or use the button bellow to cerate your own team.</p>
        </div>
        <div class=""><a href="/create" class="action cta">Create Team</a></div>
    </article>`
    : html`
    <article class="layout narrow">
        <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
    </article>`}
    ${teams.map(t => cardTemplate(t.team))}
</section>`;

async function createMyTeamsTemplate(user) {
    const teams = await getMyTeams(user.id);
    const members = await getMembersByTeamIds(teams.map(t => t.team._id));
    teams.forEach(t => t.team.members = members.filter(m => m.teamId == t.team._id));
    return myTeamsTemplate(teams);
}

export function myTeamsPage(context) {
    const section = until(createMyTeamsTemplate(context.user), loader);
    context.render(section);
}