let person = {
    firstName : "Aditya",
    lastName : "Sawant",
    greet : ()=>{
        console.log("Hello World");
    },
    getFullname :function(){
        console.log(this.firstName+" "+this.lastName);
    } 
    
}

// person.greet();

//this
person.getFullname();

function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullname  = function(){
        console.log(this.firstName+" "+this.lastName);
    } 
}
let person2 = new Person('Ajay','totawad')
person2.getFullname();
