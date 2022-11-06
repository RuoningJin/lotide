const assert = require('chai').assert;
const letterPositions = require('../letterPositions');
const result = letterPositions('hello world');

describe('#letterPositions', () => {

  it('returns [2, 3, 9] with the letter l for the input string of "hello world"', () => {
    assert.deepEqual(result.l, [2, 3, 9]);
  });
  it('returns [4, 7] with the letter o for the input string of "hello world"', () => {
    assert.deepEqual(result.o, [4, 7]);
  });
  it('returns [10] with the letter d for the input string of "hello world"', () => {
    assert.deepEqual(result.d, [10]);
  });
  it('returns undefined with the letter x for the input string of "hello world"', () => {
    assert.deepEqual(result.x, undefined);
  });
});