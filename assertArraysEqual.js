const eqArrays = function(actuals, expected) {
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actuals[i] || expected.length !== actuals.length) {
      return `🥲Assertion Passed: ${actuals} !== ${expected}`;
    }
  }
  return `😁😁😁Assertion Passed: ${actuals} === ${expected}`;
};


console.log(eqArrays([1, 2, 3], [1, 3, 2]));