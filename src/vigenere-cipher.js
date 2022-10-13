const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(string, codeString) {
    if (string == undefined || codeString == undefined) {
      throw new Error("Incorrect arguments!");
    }
    let mas = [];
    console.log(this.reverse)
    codeString = codeString.toLowerCase().repeat(100);
    string = string.toLowerCase();
    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == " ") {
        mas.push(" ")
        continue
      }
      if (string[i].charCodeAt() < 97 || string[i].charCodeAt() > 122) {
        mas.push(string[i])
        continue
      }
      mas.push(String.fromCharCode(((string[i].charCodeAt() - 97) + (codeString[j].charCodeAt()) - 97) % 26 + 97))
      j++
    }
    return this.reverse === true ? mas.join("").toUpperCase() : mas.reverse().join("").toUpperCase()
  }
  decrypt(string, codeString) {
    if (string == undefined || codeString == undefined) {
      throw new Error("Incorrect arguments!");
    }
    let mas = [];
    console.log(this.reverse)
    codeString = codeString.toLowerCase().repeat(100);
    string = string.toLowerCase();
    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == " ") {
        mas.push(" ")
        continue
      }
      if (string[i].charCodeAt() < 97 || string[i].charCodeAt() > 122) {
        mas.push(string[i])
        continue
      }
      mas.push(String.fromCharCode(((string[i].charCodeAt() - 97) - (codeString[j].charCodeAt() - 97) + 26) % 26 + 97))
      j++
    }
    return this.reverse === true ? mas.join("").toUpperCase() : mas.reverse().join("").toUpperCase()
  }
}

module.exports = {
  VigenereCipheringMachine
};
