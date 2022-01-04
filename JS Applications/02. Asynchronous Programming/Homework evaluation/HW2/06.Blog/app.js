let select = document.getElementById("posts")
function attachEvents() {

   
    let loadPosts = document.getElementById("btnLoadPosts");
    loadPosts.addEventListener("click",loadElements);

    let viewBtn = document.getElementById("btnViewPost");
    viewBtn.addEventListener("click",getComments);



    console.log('TODO...');
}

async function getComments(e){

    let ulComents = document.getElementById("post-comments");
    ulComents.textContent = "";

    let postId = document.getElementById("posts").value;

    const urlComments = "http://localhost:3030/jsonstore/blog/comments";

    const response = await fetch(urlComments);
    const dataComents = await response.json(); 

    let comments = Object.values(dataComents).filter(e=> e.postId == postId); 

    const urlPosts = "http://localhost:3030/jsonstore/blog/posts/"+ postId;

    let responcePost = await fetch(urlPosts);
    let dataPosts = await responcePost.json();

    console.log(dataPosts);

    let h1 = document.getElementById("post-title");
    h1.textContent = dataPosts.title;

    let p = document.getElementById("post-body");
    p.textContent = dataPosts.body

  

   comments.forEach(c=> {


    let li = document.createElement("li");
    li.textContent = c.text;
    ulComents.appendChild(li);

   })


}


async function loadElements(){

    const urlPosts = "http://localhost:3030/jsonstore/blog/posts";

    let responcePost = await fetch(urlPosts);
    let dataPosts = await responcePost.json();

    Object.values(dataPosts).forEach(createOption);

}

function createOption(o){
    console.log(o);

    let option  = document.createElement("option");
    option.setAttribute("value",o.id);
    option.textContent = o.title;

    select.appendChild(option);

}

attachEvents();