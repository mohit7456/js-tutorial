// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);   // It convert the string to number
// console.log("02" > 1);

// console.log(null > 0);   // here comparison operation(>= , <= etc...does
// console.log(null == 0);  // not convert null => 0. Here '==' or comaprison opeartor '>=' work differently.
// console.log(null >= 0);  // but in these case it treat null as 0.

// console.log(undefined == 0);
// console.log(undefined < 0);    // Avoid this type of comparison because sometimes it converts null => NaN and null => 0.
// console.log(undefined > 0);


// ===  => strict check
console.log("2" === 2);  // Here it checks strictly it checks with number and datatype also ,Now it returs false.

