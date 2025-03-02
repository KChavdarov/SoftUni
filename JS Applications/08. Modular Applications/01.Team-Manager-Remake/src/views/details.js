import { html } from "../../node_modules/lit-html/lit-html.js";
import { until } from "../../node_modules/lit-html/directives/until.js"
import { loader } from "./loader.js";
import { openModal } from "./modal.js";

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
                    ${members.map(member => memberLi(team._ownerId, member, user, handlers))}
                </ul>
            </div>
            ${pendingRequests(team._ownerId, pending, user, handlers)}
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
        ${!membership ? html`<a @click=${handlers.join} href="javascript:void(0)" class="action">Join team</a>` : ''}
        ${(isMember && !isOwner) ? html`<a @click=${(event) => handlers.cancel(event, membership)} href = "javascript:void(0)" class="action invert" > Leave team</a > ` : ''}
        ${isPending ? html`Membership pending. <a @click=${(event) => handlers.cancel(event, membership)} href="javascript:void(0)" > Cancel request</a >` : ''}
    </div >
`}

const memberLi = (ownerId, member, user, handlers) => {
    const isUser = !!user;
    const isOwner = isUser && user.id == ownerId;
    const isHimself = isUser && member.user._id == ownerId;

    return html`
    <li> ${member.user.username}${(isOwner && !isHimself) ? html`<a @click=${(event) => handlers.cancel(event, member)} href="javascript:void(0)" class="tm-control action">Remove from team</a>` : ''}</li >
`}

const pendingRequests = (ownerId, pending, user, handlers) => {
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
                    <a @click=${(event) => handlers.approve(event, request)} href="javascript:void(0)" class="tm-control action">Approve</a>
                    <a @click=${(event) => handlers.cancel(event, request)} href="javascript:void(0)" class="tm-control action">Decline</a>
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

    const handlers = {
        join: createMembership.bind({}, context),
        cancel: cancelMembership.bind({}, context),
        approve: approveMembership.bind({}, context),
    }

    async function createMembership(context, event) {
        event.target.remove();
        await context.api.data.createMembershipRequest(context.params.id);
        context.renderView(await populateTemplate(context));
    }

    async function cancelMembership(context, event, membership) {
        event.target.remove();
        const confirmed = await openModal('Are you sure you want to proceed?');
        if (confirmed) {
            await context.api.data.cancelMembershipOrRequest(membership._id);
            context.renderView(await populateTemplate(context));
        }
    }

    async function approveMembership(context, event, membership) {
        event.target.remove();
        const confirmed = await openModal('Are you sure you want to proceed?');
        if (confirmed) {
            await context.api.data.approveMembershipRequest(membership);
            context.renderView(await populateTemplate(context));
        }
    }

    return detailsTemplate(team, user, handlers);
}