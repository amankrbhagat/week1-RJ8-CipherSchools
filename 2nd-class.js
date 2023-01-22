// 1. .map()

//by normal method
//  let array = [2, 4, 6, 8, 10];
//  let newArray = [];

//  for(let i = 0; i < array.length; i++) {
//     newArray[i] = array[i] * array[i];
//  }
//  console.log(newArray);

//by .map function

// let array = [2, 4, 6, 8, 10];

// // function functionForMap(element) {
// //     return element * element;
// // }

// let newArray = array.map(functionForMap);
// console.log(newArray);

//or

// let array = [2, 4, 6, 8, 10];

// let newArray = array.map((element, index) => {
//     console.log(index);
//     return element * element;
// });
// console.log(newArray);

//In JS, a function is also a JS object

// .forEach()

// let array = [1, 2, 3, 4, 5];
// array.forEach((element, index) => {
//     element *= element;
//     console.log(element);
// });

// console.log("Array is: ", array);


// .filter()

// let array = [10, 20 ,30, 40, 50];
// let newArray = array.filter((element) => element >= 30);
// console.log(newArray);

// .find()

// let array = [10, 20 ,30, 40, 50];
// let temp = array.find((value) => {
//     return value > 20;
// });
// console.log(temp

// .sort()

// let array = [50, 40, 30, 20, 10];
// let sortedArray = array.sort();
// console.log(sortedArray);

// let array = [50, 40, 111, 30, 20, 10];
// let sortedArray = array.sort((el1, el2) => {
//     el1 = Number(el1);
//     el2 = Number(el2);
//     return el2 - el1;
// });
// console.log(sortedArray);

// Object Destructuring

// let details = {
//     name: "Alex",
//     age: 24,
//     address: {
//         street: "Brooklyn",
//         city: "New York",
//         state: "NY",
//         country: "USA",
//         passportDetails: {
//             passportNumber: "ABCD1234",
//         },
//     },
// };
// //console.log(details.address.passportDetails.passportNumber);

// // let myName = details.name;
// // let age = details.age;
// //or
// let { name: myName, age} = details;

// console.log(myName, age);

//Object Matching

// let obj1 = { name: "Aman", age: 24};
// let obj2 = {name: "Aman"};

// function areEqual(obj1, obj2) {
//     if (obj1 == obj2) {
//         return true;

//     }
//     if (Object.keys(obj1).length != Object.keys(obj2).length) {
//         return false;
//     }
//     for (let key of Object.keys(obj1)) {
//         if (typeof obj2[key] === "undefined") {
//             return false;
//         }
//         if (obj2[key] !== obj1[key]) {
//             return false;
//         }
//         return true;
//     }
// }
// console.log(areEqual(obj1, obj2));

// Map and Set

// let map = new Map();
// map.set(1, "Aman");
// map.set(2, "Alex");
// console.log(map);

// let set = new Set();
// set.add(1);
// set.add(-1);

// console.log(set);

// Class

// class Animal {
//     noOfLegs;
//     color;
//     family;
//     sound;

//     constructor(noOfLegs, color, family, sound) {
//         this.noOfLegs = noOfLegs;
//         this.color = color;
//         this.family = family;
//         this.sound = sound;
//     }
//     showAnimal() {
//         console.log(`The animal belongs to family ${this.family}`);
//     }
// }

// let animal = new Animal(4, "brown", "rodent", "Phew Phew");
// //console.log(animal);
// animal.showAnimal();


