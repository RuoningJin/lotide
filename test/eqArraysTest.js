const eqArrays = require('../eqArrays');

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(eqArrays([1, 2, 3, 4], [1, 2, 3])); // => should PASS
