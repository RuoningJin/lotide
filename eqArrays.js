const eqArrays = function(actuals, expected) {
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actuals[i] || expected.length !== actuals.length) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  let output;
  actual === expected ? (output = `😁😁😁Assertion Passed: ${actual} === ${expected}`) : (output = `🥲Assertion Passed: ${actual} !== ${expected}`);
  return output;
};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
