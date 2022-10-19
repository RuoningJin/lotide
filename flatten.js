const assertArraysEqual = function(actuals, expected) {
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actuals[i] || expected.length !== actuals.length) {
      return `🥲Assertion Passed: ${actuals} !== ${expected}`;
    }
  }
  return `😁😁😁Assertion Passed: ${actuals} === ${expected}`;
};

const eqArrays = function(actuals, expected) {
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actuals[i] || expected.length !== actuals.length) {
      return false;
    }
  }
  return true;
};

const flatten = function(arrays) {
  let newArr = [];
  for (let array of arrays) {
    if (Array.isArray(array)) {
      for (let arr of array) {
        newArr.push(arr);
      }
    } else {
      newArr.push(array);
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
