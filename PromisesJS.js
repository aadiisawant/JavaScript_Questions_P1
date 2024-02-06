function getUsers(){
    let users =[];
    setTimeout(()=>{
        users = [
            {username : "adi",email: 'adisawant@gmail.com'},
            {username : "dharma",email: 'dharma@gmail.com'} 
        ]
    },1000)
    return users;
}

function findUser(username){
    const users =getUsers();
    const user = users.find((user)=>{
        user.username === username
    })
    return user
}
console.log(findUser('adi')) // undefined
