/**
 * 
 * @param  {...any} args 
 * @returns {number} sum of parameter number
 */



const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(1, 2, 3)); // 6
