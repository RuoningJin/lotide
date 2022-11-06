const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {

  it('returns true if two arrays are equal', () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });
  it('returns true if two arrays are equal with nested arrays', () => {
    assert.deepEqual(flatten([1, [2, 3], 4, 5]), [1, 2, 3, 4, 5]);
  });
  it('returns [] if empty array used', () => {
    assert.deepEqual(flatten([]), []);
  });
});