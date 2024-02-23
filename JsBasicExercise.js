// Set Default Parameter Value For a Function
function sumD(x=10, y=2){
    console.log(x+y);
} 
// sumD(); //12
// sumD(2); //4
// sumD(5,8); //13


//Program to Loop Through an Object
const human = {
    "name": "Aditya",
    "age":22,
    "degree":"B.tech"
}
// The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
// Object.freeze(human)
human['age'] = 23
function Dloop(){
for(let key in human){
    let value = human[key];
    console.log(key,"-",value);
}
}
// Program to Add Key/Value Pair to an Object
human["phone"] = 7378781651; //1
human.city = "Hyderabad" //2
// Dloop()

//AgeToDays
function calculateDays(age){
    console.log(age*365);
}
// calculateDays(22)

// NOt Working
// const deviceMemory = navigator.deviceMemory;
// console.log(`The device has ${deviceMemory} GB of RAM.`);

// Write a function that determines if two strings are anagrams of each other  
function checkAnagrms(str1, str2){
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}
// console.log(checkAnagrms("Aditya","Raitya"))


// Create a JavaScript function that returns the Fibonacci sequence up to a given number, utilizing memoization for optimized performance.
function fibonacciWithMemoiztn(num){
    let memo = [0,1];
    for(let i = 2;i<num;i++){
        memo[i] = memo[i-1]+memo[i-2];
    }
    return memo;
}
// console.log(fibonacciWithMemoiztn(5));
