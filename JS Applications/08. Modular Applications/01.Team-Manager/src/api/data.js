import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const logout = api.logout;
export const register = api.register;



export async function getAllItems() {
    return await api.get(host + '/data/teams');
}

export async function getItemById(id) {
    return await api.get(host + '/data/teams/' + id);
}

export async function createItem(data) {
    return await api.post(host + '/data/teams', data);
}

export async function updateItemById(id, data) {
    return await api.put(host + '/data/teams/' + id, data);
}

export async function deleteItemById(id) {
    return await api.del(host + '/data/teams/' + id);
}



export async function getAllTeamMembers() {
    return await api.get(host + '/data/members?where=status%3D%22member%22');
}

export async function getMyTeams(userId){
    return await api.get(host + `/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`);
}

export async function getMembersByTeamIds (teamIdsArray){
    return await api.get(host + '/data/members?where=' + encodeURIComponent(`teamId IN ("${teamIdsArray.join('","')}") AND status="member"`));
}

export async function getMembership(teamId) {
    return await api.get(host + `/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`);
}

export async function createMembershipRequest(teamId) {
    return await api.post(host + '/data/members', { teamId });
}

export async function approveMembershipRequest(request) {
    const body = { _id: request._id, teamId: request.teamId, status: 'member' };
    return await api.put(host + '/data/members/' + request._id, body);
}

export async function cancelMembershipOrRequest(requestId) {
    return await api.del(host + '/data/members/' + requestId);
}