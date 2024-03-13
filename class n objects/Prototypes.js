let myName = "Aditya    "

// console.log(myName.trim().length);

let heros = ["ironman", "blackpanther"]

let superHeros = {
    thor : "Hammer",
    spiderman : "sling",
    getPowers : function(hero){
        heroName = hero
        console.log(`The power of ${heroName} is ${this.hero}`);
    }
}

Object.prototype.aditya = function(){
    console.log(`Aditya is present in all objects`);
}
superHeros.aditya()
superHeros.getPowers("thor")
Array.prototype.arradi = function(){
    console.log("Arrays prototype");
}
// heros.arradi()
// superHeros.arradi()

String.prototype.trueLength = function(){
    console.log(`TrueLength is ${this.trim().length}`)
}
myName.trueLength()
"ssfahf   ".trueLength()