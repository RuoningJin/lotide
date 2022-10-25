const middle = function(array, expected) {
  const assertArraysEqual = require('./assertArraysEqual');
  
  let index = array.length / 2 - 1;
  let newArray = [];

  if (array.length < 3) {
    return assertArraysEqual(newArray, expected);
  }
  if (array.length % 2 === 0) {
    newArray.push(array[index], array[index + 1]);
  }
  
  if (array.length % 2 !== 0) {
    newArray.push(array[Math.ceil(index)]);
  }

  return assertArraysEqual(newArray, expected);
};

module.exports = middle;
