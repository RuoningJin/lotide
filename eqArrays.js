const eqArrays = function(actual, expected) {
  for (const i in actual) {
    if (expected[i] !== actual[i] || expected.length !== actual.length) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  let output;
  actual === expected ? (output = `😁😁😁Assertion Passed: ${actual} === ${expected}`) : (output = `🥲Assertion Not Passed: ${actual} !== ${expected}`);
  return output;
};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
