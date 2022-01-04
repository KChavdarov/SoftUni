export async function createTopic(data) {
   
    await fetch("http://localhost:3030/jsonstore/collections/myboard/posts", {
        method:"POST",
        headers:{
            "Content-type":"Application/json"
        },
        body:JSON.stringify(data)
    })
    .catch(e => alert(e))
}

export async function getTopics() {
    let data = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts")
    .then(res => res.json())
    
   return data;
}
export async function getComments() {
    let data = await fetch("http://localhost:3030/jsonstore/collections/myboard/comments")
    .then(res => res.json())
    
   return data;
}

export async function getSingleTopic(id) {
    let data = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts/"+id)
    .then(res => res.json())
    
   return data;
}
export async function postComment(postId, comment) {
    comment.postId=postId;
    await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`, {
        method:"POST",
        headers:{
            "Content-type":"Application/json"
        },
        body:JSON.stringify(comment)
    })
    .catch(e => alert(e))
}



