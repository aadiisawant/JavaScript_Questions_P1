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