// Promise is a class in JS
// constructor (function)

// let myPromise = new Promise((fulfilled, notFulfilled) => {
//     // let num1 = 10;
//     // let num2 = 15;
//     let sum = num1 + num2;
//     if (sum > 24) {
//         fulfilled();

//     }else {
//         notFulfilled();
//     }
// });
// myPromise
// .then(() => {
//     console.log("Promish was fulfilled");
// })
// .catch(() => {
//     console.log("Promise was not fulfilled")
// });

// function addTwoNumbers(num1, num2) {
//     let sum = 0;
//     setTimeout(() => {
//         console.log(num1 + num2);
//         sum = num1 + num2;
    
//     }, 5000);
//     console.log("Inside addTwoNumbers");
//     return sum;
// }
// console.log(addTwoNumbers(2, 3));

// function addTwoNumbers(num1, num2) {
//        return new Promise((fulfilled, notFulfilled) => {
//     setTimeout(() => {
//            console.log("Inside setTimeout");
//            fulfilled(num1 + num2);
//     }, 5000);
//     notFulfilled(new Error("An error occured!"));
// });

//        }

// addTwoNumbers(10, 5)
//  .then(() => {
//    console.log("Promish was fulfilled");
// })
//  .catch(() => {
//      console.log("Promise was not fulfilled")
//  });
