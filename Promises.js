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
userWatchCallbacksPromise()
.then((message)=>{
    console.log('success : '+message);
})
.catch((error)=>{
    console.log(error.name +"\n"+error.message);
})