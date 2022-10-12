const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (Array.isArray(array) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  if (array.includes(typeof "object")) {
    return []
  }

  let mas = Array.from(array);
  for (i in array) {
    if (array[i] == "--discard-next") {
      mas.splice(+i, 2, NaN, NaN);
    }
    if (array[i] == "--discard-prev") {
      if (i == 0) {
        mas.splice(i, 1, NaN);
        continue
      }
      mas.splice(i - 1, 2, NaN, NaN);
    }
    if (array[i] == "--double-next") {
      mas.splice((+i), 1, Number.parseInt(mas[+i + 1]));
    }
    if (array[i] == "--double-prev") {
      mas.splice((+i), 1, Number.parseInt(mas[+i - 1]));
    }
    console.log(mas)


  }
  return mas.filter((value) => Number.isNaN(value) === false)

}

module.exports = {
  transform
};
