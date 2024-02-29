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

// const heros = ["shaktiman" , "naagraj" , "doga"];


// Declaring object(key=value pair)

// let myObj = {
//     name: "Mohit",
//     age: 27
// }

// Declaring funstions

// const myFunction = function(){
//     console.log("Hello world");
// }

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// ****************************************************************************************************

//     (change in copy)   Stack => (Primitive) ,(change in original position) Heap => (Non - Premetive)

// Primitive(Only copy is paassed) Using Stack
let myYoutubeChannel = "MohitGaming"
let anotherYoutubeChannel = myYoutubeChannel
anotherYoutubeChannel = "TarunGaming"

console.log(anotherYoutubeChannel);  // ....=> TarunGaming
console.log(myYoutubeChannel);       // ....=> MohitGaming

// Non-Primitive(Reference is passed) Using Heap
let userOne = {
    email: "mohit@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "mohit@Yahoo.com"

console.log(userOne.email);  // ....it take reference so email is yahoo.com
console.log(userTwo.email);  // same here point same memory location so Yahoo.com