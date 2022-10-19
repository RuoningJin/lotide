const eqArrays = function(actual, expected) {
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i] || expected.length !== actual.length) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  let output;
  actual === expected ? (output = `😁😁😁Assertion Passed: ${actual} === ${expected}`) : (output = `🥲Assertion Not Passed: ${actual} !== ${expected}`);
  console.log(output);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

