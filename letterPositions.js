const assertArraysEqual = function(actual, expected) {
  let output = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i] || expected.length !== actual.length) {
      output = false; break;
    }
  }
  output === true ? console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`) : console.log(`🥲Assertion Not Passed: ${actual} !== ${expected}`);
};
const eqArrays = function(actual, expected) {
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i] || expected.length !== actual.length) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

const sentence = letterPositions("hello");
assertArraysEqual(sentence.h, [ 0 ]);
assertArraysEqual(sentence.e, [ 1 ]);
assertArraysEqual(sentence.l, [ 2, 3 ]);
assertArraysEqual(sentence.o, [ 4 ]);
