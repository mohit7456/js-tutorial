const score = 400; // js automatically detect its data type is number.

// Now we explicitly define the datatype should be number by using Number object.

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2))

const anotherNumber = 12.8966;
console.log(anotherNumber.toPrecision(3));

const hundreds = 100000;
console.log(hundreds.toLocaleString());  // Making commas according to US currency 
console.log(hundreds.toLocaleString('en-IN')); // Accroding to indian currency


// +++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,2,5,8,3));

console.log(Math.random());  // Generate random values between 0 and 1......0.1234564 , 0.4578242 , 0.042364 etc...
console.log(Math.random() * 10) // Now here value comes in some digit without 0 including in begining.
console.log((Math.random() * 10) + 1) // Here by adding 1 means the value never be 0 its minimum value is 1.
console.log(Math.floor((Math.random() * 10) + 1)) // Here by adding floor() function the value dost not conatin decimal part.

// Here is a formula to do that in another way...

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // Now the value becomes in between 10 and 20.
