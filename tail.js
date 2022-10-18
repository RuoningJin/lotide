const tail = function(actual) {
  let newA = [];
  for (let i = 1; i < actual.length; i++) {
    newA.push(actual[i]);
  }
  return newA;
};

const assertEqual = function(tail, expected) {
  for (let i = 0; i < expected.length; i++) {
    if (tail[i] !== expected[i] || tail.length !== expected.length) {
      return `🥲Assertion Passed: ${tail} !== ${expected}`;
    }
  }
  return `😁Assertion Passed: ${tail} === ${expected}`;
};
const result = tail([]);
console.log(assertEqual(result, ["Lighthouse", "Labs"])); // => will always fail!
