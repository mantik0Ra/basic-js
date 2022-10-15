const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(code) {
  let mas = []
  let count = 0;
  for (i in code) {
    if (code[+i + 1] == code[i]) {
      count++
      continue
    }
    if (code[+i + 1] !== code[i]) {
      count++
      if (count == 1) {
        mas.push(code[i])
        count = 0
      } else {
        mas.push(`${count}${code[+i - count + 1]}`)
        count = 0;
      }
    }
  }
  return mas.join("")
}

module.exports = {
  encodeLine
};
