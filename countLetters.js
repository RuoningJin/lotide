const assertEqual = function(actual, expected) {
  let output;
  actual === expected ? (output = `😁😁😁Assertion Passed: ${actual} === ${expected}`) : (output = `🥲Assertion Not Passed: ${actual} !== ${expected}`);
  console.log(output);
};

const countLetters = function(strings) {
  let output = {};

  for (const str of strings) {
    if (output[str]) {
      output[str] += 1;
    } else {
      output[str] = 1;
    }
  }
  console.log(output);

  return output;
};

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["e"], 3);
assertEqual(result1["x"], undefined);