const assertArraysEqual = (actual, expected) => {
  const eqArrays = require('./eqArrays');

  if (eqArrays(actual, expected)) {
    return true;
  } else if (!eqArrays(actual, expected)) {
    return false;
  }
};

module.exports = assertArraysEqual;
