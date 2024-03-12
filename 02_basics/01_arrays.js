// Arrays

const myArr = [0,1,2,3,4,5]
const myArr2 = new Array(1,2,3,4,5)
// const myArr = [0,1,2,3,4,5, true, "mohit"] // we can include another datatypes element also.
// These array are resiazable.
// 0-based indexing
// js arrays always follow Shallow copy(means reference is passed)
// deep copy means reference is not passed.
// console.log(myArr)
// console.log(myArr2);
// console.log(myArr2[0]);

// Array Methods
// myArr.push(6)       // It push the element at the last.
// console.log(myArr)
// myArr.pop()         // It pop the last element present in the array.
// console.log(myArr)
// myArr.unshift(9)    // It adds the '9' value at the begining of the array.
// console.log(myArr)
// myArr.shift()       // It remove the the one element at the begining.
// console.log(myArr)
// console.log(myArr.includes(1));
// console.log(myArr.includes(10));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // Convert all the myArr elements into stings of array.
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice , Splice
console.log("originalArray" , myArr)

const myn1 = myArr.slice(1,3) // Returns array. Not included the last element.
console.log(myn1)
console.log("After using slice method on myArr there is no effect on original array =>" , myArr)

const myn2 = myArr.splice(1,3) // Included the last element.
console.log(myn2)
console.log("After using splice method on myArr there is effect on original array =>" , myArr)

// Here is the major difference between slice and splice is....
//    slice  ==>  after apply slice method on original array the original is not changed.

//    splice ==>  After apply Splice method the original array are cut down to that part which we mention in splice parameters.


