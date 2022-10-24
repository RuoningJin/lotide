const assertArraysEqual = (actual, expected) => {
  const eqArrays = require('./eqArrays');

  if (eqArrays(actual, expected)) {
    console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🥲Assertion Not Passed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
