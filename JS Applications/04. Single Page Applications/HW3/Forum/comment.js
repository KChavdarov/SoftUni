import {e} from "./dom.js";

let main;
let section;
let id;

export function setupTopicComment(targetMain,targetSection){
    main=targetMain;
    section=targetSection;

    const form = section.querySelector('form')
    form.addEventListener('submit',async (e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const data= [...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {});

        if(data.username==='') {
            return alert('Username is required!')
        }
        onSubmit(data,id);
        form.reset();
        showTopicComment(e,id);
    });

}

export async function showTopicComment(e,postId) {
    main.innerHTML='';
    e.preventDefault();
    id=postId;

    //get Post by Id
    const post = await getPostId(id);
    const divComment = section.querySelector('#commentPost');
    divComment.innerHTML='';

    const newPost=createPostPreview(post);
    divComment.appendChild(newPost);

    // get comment
    const comments = await getComments(id);
    const commentsId = [...Object.values(comments)].filter(e=>e.postId===id)
    const divComments = section.querySelector('#allComments');
    divComments.innerHTML='';
    commentsId.forEach(e=>{
        const el = createCommentPreview(e);
        divComments.appendChild(el)
    });

    main.appendChild(section);///

}

async function onSubmit(data,id) {
    const body = JSON.stringify({

        username: data.username,
        postText: data.postText,
        postId: id,
        data: new Date().toLocaleString()

    });

    await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},

        body
    });
}

async function getPostId(id) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/'+ id);

    if (response.ok !==true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    return await response.json();

}

async function getComments(id) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments')

    if (response.ok !==true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    return await response.json();

}

function createPostPreview(post) {
    const result = e('div',{className:'theme-content'},
        e('div',{className:'theme-title'},
            e('div',{className:'theme-name-wrapper'},
                e('div',{className:'theme-name'},
                    e('h2',{},post.topicName),
                    e('p',{},'Date :',
                        e('time',{},post.data))))));



    return result;

}

function createCommentPreview(comment) {
    const result = e('div',{className:'comment'},
        e('header',{className:'header'},
            e('p',{},'posted on  ',
                e('span',{},comment.username),
                e('time',{},comment.data))),
        e('div',{className:'comment-main'},
            e('div',{className:'userdetails'},
                e('img',{src:"./static/profile.png",alt:"avatar"})),
            e('div',{className:'post-content'},
                e('p',{},comment.postText))));


    // console.log(result);
    return result;

}
