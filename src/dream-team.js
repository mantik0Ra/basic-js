const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {
  if (!Array.isArray(names)) {
    return false
  }
  let mas = [];
  for (elem of names) {
    if (typeof elem == "string") {

      mas.push(elem.trim()[0].toUpperCase())
    }
  }
  mas.sort((a, b) => {
    return a.charCodeAt() - b.charCodeAt();
  });
  return mas.join("")
}

module.exports = {
  createDreamTeam
};
