function multiplyBy5(num){
    var numb = num
    return numb*5;
}
multiplyBy5.power = 5
// console.log(multiplyBy5(6));
// console.log(multiplyBy5.prototype);
// console.log(multiplyBy5.power);
function createUser(username,score){
    this.username = username
    this.score = score
    return this
}
// console.log(createUser("TEA",12));
createUser.prototype.printMe = function(){
    // this is (jis), jis ne vi bulaya uska
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("chai",12)
//new keyword is must
chai.printMe()
