console.log('person1:shows ticket');
console.log('person2:shows ticket');

// const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000);
// });

// const getPopcorn=promiseWifeBringingTicks.then((t)=>{
// // console.log(`person3:shows ${t}`);
// console.log('wife:i have the tickets');
// console.log('husband:we should go in');
// console.log('wife:no i am hungry');
// return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
// });

// const getButter=getPopcorn.then((t)=>{
//     console.log('husband:ok i got some popcorn')
//     console.log('husband:we should go in');
//     console.log('wife:no i need butter on my popcorn');
//     return new Promise((resolve,reject)=>resolve(`${t} butter`)); 
// });

// getButter.then((t)=>console.log(t));

const preMovie=async()=>{
const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000);
});

const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
const addButter=new Promise((resolve,reject)=>resolve(`butter`));
const getColdDrinks=new Promise((resolve,reject)=>resolve(`colddrink`));

let ticket;
try{
    ticket=await promiseWifeBringingTicks;
}
catch(e){
    ticket='sad face';
}
console.log(`wife:i have the ${ticket}`);
console.log('husband:we should go in');
console.log('wife:no i am hungry');

let popcorn= await getPopcorn;
    console.log(`husband:ok i got some ${popcorn}`)
    console.log('husband:we should go in');
    console.log('wife:no i need butter on my popcorn');

    let butter=await addButter;
    console.log(`husband:i got some ${butter} on popcorn`);
    console.log(`husband:anything else darling?`);
    console.log(`wife:i need some cold drinks`);
   
    let colddrink=await getColdDrinks;
console.log(`husband:i got some ${colddrink} with pocorn`);
console.log(`wife:let's go,we will miss the movie now`);
console.log(`husband:thank you for the reminder *grins*`);

//promise.all
// let [popcorn,butter,colddrink]= await Promise.all([getPopcorn,addButter,getColdDrinks]);
// console.log(`${popcorn},${butter},${colddrink}`);

return ticket;
};

preMovie().then((m)=>console.log(`person3:shows ${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');