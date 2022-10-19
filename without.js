const assertArraysEqual = function(actuals, expected) {
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actuals[i] || expected.length !== actuals.length) {
      return `🥲Assertion Passed: ${actuals} !== ${expected}`;
    }
  }
  return `😁😁😁Assertion Passed: ${actuals} === ${expected}`;
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

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));