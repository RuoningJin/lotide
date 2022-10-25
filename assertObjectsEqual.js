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


module.exports = assertObjectsEqual;
