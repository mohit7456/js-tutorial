//  const tinderUser = new Object()     ----> it produce singleton Object.

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Mohit",
            lastName: "Kumawat"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

// Joining two objects.
const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "a" , 4: "b"};
const obj3 = {5: "a" , 6: "b"};

// using assign(obj1 , obj2)  ----> Here all the element of obj2 goes to obj1 . So obj1 is merged form and it return object.
// best way to use empty object ----> assign({} , obj1 , obj2)......all the object element goes in a new empty object{}.

// const obj4 = Object.assign({} , obj1 , obj2 , obj3);
// console.log(obj4);

// Easy way
const obj4 = {...obj1 , ...obj2 , ...obj3};
// console.log(obj4);

// When we fetch data through database it returns Array of Objects.something like that....
const users = [
    {
        id: 1,
        email: "mohit@gmail.com"
    },
    {
        id: 2,
        email: "mohit@gmail.com"
    },
    {
        id: 3,
        email: "mohit@gmail.com"
    },
    {
        id: 4,
        email: "mohit@gmail.com"
    }
]

// console.log(users[1].id);
// console.log(Object.keys(tinderUser));   // Access all the keys of tinder object.
// console.log(Object.values(tinderUser)); // Access all the values of tinder object.
// console.log(Object.entries(tinderUser)); // It retruns array of arrys.
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Checking element is present or not.

// Object De-Structure(bar bar bade name likhne ki bajay chote name use name karna)
const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// We know that we need to use courseInstrucor again and again so we write whole thing course.courseInstructor instead of this.
// const {courseInstructor} = course
// Now simply use courseInstructor
// console.log(courseInstructor);
// if we want to that courseInstructor is too big name to write instead of this we give our own name also.
const {courseInstructor: instructor} = course
console.log(instructor);

// Usually in the backend the responses coming from APIs are in the form of JSON format.
// {
//     "name": "Mohit",
//     "class": "10th"
// }

// sometimes they are in array of objects.
// [
//     {},
//     {},
//     {}
// ]

