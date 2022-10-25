const assert = require('chai').assert;
const tail = require('../tail');
const eqArray = require('../eqArrays');

describe("#middle", () => {
  
  it("returns an empty array if the array is empty", () => {
    assert.isTrue(eqArray(tail([]), []));
  });
  it("returns the middle two items if the length of the input array is even and greater than 2", () => {
    assert.isTrue(eqArray(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]));
  });
});
