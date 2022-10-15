const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(mail) {
  let index = mail.lastIndexOf("@");
  return mail.slice(index + 1);
}

module.exports = {
  getEmailDomain
};
