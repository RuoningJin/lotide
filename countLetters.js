const countLetters = function(strings) {
  let output = {};
  for (const str of strings) {
    if (str !== ' ') {
      if (output[str] === undefined) {
        output[str] = 0;
      }
      output[str] += 1;
    }
  }
  return output;
};
module.exports = countLetters;
