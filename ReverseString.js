var str = "Aditya"
//split the str with "" nothing and then join("") with nothing
// console.log(str.split("").reverse().join("")); //aytidA
function rev(){
var str2 = "Hello this is Aditya Sawant";
console.log(str2.split("").reverse().join(""));
}
// rev()


function revWords(){
const revStr =str2.split(" ").map((word)=>{
   return word.split("").reverse().join("")
}).join(" ")
console.log(revStr);
}
// revWords()

//palimdrome
function isPalindrome(str){
    let revString= str.split("").reverse().join("")
    var isPal = (revString===str)?'Its Palindrome': 'Not a Palindrome' ;
    console.log(isPal);
}
// isPalindrome("malayalam")


var Num =12345
function revNum(n){
    console.log( Number(n.toString().split("").reverse().join("")));
}
// revNum(Num)
