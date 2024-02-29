// Data are put in memory on the majorily basis of how data is stroed in memory and how we access it.

// 1. Primitive(call by value) => changes in copy not their actual memory locations.
// 7 types   : 1. String
//             2. Number 
//             3. Boolean
//             4. Null
//             5. Undefined 
//             6. Symbol
//             7. BigInt

// Javascript is dynamically typed language because it identify the variable type at runtime.

// 2. Non-Premetive(call by reference)
// Array , Objects , Functions    => Important


// Declare symbol(uniqueness)

// const id = Symbol('123')
// const anotherId = Symbol('123')

// let check it work properly ...
// console.log(id === anotherId);


// Declare bigInt
// const bigNumber = 478545466778974
// console.log(typeof bigNumber);


// Declaring basic array

const heros = ["shaktiman" , "naagraj" , "doga"];


// Declaring object(key=value pair)

let myObj = {
    name: "Mohit",
    age: 27
}

// Declaring funstions

const myFunction = function(){
    console.log("Hello world");
}