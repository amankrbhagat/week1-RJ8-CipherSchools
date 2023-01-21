 // In JavaScript, we can declare a variable in 3 ways :-
//  1. By using var
//  2. By using let
//  3. By using const

// const mYName = [];
// console.log(mYName);
// mYName.push("John");
// console.log(mYName);

// let mYName = "John";
// console.log(mYName);
// mYName = "Alex";
// console.log(mYName);


// var mYName = "John";
// console.log(mYName);
// mYName = "5";
// console.log(mYName);

// var mYName = "Taylor";
// console.log(mYName);


// ***String Interpolation***

// let firstName = "Aman";
// let middleName = "Kumar";
// let lastName = " Bhagat";
// console.log( firstName + " " + middleName + "" +lastName);
//OR we can do this way
//  let fullName = firstName + " " + middleName + " " + lastName;
//  console.log(fullName);

//Now using string Interpolation we can do it by this way:-

// let fullName = `${firstName} ${middleName} ${lastName}`;
// console.log(fullName);
// console.log(firstName);


// ***Default Params(parameter parsing)***

// function addTwoNumbers(num1, num2) {
//     return num1 + num2 ;
// };
// console.log(addTwoNumbers(1, 3));

// let addTwoNumbers = (num1, num2) => { // this is called arrow function
//     return num1 + num2 ;
// };
// console.log(addTwoNumbers(1, 3));

// let addTwoNumbers = (num1, num2) => num1 + num2 ; // this is called arrow function

// console.log(addTwoNumbers(1, 3));

// let addTwoNumbers = (num1, num2) => {
//     console.log(num1);
//     console.log(num2); 
//     return num1 + num2 ;
// };
// console.log(addTwoNumbers(1, 3));

// let addTwoNumbers = (num1, num2 = 4) => {
//     console.log(num1);
//     console.log(num2); 
//     return num1 + num2 ;
// };
// console.log(addTwoNumbers(1, ));

// let addTwoNumbers = (num1, num2 = 4) => {
//     console.log(num1);
//     console.log(num2); 
//     return num1 + num2 ;
// };
// console.log(addTwoNumbers(1, 6));

//Rest and Spread Operator are apppliicable in Arrays and Objects in JS

// let array = [ 5, 10, 15, 20, 25];

// // Spread operator is denoted by ... (three dots)
// let newArray = [2, 3, 4, ...array, 30, 35, 40, 45];
// console.log(newArray); // complete array got printed
// console.log(array);
// console.log(...newArray); // only the elements printed


// Rest operator is denoted by ... (three dots)

// let maxOfNumbers = (...numbers) => {
//     let maximum = Number.MIN_VALUE;
//     for(let number of numbers) {
//         maximum = Math.max(maximum, number);
//     }
//     return maximum;
// };
//   console.log(maxOfNumbers (1, 2, 3, 4, 5, 6, 7, 8, 9, 10) );

//For Object

// let object = {
//     name: "John",
//     age: 30,
//     address: {
//        city: "Delhi",
//        State: "Delhi",
//        Country: "India",
// },
// };

// //let object2 = {...object, name: "Aman", country: "India", hobby: "Playing video games",}; // for shallow cloning
// let object2 = JSON.parse(JSON.stringify(object)); // for deep cloning
// object2.address.city = "Mukharji Nagar";
// console.log(object2);
