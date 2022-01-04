import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { approveMembershipRequest, cancelMembershipOrRequest, createMembershipRequest, getItemById, getMembership } from '../api/data.js';
import { loader } from './common/loader.js';
import { modalPopup } from './common/modal.js';


const detailsTemplate = (team, teamControls, memberList, requestControls) => html `
<section id="team-home">
    <article class="layout">
        <img src="${team.logoUrl}" class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${team.members.length == 1 ? '1 member' : team.members.length + ' members'}</span>
            <div>
                ${teamControls(team)}
            </div>
        </div>
        ${memberList(team.members)}
        ${requestControls(team.requests)}
    </article>
</section>`;


export function detailsPage(context) {
    const teamId = context.params.id;

    function loadSection() { context.render(until(setupDetails(teamId), loader)); };
    loadSection();

    async function setupDetails(teamId) {
        const [team, memberships] = await Promise.all([
            getItemById(teamId),
            getMembership(teamId)
        ]);
        const members = memberships.filter(a => a.status === 'member');
        const requests = memberships.filter(a => a.status === 'pending');
        team.members = members;
        team.requests = requests;
        return detailsTemplate(team, teamControls, memberList, requestControls);

        function teamControls(team) {
            if (context.user) {
                const membership = memberships.find(r => r.user._id == context.user.id);
                if (context.user.id === team._ownerId) {
                    return html `<a href="/edit/${team._id}" class="action">Edit team</a>`;
                } else if (team.members.some(a => a.user._id === context.user.id)) {
                    return html `<a @click=${event => cancelMembership(event, membership)} href="javascript:void(0)" class="action invert">Leave team</a>`;
                } else if (team.requests.some(a => a.user._id === context.user.id)) {
                    return html `Membership pending. <a @click=${event => cancelMembership(event, membership)} href="javascript:void(0)">Cancel request</a>`;
                } else {
                    return html `<a @click=${joinTeam} href="javascript:void(0)" class="action">Join team</a>`;
                }
            } else {
                return '';
            }
        };

        function memberList(members) {
            const isOwner = (context.user && context.user.id === team._ownerId);
            return html `
            <div class="pad-large">
                <h3>Members</h3>
                <ul class="tm-members">
                    ${members.map(member => html `<li>${member.user.username}${isOwner ? html`<a @click=${event => cancelMembership(event, member)} href="javascript:void(0)" class="tm-control action">Remove from team</a>` : ''}</li>`)}
                </ul>
            </div>`;
        }

        function requestControls(requests) {
            const isOwner = (context.user && context.user.id === team._ownerId);
            if (isOwner) {
                return html `
            <div class="pad-large">
                <h3>Membership Requests</h3>
                <ul class="tm-members">
                    ${requests.map(r=> html`
                    <li>${r.user.username}<a @click=${event => approveRequest(event,r)} href="javascript:void(0)" class="tm-control action">Approve</a><a @click=${event => cancelMembership(event,r)} href="javascript:void(0)"
                            class="tm-control action">Decline</a></li>`)}
                </ul>
            </div>`;
            }
        }

        async function joinTeam(event) {
            event.target.remove();
            await createMembershipRequest(teamId);
            // loadSection();
            context.render(await setupDetails(teamId));
        }

        async function cancelMembership(event, membership) {
            const confirmed = await modalPopup('Are you sure?');
            if (confirmed) {
                event.target.remove();
                await cancelMembershipOrRequest(membership._id);
                // loadSection();
                context.render(await setupDetails(teamId));
            }
        }

        async function approveRequest(event, membership) {
            event.target.remove();
            await approveMembershipRequest(membership);
            // loadSection();
            context.render(await setupDetails(teamId));
        }
    }
}