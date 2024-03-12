const marvel_heroes = ["thor" , "Ironman" , "spiderman"]

const dc_heores = ["superman" , "flash" , "batman"]

// marvel_heroes.push(dc_heores)
// console.log(marvel_heroes); // it pushes the dc heros to as a 4th element in the array.

// const all_heors = marvel_heroes.concat(dc_heores)  // this method concat two arrays.
// console.log(all_heors);

// Now we have another array to to concat two arrays is 'SPREAD METHOD'
// const all_new_heors = [...marvel_heroes , ...dc_heores]
// console.log(all_new_heors);

const another_array = [1 , 2 , 3 , [4 , 5 , 6], 7 , [6 , 7 , [4 , 5]]]

const real_another_array = another_array.flat(Infinity)  // flat method convert the multi-dimensional array to single dimensional array.
// At the place of infinity we define depth(how much dimensional we need to flat ...1,2,3).

// console.log(Array.isArray("Mohit")); // it checks is it array.
// console.log(Array,from("Mohit")); // convert it in array.
// console.log(Array.from({name: "Mohit"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3)); // put the elements in the array. 