const assertEqual = function(actual, expected) {
  let output;
  actual === expected ? (output = `😁😁😁Assertion Passed: ${actual} === ${expected}`) : (output = `🥲Assertion Not Passed: ${actual} !== ${expected}`);
  console.log(output);
};

const findKey = (names, backcall) => {
  for (const name in names) {
    if (backcall(names[name])) {
      return name;
    }
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
