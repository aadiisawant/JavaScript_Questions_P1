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
