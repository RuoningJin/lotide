const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assert", () => {
  it("returns true if two items are identical", () => {
    assert.strictEqual(assertEqual('5', '5'), true);
  });
  it("returns false if two items are the same but the types are different", () => {
    assert.strictEqual(assertEqual('5', 5), false);
  });
  it("returns false if the type is the same but the value is different", () => {
    assert.strictEqual(assertEqual('5', '6'), false);
  });
});
