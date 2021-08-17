// const posts=[
//     {title:'Post One',body:'This is post one'},
//     {title:'Post Two',body:'This is post two'}
// ];
// // function getPosts(){
// //     setTimeout(()=>{
// // let output='';
// // let output1=`<li>${this.title}</li>
// // <button onclick=getLastEditTime1()>Last Edited</button>
// // <div id='placeholder1'>post one last edited </div>`;z
// // let output2=`<li>${this.title}</li>
// // <button onclick=getLastEditTime2()>Last Edited</button>
// // <div id='placeholder2'>post two last edited </div>`;
// // let output3=`<li>${this.title}</li>
// // <button onclick=getLastEditTime3()>Last Edited</button>
// // <div id='placeholder3'>post three last edited </div>`;
// // let output4=`<li>${this.title}</li>
// // <button onclick=getLastEditTime4()>Last Edited</button>
// // <div id='placeholder4'>post four last edited </div>`;
// // // for(let i=0;i<posts.length;i++){
// // // output+= `<li>${this.title}</li>`;
// // // }

// // document.body.innerHTML=output+output1+output2+output3+output4;
// //     },1000);
  
// // }
// function getPosts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post)=>{
//             output+=`<li>${post.title}</li>
//             <button id='${post.body}' onclick='getLastEditTime()'>${post.body}</button>
//             <div id='placeholder1'>1st post</div>`;
//             });
 
//         document.body.innerHTML=output;
//         //`<div id='placeholder1'>1st post</div>`;
//         // `<div id='placeholder2'>2nd post</div>`;
//         // `<div id='placeholder3'>3rd post</div>`;
//         // `<div id='placeholder4'>4th post</div>`;
//     },1000);
// }

// function createPost(post,callBack){
// setTimeout(()=>{
//     posts.push(post);
//     callBack();
// },2000);
// }
// // const buttonNode=document.getElementById('${posts.body}');

// function getLastEditTime(){
//     var date1=document.lastModified;
//     document.getElementById('placeholder1').innerHTML=date1;
// }
//     // var date2=document.lastModified;
//     // document.getElementById('placeholder2').innerHTML=date2;
//     // var date3=document.lastModified;
//     // document.getElementById('placeholder3').innerHTML=date3;
//     // var date4=document.lastModified;
//     // document.getElementById('placeholder4').innerHTML=date4;
   
// // function getLastEditTime1(){
// //     var date1=document.lastModified;
// //     document.getElementById('placeholder1').innerHTML=date1;
// // }
// //     function getLastEditTime2(){
// //         var date2=document.lastModified;
// //         document.getElementById('placeholder2').innerHTML=date2;
// //     }
// //     function getLastEditTime3(){
// //         var date3=document.lastModified;
// //         document.getElementById('placeholder3').innerHTML=date3;
// //     }
// //     function getLastEditTime4(){
// //         var date4=document.lastModified;
// //         document.getElementById('placeholder4').innerHTML=date4;
// //     }


// createPost({title:'Post Three',body:'This is post three'},getPosts);
// createPost({title:'Post Four',body:'This is post four'},getPosts);

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts();

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);
createPost({ title: 'Post Four', body: 'This is post four'}, getPosts)