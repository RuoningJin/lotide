const middle = function(array) {
  
  let index = array.length / 2 - 1;
  let newArray = [];

  if (array.length < 3) {
    return newArray;
  }
  if (array.length % 2 === 0) {
    newArray.push(array[index], array[index + 1]);
  }
  
  if (array.length % 2 !== 0) {
    newArray.push(array[Math.ceil(index)]);
  }

  return newArray;
};
console.log(middle([1, 2]));
module.exports = middle;
