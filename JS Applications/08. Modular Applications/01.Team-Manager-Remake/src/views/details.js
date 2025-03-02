import { html } from "../../node_modules/lit-html/lit-html.js";
import { until } from "../../node_modules/lit-html/directives/until.js"
import { loader } from "./loader.js";

const detailsTemplate = (team, user, handlers) => {
    const { members, pending } = team.membership.reduce((acc, request) => {
        if (request.status == 'member') {
            acc.members.push(request);
        } else if (request.status == 'pending') {
            acc.pending.push(request);
        }
        return acc;
    }, { members: [], pending: [] });

    return html`
    <section id="team-home">
        <article class="layout">
            <img src=${team.logoUrl} class="team-logo left-col">
            <div class="tm-preview">
                <h2>${team.name}</h2>
                <p>${team.description}</p>
                <span class="details">${`${members.length}`} ${members.length == 1 ? 'member' : 'members'}</span>
                ${teamControls(team, user, handlers)}
            </div>
            <div class="pad-large">
                <h3>Members</h3>
                <ul class="tm-members">
                    ${members.map(member => memberLi(team._ownerId, member, user))}
                </ul>
            </div>
            ${pendingRequests(team._ownerId, pending, user)}
        </article>
    </section>
`}

const teamControls = (team, user, handlers) => {
    if (!user) {
        return '';
    }

    const isOwner = team._ownerId == user.id;
    const membership = team.membership.find(request => request._ownerId == user.id);
    const isMember = membership && membership.status == 'member';
    const isPending = membership && membership.status == 'pending';

    return html`
    <div>
        ${isOwner ? html`<a href="/edit/${team._id}" class="action">Edit team</a>` : ''}
        ${!membership ? html`<a @click=${handlers.joinTeam} href="javascript:void(0)" class="action">Join team</a>` : ''}
        ${(isMember && !isOwner) ? html`<a href="javascript:void(0)" class="action invert">Leave team</a>` : ''}
        ${isPending ? html`Membership pending. <a href="javascript:void(0)" > Cancel request</a >` : ''}
    </div >
`}

const memberLi = (ownerId, member, user) => {
    const isUser = !!user;
    const isOwner = isUser && user.id == ownerId;
    const isHimself = isUser && member.user._id == ownerId;

    return html`
    <li> ${member.user.username}${(isOwner && !isHimself) ? html`<a href="javascript:void(0)" class="tm-control action">Remove from team</a>` : ''}</li >
`}

const pendingRequests = (ownerId, pending, user) => {
    const isOwner = user && user.id == ownerId;
    if (!isOwner) {
        return '';
    }

    return html`
    <div class="pad-large">
        <h3>Membership Requests</h3>
        <ul class="tm-members">
            ${pending.map(request => html`
                <li>
                    ${request.user.username}
                    <a href="javascript:void(0)" class="tm-control action">Approve</a>
                    <a href="javascript:void(0)" class="tm-control action">Decline</a>
                </li>            
            `)}
        </ul>
    </div>`
}

export async function detailsPage(context) {
    context.renderView(until(populateTemplate(context), loader()));
}

async function populateTemplate(context) {
    const user = context.user;
    const [team, membership] = await Promise.all([context.api.data.getTeamById(context.params.id), context.api.data.getMembership(context.params.id)])
    team.membership = membership;
    console.log(team);

    const handlers = {
        // join: () => joinTeam(context),
        joinTeam: joinTeam.bind({}, context)
    }

    async function joinTeam(context) {
        context.api.data.createMembershipRequest(context.params.id);
    }

    // async function leaveTeam(context) { }

    return detailsTemplate(team, user, handlers);
}