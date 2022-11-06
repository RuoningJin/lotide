const assert = require('chai').assert;
const countOnly = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {

  it('the count in the object with key of the firstname will be 1 if person who needs to be counted in the array only showed by once', () => {
    assert.equal(result1["Jason"], 1);
  });
  it('the count in the object with key of the firstname will be 2 if person who needs to be counted in the array showed up twice', () => {
    assert.equal(result1["Fang"], 2);
  });
  it('the count in the object with key of the firstname will be undefined if the person we need to count not showing on the list', () => {
    assert.equal(result1["Karima"], undefined);
  });
  it('the count in the object with key of the firstname will be undefined if we do not want to count the person', () => {
    assert.equal(result1["Agouhanna"], undefined);
  });

});