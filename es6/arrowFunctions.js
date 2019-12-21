/**
 * Challenge
 * 
 * Rewrite the function assigned to the variable magic which returns a new Date() 
 * to use arrow function syntax. Also make sure nothing is defined using the keyword var.
 * 
 */

/* var magic = function () {
    "use strict";
    return new Date();
}; */



const magic = () => new Date();


const doubler = (item) => item * 2;

console.log(doubler(8));

console.log(doubler(8));
console.log(doubler(2));
console.log(doubler(90));
console.log(doubler(34));

const myConcat = (arr1, arr2) => arr1.concat(arr2);
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
