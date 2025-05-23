// Primitive

//  7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol("123");
const anotherId = Symbol("123");

console.log(Id === anotherId);

const bigNumber = 2313133212564546554n


//  Reference (NOn primitive)

// Array, Objects, Functions

const heros = ["captain", "ironman"];
let myObj = {
    name: "biplop",
    age: 23,


}

const myFunction = Function(){
    console.log("hello world");

}

