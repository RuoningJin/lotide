const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 5]);
assertArraysEqual([1, 2, 5], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 3, 3]);