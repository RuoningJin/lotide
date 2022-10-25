const without = function(source, itemsToRemove) {
  let newWords = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      newWords.push(item);
    }
  }
  console.log(newWords);
};

module.exports = without;
