let score1 = 33


console.log(typeof score1)
console.log(typeof (score1))  // passing as a method
let valueInNumber1 = Number(score1)

console.log(typeof valueInNumber1)
console.log(valueInNumber1)


let score2 = "123abc"

console.log(typeof score2)
console.log(typeof (score2))  // passing as a method
let valueInNumber2 = Number(score2)

console.log(typeof valueInNumber2)
console.log(valueInNumber2)


let score3 = null

console.log(typeof score3)
console.log(typeof (score3))  // passing as a method
let valueInNumber3 = Number(score3)

console.log(typeof valueInNumber3)
console.log(valueInNumber3)


let score4 = undefined

console.log(typeof score4)
console.log(typeof (score4))  // passing as a method
let valueInNumber4 = Number(score4)

console.log(typeof valueInNumber4)
console.log(valueInNumber4)


let score5 = true

console.log(typeof score5)
console.log(typeof (score5))  // passing as a method
let valueInNumber5 = Number(score5)

console.log(typeof valueInNumber5)
console.log(valueInNumber5)


console.log(typeof NaN)   


     // type of NaN => number
     // "33"        => number
     // "33abc"     => NaN
     // null        => 0
     // undefined   => NaN
     // true/false  => 1/0

     let LoggedIn1 = ""


     let boolIsLoggedIn1 = Boolean(LoggedIn1)
     console.log(boolIsLoggedIn1)



     let LoggedIn2 = "Mohit"


     let boolIsLoggedIn2 = Boolean(LoggedIn2)
     console.log(boolIsLoggedIn2)


     let SomeNumber = 33

     let StringNumber = String(SomeNumber)
     console.log(StringNumber)
     console.log(typeof StringNumber)



     //  ***************************************** Operations ******************************************

     let value = 3

     let negValue = -value
     console.log(negValue);

     // console.log(2+2)
     // console.log(2-2)
     // console.log(2*2)
     // console.log(2**3)    // 2 ki power 3(Power Operations)
     // console.log(2/2)
     // console.log(2%2)     // remainder

     let str1 = "Hello"
     let str2 = " Mohit"

     let str3 = str1 + str2
     console.log(str3)

     console.log("1" + 2);
     console.log(1 + "2");
     console.log("1" + 2 + 2);
     console.log(1 + 2 + "2");   // Move from left to right
     console.log(+true);

     let gameCounter1 = 100;
     gameCounter1++;
     console.log(gameCounter1);
     let gameCounter2 = 100;
     ++gameCounter2
     console.log(gameCounter2);