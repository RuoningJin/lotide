const eqArrays = (actual, expected) => {

  if (actual.length !== expected.length) return false;

  for (const i in actual) {

    if (Array.isArray(actual[i])) {
      if (eqArrays(actual[i], expected[i]))
        continue;
      return false;
    }

    if (expected[i] !== actual[i]) {
      return false;
    }
  }
  return true;
};


console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false


module.exports = eqArrays;
