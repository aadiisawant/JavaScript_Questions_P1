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

//String in alphabetical order
function StringAlphabeticalOrder(InputString){
  console.log(InputString.split("").sort().join(""));
}
// let InputString = "Aditya";
//StringAlphabeticalOrder(InputString);

//1st letter of word in upper case
function firstLinUpper(str){
    
    console.log(str.split(" ").map((word)=>{
       return word.charAt(0).toUpperCase()+word.substring(1)
    }).join(" "))
}
// firstLinUpper("arey bhai kya kar rahe hon?")

//number of occurrences of each letter in specified string
function StrOccurns(str){
    let occurrencesObj= {};
    str.split("").forEach((elem) => {
        if(occurrencesObj.hasOwnProperty(elem) === false){
            occurrencesObj[elem] = 1;
        }else{
            occurrencesObj[elem] += 1;
        }
    });
    console.log(occurrencesObj);
}
StrOccurns("aditya")