const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(files) {
  let mas = [];
  for (elem of files) {
    if (mas.includes(elem)) {
      let count = mas.filter((e) => e == elem).length
      if (mas.includes(elem + `(${count})`)) {
        count++
      }
      mas.push(elem + `(${count})`)
    } else {
      mas.push(elem)
    }
  }
  return mas
}

module.exports = {
  renameFiles
};
