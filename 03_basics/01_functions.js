// Declaring a function...

function sayMyName(){
    console.log("M");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}

// sayMyName    //--> If we simply write then it contain refernce(address ki vofunction kaha pada h)
             // --> If we add paranthesis() then it execute.
// sayMyName()

// function addTwoNumbers(number1, number2){     // Here number1, number2 are the parameters.
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)                          // Here these are the arguments.

// function addTwoNumbers(number1, number2){     
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 4)             // Here in result it doesn't store anything and shows undefined because we do not return anything.
// console.log("result", result)

function addTwoNumbers(number1, number2){     
    
    let result = number1 + number2
    return result
    // return number1 + number2
}

let result = addTwoNumbers(3, 4)
// console.log(result);

// function loginUserName(username){
//     return `${username} just logged into our app`;
// }

// console.log(loginUserName("Mohit"));
// console.log(loginUserName(""));      //--> shows "just logged into out app"
// console.log(loginUserName());        // --> shows "undefined just logged into out app"

// function loginUserName(username){
//     if(username === undefined){                  // if(!username)  --> Both are equivalent.
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged into our app`;
// }

// console.log(loginUserName());

function loginUserName(username = "Sam"){               // Passing default value.
    if(username === undefined){                  
        console.log("Please enter username");
        return
    }
    return `${username} just logged into our app`;
}

// console.log(loginUserName());

// Sometimes in shopping cart a problem arise that people add too much itemas in cart and wedont know how
// much parameters we deined then we used rest operator(...)

// function calculateCartPrice(...num1) {
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 600, 2000))

// sometimes we use like this
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 400, 600, 2000))
// Ques. What the num1 contain now?
// Ans. It contain val1 = 200 , val2 = 400 and num1 = [600, 2000]

// Objects are passing in arrays parameter.

const user = {
    username: "Mohit",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)  or
handleObject({
    username: "Mohit",
    price: 999
})

// Here we need to apply some checks like price and we write in our function prices
// And we need to aslo check we are doing whole for objects so in paramter that are coming is object or not.


// Passing arrray to functions parameter.
const myNewArray = [10, 20, 30, 40, 50];

function returnSecondValue(anyArray){
    return anyArray[1]
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([100, 200, 300, 400, 500]));