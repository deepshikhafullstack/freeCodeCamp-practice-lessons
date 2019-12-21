/**
 * Modify the function increment by adding default parameters so 
 * that it will add 1 to number if value is not specified
 */

 /**
  * Return sum of two numbers
  * @param {number} number 
  * @param {number} value @default 1
  * @returns {number}
  */
const increment = (number, value =1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
