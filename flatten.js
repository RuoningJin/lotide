const flatten = function(arrays) {
  let newArr = [];
  for (let array of arrays) {
    if (Array.isArray(array)) {
      for (let arr of array) {
        newArr.push(arr);
      }
    } else {
      newArr.push(array);
    }
  }
  return newArr;
};

module.exports = flatten;

// assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]);
