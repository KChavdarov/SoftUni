/*
    - Добавена функционалност -> при попълване на коментар, името на потребителя се запазва и визуализира, като заглавие на секцията
*/

import { setupCreatePost, showCreatePost } from './createPost.js';
import { setupPostPreview } from './postsPreview.js';
import { setupDetails } from './details.js';

const container = document.querySelector('div.container');
const homeSection = document.getElementById('homeSection');
const createPost = document.getElementById('createPost');
const postsPreview = document.getElementById('postsPreview');
const topicContent = document.getElementById('topicContent');

setupPostPreview(homeSection, postsPreview);
setupCreatePost(container, homeSection, createPost);
setupDetails(container, topicContent);

showCreatePost();

document.getElementById('homeBtn').addEventListener('click', event => { event.preventDefault(); showCreatePost(); });