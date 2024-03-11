// let p = new Promise((resolve,reject)=>{
//     let a = 6+5;
//     if(a==10){
//         resolve('success')
//     }else{
//         reject('Failed')
//     }
// })
// p.then((message) => console.log(message))
//  .catch((message) => console.log(message))

let userPresent = true
let userWatching = false

//with callbacks
function userWatchCallbacks(callback, errorCallback){
    if(!userPresent){
        errorCallback({
            name : "User Left",
            message : "Bad News"
        })
    } else if(userWatching){
        errorCallback({
            name: "watching memes",
            message : "Scrolling Social Media"
        })
    }else{
        callback( "User is doing the task given")
    }
}
// userWatchCallbacks((message)=>{
//     console.log('success : '+message);
// },(error)=>{
//     console.log(error.name +"\n"+error.message);
// })

// with promise
function userWatchCallbacksPromise(){
    return new Promise((resolve,reject)=>{
        if(!userPresent){
            reject({
                name : "User Left",
                message : "Bad News"
            })
        } else if(userWatching){
            reject({
                name: "watching memes",
                message : "Scrolling Social Media"
            })
        }else{
            resolve( "User is doing the task given.")
        }
    })
   
}
// userWatchCallbacksPromise()
// .then((message)=>{
//     console.log('success : '+message);
// })
// .catch((error)=>{
//     console.log(error.name +"\n"+error.message);
// })

const lectOne = new Promise((resolve,reject) =>{
    resolve('Lecture one is done')
})
const lectTwo = new Promise((resolve,reject) =>{
    resolve('Lecture 2 is done')
})
const lectThree = new Promise((resolve,reject) =>{
    resolve('Lecture 3 is done')
})
// all,race
// Promise.all([
//     lectOne, lectThree,lectTwo
// ]).then((messages)=>console.log(messages))
// console.log(lectOne === Promise.resolve(lectOne));

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(function(){
    let user = false;
    if(user){
        resolve({username:"Aditya",email:"adi@example.com"})
    }else{
        reject('Error : User not found')
    }
},2000)
})

// promiseThree.then((user)=>{
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.error(error)
// }).finally(()=> console.log("Finally Block"))

async function consumePromiseThree(){
    try{
    const response = await promiseThree
    console.log(response);
    }catch(error){
    console.log(error);  
    }
}
consumePromiseThree()
