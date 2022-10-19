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

const middle = function(array) {
  let index = array.length / 2 - 1;
  let newArray = [];
  if (array.length < 3) {
    console.log(newArray);
  } else if (array.length % 2 === 0) {
    newArray.push(array[index], array[index + 1]);
    console.log(newArray);
  } else if (array.length % 2 !== 0) {
    newArray.push(array[Math.ceil(index)]);
    console.log(newArray);
  }
  return newArray;
};
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);