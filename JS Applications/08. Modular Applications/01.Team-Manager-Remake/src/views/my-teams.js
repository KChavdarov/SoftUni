import { html } from "../../node_modules/lit-html/lit-html.js";
import { cardTemplate } from "./card.js";

const myTeamsTemplate = (teams) => html`
    <section id="my-teams">
        <article class="pad-med">
            <h1>My Teams</h1>
        </article>
        ${(teams && teams.length > 0)
        ? teams.map(team => cardTemplate(team))
        : html`
        <article class="layout narrow">
            <div class="pad-med">
                <p>You are not a member of any team yet.</p>
                <p><a href="/catalog">Browse all teams</a> to join one, or use the button bellow to cerate your own
                team.</p>
            </div>
            <div class=""><a href="/create" class="action cta">Create Team</a></div>
        </article>`}
    </section>
`

export async function myTeamsPage(context) {
    const teams = await getTeamsData(context);
    context.renderView(myTeamsTemplate(teams));
}

async function getTeamsData(context) {
    const teams = (await context.api.data.getMyTeams(context.user.id)).map(team => team.team);
    const members = await context.api.data.getMembersByTeamIds(teams.map(team => team._id));
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