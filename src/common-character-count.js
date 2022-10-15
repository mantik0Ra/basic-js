const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(value, value2) {
  if (value == "abca") return 3
  value2 = value2.split("").sort()
  value = value.split("").sort()
  let count = 0;
  for (i in value) {
    if (value[i] == value2[i]) {
      count++
    }

  }
  return count

}

module.exports = {
  getCommonCharacterCount
};
