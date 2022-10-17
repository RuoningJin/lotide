const head = function(arr) {
  return arr[0];
};
const assertEqual = function(head, expected) {
  let output;
  head === expected ? (output = `😁😁😁Assertion Passed: ${head} === ${expected}`) : (output = `🥲Assertion Passed: ${head} !== ${expected}`);
  return output;
};
console.log(assertEqual(head([56]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

