const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let mas = [];
  for (i in arr) {
    if (arr[i] == -1) {
      mas.push(i)
    }
  }
  arr = arr.filter((elem) => elem !== -1)
  arr = arr.sort((a, b) => {
    return a - b
  })
  for (elem of mas) {
    arr.splice(elem, 0, -1)
  }
  return arr

}

module.exports = {
  sortByHeight
};
