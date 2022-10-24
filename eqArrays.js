const eqArrays = (actual, expected) => {
  for (const i in actual) {
    if (expected[i] !== actual[i] || expected.length !== actual.length) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
