const name = "Mohit "
const repoCount = 25

// console.log(name + repoCount + " Value");
// This syntax is older so try another way...

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Here (  '`' => backtick(present under the escape button))

// Another way to Declare string by using string Object
const gameName = new String('Mohit')
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());  // It does not change the original value.
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.bold());

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-2,4)
console.log(anotherString);

const newStringOne = "   Mohit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:google.com"
console.log(url.replace('com' , "yahoo"))
console.log(url.includes('google'));

const gameName2 = "Ram-Sita-Laxman-ji"
console.log(gameName2.split('-'));
