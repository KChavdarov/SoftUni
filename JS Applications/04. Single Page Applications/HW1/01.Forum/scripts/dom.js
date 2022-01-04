import {createTopic, getTopics, getSingleTopic, postComment, getComments} from "./rest.js"
window.addEventListener("load", displayHome)

async function viewDetails(e) {
    let id=e.target.id;
    let topic=e.target.parentNode.parentNode.parentNode;
    main.innerHTML="";
    main.appendChild(topic);
    let data= await getSingleTopic(id)
    console.log(data)
    
let paragraph=document.getElementById("paragraph");
paragraph.textContent=data.content;
    main.innerHTML+=`
    <b>Comments:</b>
    <ul id="comments" ></ul>
    <div class="new-topic-border">
    
    <form>
        <div  class="new-topic-title">
            <label for="username">Username <span class="red">*</span></label>
            <input type="text" name="username" id="username">
        </div>
        
        <div class="new-topic-content">
            <label for="postText">content <span class="red"></span></label>
            <textarea type="text" name="postText" id="commentContent" rows="8" class="height"></textarea>
        </div>
        <div class="new-topic-buttons">
          
            <button id="postComment" class="public">Post Comment</button>
        </div>

    </form>
</div>`
let comments=document.getElementById("comments")

let listOfComments= await getComments()
listOfComments=Object.values(listOfComments)

listOfComments=listOfComments.filter(c=> c.postId==id)
listOfComments.forEach(element => {
    let li=document.createElement("li");
    li.textContent=`${element.username}: ${element.commentContent}`;
    comments.appendChild(li)
});
let postCommentBtn=document.getElementById("postComment");
postCommentBtn.addEventListener("click", async function (e) {
    e.preventDefault()
    let commentContent=document.getElementById("commentContent").value;
    let username=document.getElementById("username").value;
   
    postComment(id, {commentContent, username})
    
})
  
}
function displayHome() {
   
    let cancelBtn=document.getElementById("cancel");
    let postBtn=document.getElementById("post");
    let homeBtn=document.getElementById("homeBtn")
    cancelBtn.addEventListener("click", loadHome)
    let topicTemplate=document.getElementById("topic");
    let main=document.getElementById("main");
    let newTopic=document.getElementById("newTopic");
    let topicList=document.getElementById("topicList");
    let createTopicBtn=document.getElementById("createTopic");
    createTopicBtn.addEventListener("click", createPost)
  homeBtn.addEventListener("click", loadHome)
    topicList.innerHTML="";
    newTopic.remove();


 async function createPost() {
        main.innerHTML="";
        main.appendChild(newTopic);
       
        postBtn.addEventListener("click", async function (e) {
            e.preventDefault();
            let title=document.getElementById("topicName").value;
            let username=document.getElementById("username").value;
            let content=document.getElementById("postText").value;
            await createTopic({title, username, content})
            loadHome()
        })
    }

    async function loadHome() {
        
        main.innerHTML="";
        main.appendChild(topicList);
       // topicList.appendChild(topic);
      topicList.innerHTML=""
let data= await getTopics();
Object.values(data).forEach(element => {
    
    let newPost=topicTemplate.innerHTML.replace("{{title}}", element.title).replace("{{username}}", element.username).replace("{{id}}", element._id);
       
       
    topicList.innerHTML+=newPost;
    [...document.querySelectorAll("h2")].forEach(element => {
        element.addEventListener("click", viewDetails)
    });
});

    }
    loadHome()
}


