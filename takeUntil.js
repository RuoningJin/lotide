const assertArraysEqual = function(actual, expected) {
  let output = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i] || expected.length !== actual.length) {
      output = false; break;
    }
  }
  output === true ? console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`) : console.log(`🥲Assertion Not Passed: ${actual} !== ${expected}`);
};


const takeUntil = function(array, callback) {
  let newArr = [];
  for (const arr of array) {
    if (callback(arr)) {
      return newArr;
    }
    newArr.push(arr);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);