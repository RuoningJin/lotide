const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {

  it("returns true if two arrays are identical", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false if two arrays have different length", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3, 4], [1, 2, 3]), false);
  });
  it("returns false if the arrays are not identical", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 6]), false);
  });
});
