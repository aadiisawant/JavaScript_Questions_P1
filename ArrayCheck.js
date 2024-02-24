function checkArray(ele){
    return Array.isArray(ele);
}
// console.log(checkArray({})); //[]-> array ,{}-> object


var arr = [1,2,3,4,5,6]
//empty the arr without using loops
// arr.length=0
// let arr1 =arr.concat(arr)
// console.log(arr1);

// a is number or not
let aNum = 15
// console.log(Number.isInteger(aNum));
function isNum(aNum){
    if(aNum %1 ==0){
        console.log("Its a Number");
    }else{
        console.log("Not !");
    }
}
// isNum(aNum)


// Write a function that takes an array of integers as input and returns a new array with only the unique elements. 
function uniqueArr(arr){
    return Array.from(new Set(arr))
}
// console.log(uniqueArr([1,2,3,1,4,2,5,3,5]));

// Given a string, write a function to count the occurrences of each character in the string. 
function StrOcc(str){
    let charOcc = {};
    for(let char of str){
        charOcc[char] = (charOcc[char]||0)+1;
    }
    return charOcc;
}
// console.log(StrOcc("aditya"));

let isArr= [1,2,3,4,5]
let notarr = {a:2,b:3}
// console.log(Array.isArray(isArr));

//using closure 
var addThree = createBase(3)
function createBase(baseNum){
    return function(n){
        return baseNum + n;
    }
}
console.log(addThree(10))