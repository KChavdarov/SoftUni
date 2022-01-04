import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getItemById(id) {
    return await api.get(host + '/data/memes/' + id);
}

export async function getAllItems(page = 1) {
    const offset = (page - 1) * 4;
    return await api.get(host + `/data/memes?sortBy=_createdOn%20desc&offset=${offset}&pageSize=4`);
}

export async function createItem(data) {
    return await api.post(host + '/data/memes', data);
}

export async function updateItemById(id, data) {
    return await api.put(host + '/data/memes/' + id, data);
}

export async function deleteItemById(id) {
    return await api.del(host + '/data/memes/' + id);
}


/*  SEARCH AND PAGINATION  */

export async function searchMeme(search, page = 1) {
    const offset = (page - 1) * 4;
    const query = `title LIKE "${search}"`;
    const pagination = `offset=${offset}&pageSize=4`;
    return await api.get(host + `/data/memes?where=${encodeURIComponent(query)}&${pagination}`);
}

export async function searchResultCount(search) {
    const query = `title LIKE "${search}"`;
    return await api.get(host + `/data/memes?where=${encodeURIComponent(query)}&count`);
}

export async function getMemesByUserId(userId) {
    return await api.get(host + `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function getItemCount() {
    return await api.get(host + '/data/memes?count');
}

/*  COMMENTS  */

export async function getCommentsByItemId(itemId) {
    return await api.get(host + `/data/comments?where=itemId%3D%22${itemId}%22&sortBy=_createdOn%20desc&load=author%3D_ownerId%3Ausers`);
}

export async function postComment(itemId, text) {
    return await api.post(host + '/data/comments/', { text, itemId });
}



/*  LIKES COLLECTION  */

export async function getLikes() {
    return await api.get(host + '/data/likes');
}

export async function getLikesByItemId(itemId) {
    return await api.get(host + `/data/likes?where=itemId%3D%22${itemId}%22&distinct=_ownerId`);
}

export async function getLikeCountByItemId(itemId) {
    return await api.get(host + `/data/likes?where=itemId%3D%22${itemId}%22&distinct=_ownerId&count`);
}

export async function getOwnLike(itemId, user) {
    const userId = user ? user.id : null;
    return await api.get(host + `/data/likes?where=itemId%3D%22${itemId}%22%20and%20_ownerId%3D%22${userId}%22`);
}

export async function postLike(itemId) {
    return await api.post(host + '/data/likes', { itemId });
}

export async function deleteLike(likeId) {
    return await api.del(host + '/data/likes/' + likeId);
}