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

const without = function(source, itemsToRemove) {
  let newWords = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      newWords.push(item);
    }
  }
  return newWords;
};