const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  number = String(number);
  let max = 0;

  for (i in number) {
    let array = number.split("")
    array.splice(i, 1)
    array = Number.parseInt(array.join(""))

    if (array > max) {
      max = array
    }
  }
  return max
}

module.exports = {
  deleteDigit
};
