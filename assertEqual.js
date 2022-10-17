const assertEqual = function(actual, expected) {
  let output;
  actual === expected ? (output = `😁😁😁Assertion Passed: ${actual} === ${expected}`) : (output = `🥲Assertion Passed: ${actual} !== ${expected}`);
  return output;
};
console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
console.log(assertEqual(67, 66 + 1));