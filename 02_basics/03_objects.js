

// Object literals

const mySym = Symbol("Key1")               // Declaring a symbol.

const JsUser = {
    name: "Mohit",                          // intrnally name , age , location.... are taken by compiler 
    age: 19,                               //  as a string.
    [mySym] : "myKey1" ,                   // We cane declare without square bracket also but if we
    loation: "Jaipur",                     // check then typeOf of mySym is string we need to work these
    email: "mohitxyz@gmail.com",           // like a symbol so we use [].
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"],
    "Full_Name": "Mohit Kumawat"
}

console.log(JsUser.email)          // It is the one of the way.
console.log(JsUser["email"]);      // It is anothe way.
// But if in obejact elements are written as ("name": "Mohit") then we cannot access with dot operator.
console.log(JsUser["Full_Name"]);
console.log(JsUser[mySym]);

// Changing their values
JsUser.email = "mohit@gmaul.com"
// Object.freeze(JsUser)             // Now we cannot update JsUser
JsUser.email = "mohit@microsoft.com"

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())