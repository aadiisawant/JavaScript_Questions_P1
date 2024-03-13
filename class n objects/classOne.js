const Person = {
    username : "adityasawant",
    name: "Aditya",
    getFunction : function(){
        console.log(`username: ${this.username}`)
        console.log(this);
    }
}
// Person.getFunction()

function user(username,loginCount,isLogedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLogedIn = isLogedIn
    this.greet = ()=> console.log(`hello! ${this.username}`)
    // return this  //implicitly defined
}
const userOne = new user("Aditya",12,true)
const userTwo = new user("Ram",15,false)
// console.log(userTwo.greet());
// var arr = [[a,1],[b,2],[a,3]]
