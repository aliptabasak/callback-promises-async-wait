const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} ${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


function createPost(post) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        });
    });

}

// createPost({ title: 'Post Three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));

function deletePost() {
    return new Promise((resolve, reject) => {
        if(posts.length > 0){
            setTimeout( () => {
                resolve();
            }, 1000);
        }
        else{
            reject('Error: Array is empty now');
        }
    });
}

const timerId = setInterval(() => {
    deletePost()
        .then(()=>{
            posts.pop();
            let lastPost = document.querySelector('body').lastChild;
            lastPost.parentNode.removeChild(lastPost);
        })
        .catch(err => {
            console.log(err);
            // arrayEmpty=true;
            clearInterval(timerId);
        });
}, 2000)

//make createpost and deletepost async wait
async function init(){
    await createPost ({ title: 'Post Three', body: 'This is post three'});
    await createPost ({ title: 'Post Four', body: 'This is post four'});
    getPosts();
    deletePost();
}
init();


