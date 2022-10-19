const assertArraysEqual = function(actual, expected) {
  let output = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i] || expected.length !== actual.length) {
      output = false; break;
    }
  }
  output === true ? console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`) : console.log(`🥲Assertion Not Passed: ${actual} !== ${expected}`);
};

const eqArrays = function(actual, expected) {
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i] || expected.length !== actual.length) {
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

assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]);
