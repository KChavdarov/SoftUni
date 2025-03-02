import * as request from './request.js';


export async function getAllTeams() {
    return await request.get(request.settings.host + '/data/teams');
}

export async function getTeamById(id) {
    return await request.get(request.settings.host + '/data/teams/' + id);
}

export async function createTeam(data) {
    return await request.post(request.settings.host + '/data/teams', data);
}

export async function updateTeamById(id, data) {
    return await request.put(request.settings.host + '/data/teams/' + id, data);
}

export async function deleteTeamById(id) {
    return await request.del(request.settings.host + '/data/teams/' + id);
}



export async function getAllTeamMembers() {
    return await request.get(request.settings.host + '/data/members?where=status%3D%22member%22');
}

export async function getMyTeams(userId) {
    return await request.get(request.settings.host + `/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`);
}

export async function getMembersByTeamIds(teamIdsArray) {
    return await request.get(request.settings.host + '/data/members?where=' + encodeURIComponent(`teamId IN ("${teamIdsArray.join('","')}") AND status="member"`));
}

export async function getMembership(teamId) {
    return await request.get(request.settings.host + `/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`);
}

export async function createMembershipRequest(teamId) {
    return await request.post(request.settings.host + '/data/members', { teamId });
}

export async function approveMembershipRequest(membership) {
    const body = { _id: membership._id, teamId: membership.teamId, status: 'member' };
    return await request.put(request.settings.host + '/data/members/' + membership._id, body);
}

export async function cancelMembershipOrRequest(requestId) {
    return await request.del(request.settings.host + '/data/members/' + requestId);
}