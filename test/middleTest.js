const assert = require('chai').assert;
const middle = require('../middle');
const eqArray = require('../eqArrays');

describe("#middle", () => {
  
  it("returns an empty array if the length of input array is less than 3", () => {
    assert.isTrue(eqArray(middle([1, 2]), []));
  });
  it("returns the middle item if the length of the input array is odd and greater than 2", () => {
    assert.isTrue(eqArray(middle([1, 2, 3]), [2]));
  });
  it("returns the middle two items if the length of the input array is even and greater than 2", () => {
    assert.isTrue(eqArray(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
  });
});
