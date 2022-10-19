const assertArraysEqual = function(actual, expected) {
  let output = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i] || expected.length !== actual.length) {
      output = false; break;
    }
  }
  output === true ? console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`) : console.log(`🥲Assertion Not Passed: ${actual} !== ${expected}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

const eqArrays = function(actual, expected) {
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i] || expected.length !== actual.length) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {
  let newWords = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      newWords.push(item);
    }
  }
  console.log(newWords);
};

