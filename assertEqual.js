const assertEqual = function(actual, expected) {
  let output;
  actual === expected ? (output = `😁😁😁Assertion Passed: ${actual} === ${expected}`) : (output = `🥲Assertion Passed: ${actual} !== ${expected}`);
  console.log(output);
};
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(67, 66 + 1);