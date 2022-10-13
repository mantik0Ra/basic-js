const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 0, additionSeparator = "|" }) {
  let addition2 = String(addition);
  let mas = [];
  if (addition2 == "") {
    additionSeparator = ""
  }
  if (repeatTimes == 1) {
    separator = ""
  }
  if (additionRepeatTimes > 1) {
    addition2 = (`${addition}` + `${additionSeparator}`).repeat(+additionRepeatTimes - 1);
    addition2 = addition2 + `${addition}`
  }
  for (let i = 0; i < repeatTimes; i++) {
    if (i + 1 == repeatTimes) {
      separator = ""
    }
    mas.push(str + addition2 + separator);
  }

  return mas.join("")
}

module.exports = {
  repeater
};
