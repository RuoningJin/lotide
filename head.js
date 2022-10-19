const head = function(arr) {
  return arr[0];
};
const assertEqual = function(head, expected) {
  let output;
  head === expected ? (output = `😁😁😁Assertion Passed: ${head} === ${expected}`) : (output = `🥲Assertion Not Passed: ${head} !== ${expected}`);
  console.log(output);
};
assertEqual(head([56]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

