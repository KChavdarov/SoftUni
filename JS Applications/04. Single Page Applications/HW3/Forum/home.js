import {showTopicComment} from "./comment.js";
import {e} from "./dom.js";

let main;
let section;



export function setupHome(targetMain,targetSection){
    main=targetMain;
    section=targetSection;

    //Reset form
    section.querySelector('#cancelBtn').addEventListener('click', (event) => {

        const confirmed = confirm('Are you sure you want to delete?');
        if (confirmed) {
            section.querySelector('form').reset();
        }

    });

    //Submit form
    const form = section.querySelector('form');
    form.addEventListener('submit', formClick)

}

export async function showHome() {
    main.innerHTML = '';

    const divPosts = section.querySelector('.topic-title');
    divPosts.innerHTML = '';

    const comments = await getPosts();
    // console.log(comments)
    const cards = Object.values(comments);
    cards.forEach(e => {
        const element = createPostsPreview(e);
        divPosts.appendChild(element);
    });

    main.appendChild(section);

}

async function formClick(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = [...formData.entries()].reduce((p, [k, v]) => Object.assign(p, {[k]: v}), {});
     if (data.topicName==='' || data.username==='' || data.postText=== ''){
         return alert('All fields are required!')
     }
    onSubmit(data);

    showHome();
    event.target.reset();
}


async function getPosts() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');


    if (response.ok !==true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    return await response.json();

}

function createPostsPreview(post) {

    const result = e('div', { className: 'topic-container'},
        e('div',{className:'topic-name-wrapper'},
            e('div',{className:'topic-name'},
                e('a',{href:'#',className:'normal', onClick:(event)=>showTopicComment(event, post._id)},
                    e('h2',{},post.topicName)),
                e('div',{className:'columns'},
                    e('div',{},
                        e('p',{},'Date:',
                            e('time',{},post.data)),
                        e('div',{className:'nick-name'},
                            e('p',{},'Username: ',
                                e('span',{},post.username)))),
                    e('div',{}),
                    e('div',{className:'subscribers'})))));


    return result;

}

async function onSubmit(data) {
    const body = JSON.stringify({
        topicName: data.topicName,
        username: data.username,
        postText: data.postText,
        data: new Date().toLocaleString()

    });
    await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},

        body
    });


}

