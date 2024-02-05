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
Object.freeze(human)
human['age'] = 23
function Dloop(){
for(let key in human){
    let value = human[key];
    console.log(key,"-",value);
}
}
// Dloop()