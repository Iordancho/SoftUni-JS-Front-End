let posts;

function attachEvents() {
    document.querySelector('#btnLoadPosts').addEventListener('click', loadPosts);
    document.querySelector('#btnViewPost').addEventListener('click', viewPostComments);
}

async function viewPostComments() {
    const selectedPost = document.querySelector('#posts').value;
    const response = await (await fetch('http://localhost:3030/jsonstore/blog/comments')).json();

    const comments = Object.values(response).filter(comment => comment.postId === selectedPost);
    const currPost = Object.values(posts).find(post => post.id === selectedPost);
    const currPostTitle = currPost.title;
    const currPostBody = currPost.body;

    const title = document.querySelector('#post-title');
    title.textContent = currPostTitle;

    const body = document.querySelector('#post-body');
    body.textContent = currPostBody;
    
    const commentsList = document.querySelector('#post-comments');
    commentsList.textContent = "";
    comments.forEach(comment => {
        const item = document.createElement('li');
        item.textContent = comment.text;
        commentsList.appendChild(item);
    })
}

async function loadPosts() {
    const response = await (await fetch('http://localhost:3030/jsonstore/blog/posts')).json();

    posts = response;
    const listOptions = document.querySelector('#posts');
    listOptions.textContent = "";

    Object.values(response).forEach(post => {
        const option = document.createElement('option');
        option.value = post.id;
        option.text = post.title;

        listOptions.appendChild(option);
    });
}

attachEvents();