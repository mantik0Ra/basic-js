const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let mas = [];
  let count = 0;
  for (elem of matrix) {
    for (i in elem) {
      if (elem[i] == 0) {
        mas.push(i)
      }
      if (mas.includes(i)) {
        continue
      }
      count += elem[i]
    }
  }
  return count
}

module.exports = {
  getMatrixElementsSum
};
