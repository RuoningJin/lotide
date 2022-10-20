const assertEqual = function(actual, expected) {
  let output;
  actual === expected ? (output = `😁😁😁Assertion Passed: ${actual} === ${expected}`) : (output = `🥲Assertion Not Passed: ${actual} !== ${expected}`);
  console.log(output);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  for (let key in actual) {
    if (Object.keys(actual).length !== Object.keys(expected).length) {
      console.log(`🥲Assertion Not Passed: ${inspect(actual)} !== ${inspect(expected)}`); return;
    } else if (Array.isArray(actual[key])) {
      for (let i = 0; i < actual[key].length; i++) {
        if (actual[key][i] !== expected[key][i] || actual[key].length !== expected[key].length) {
          console.log(`🥲Assertion Not Passed: ${inspect(actual)} !== ${inspect(expected)}`); return;
        }
      }
    } else if (expected[key] !== actual[key]) {
      console.log(`🥲Assertion Not Passed: ${inspect(actual)} !== ${inspect(expected)}`); return;
    }
  }
  console.log(`😁😁😁Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); return;
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);
