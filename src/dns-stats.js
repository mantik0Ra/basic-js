const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(array) {
  let map = new Map();
  for (i in array) {
    let mas = array[i].split(".").reverse();
    for (elem in mas) {
      let key = "." + mas.slice(0, +elem + 1).join(".")
      console.log(key)
      if (map.has(key)) {
        let value = +(map.get(key)) + 1
        map.set(key, value)
      } else {
        map.set(key, 1)
      }
    }
  }
  return Object.fromEntries(map)

}

module.exports = {
  getDNSStats
};
