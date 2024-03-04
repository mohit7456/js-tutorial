let myDate  = new Date()

// console.log(myDate)  // Not readable format
// console.log(myDate.toString());  // some readable fromat try another some
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// create our own date
// let myCreateDate = new Date(2023 , 0 , 23)
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2024 , 0 , 23 , 5 , 3)
//console.log(myCreateDate.toLocaleDateString());

// let createMyDate = new Date("01-14-2024")
// console.log(createMyDate.toLocaleDateString());

// --------------Timestamp --------------

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // in miliseconds when we need to compare

// console.log(Math.floor(myTimeStamp/1000));  // Now in Seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1 ); // +1 for 0 based indexing.
console.log(newDate.getDay());
console.log(newDate.getHours());

newDate.toLocaleString('default' , {
    weekday: "long" // Here we customize the loaclestring more like we write monday to Mon by using suggestion through ctrl + space
})

