import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { getAllItems, getAllTeamMembers } from '../api/data.js';
import { loader } from './common/loader.js';
import cardTemplate from '.././views/common/teamCardTemplate.js';


const browseTemplate = (isUser, teams) => html `
<section id="browse">
    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>
    ${isUser ? html`
    <article class="layout narrow">
        <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
    </article>` : ''}
    ${teams.map(cardTemplate)}
</section>`;

async function createBrowsePage(isUser) {
    const [teams, members] = await Promise.all([
        getAllItems(),
        getAllTeamMembers()
    ]);
    teams.forEach(t => t.members = members.filter(m => m.teamId == t._id));
    return browseTemplate(isUser, teams);
}

export function browsePage(context) {
    const isUser = context.user !== null;
    const section = until(createBrowsePage(isUser), loader);
    context.render(section);
}