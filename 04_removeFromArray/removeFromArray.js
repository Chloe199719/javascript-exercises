const removeFromArray = function (arr, ...num) {
  for (const arg of num) {
    let index = arr.indexOf(arg);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
  return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
