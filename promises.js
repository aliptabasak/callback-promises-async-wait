// const posts=[
//     {title:'Post One',body:'This is post one'},
//     {title:'Post Two',body:'This is post two'}
// ];
// function getPosts(){
//     setTimeout(()=>{
// let output='';

// posts.forEach((post,index)=>{
// output+= `<li>${post.title}</li>`

// });

// document.body.innerHTML=output;
//     },1000);
  
// }

// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
//             const error=false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject('Error');
//             }
//         },2000);
//     });
//     }
//     function deletePost(post){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//               posts.pop(post);
//               const n=posts.length;
//               if(n!=0){
//                   resolve();
//               }else{
//                   reject('Error');
//               }
//             },1000);
//         });
//     }
//     createPost({title:'Post Three',body:'This is post three'}).then(getPosts).catch(err=>console.log(err));
//     createPost({title:'Post Four',body:'This is post four'}).then(getPosts).catch(err=>console.log(err));
//     // deletePost(posts[3]).then(getPosts).catch(err=>console.log(err));
//     // deletePost({title:'Post Two',body:'This is post two'}).then(getPosts).catch(err=>console.log(err));

// const promise1=Promise.resolve('Hello World');
// const promise2=10;

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

createPost({ title: 'Post Three', body: 'This is post three'})
    .then(getPosts)
    .catch(err => console.log(err));

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


